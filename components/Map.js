import React, { useRef }  from 'react'
import MapView, {Marker} from 'react-native-maps'
import mapstyle from '../helper/mapstyle.json'
import {useDispatch, useSelector} from 'react-redux'
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';
import { setTravelTimeInformation } from '../slices/navSlice';

const Map = () => {

    const origin = useSelector((state) => state.nav.origin);
    const destination= useSelector((state) => state.nav.destination);
    const dispatch = useDispatch();
    const mapRef =useRef(null);
    let prevOrigin= null;
    let prevDestination= null;

    const autoZoom = () => {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], true);
      };

      const mapAPICall = () => {
        if (!origin || !destination)  return;
        if (prevOrigin==origin && prevDestination==destination) return;

        prevOrigin=origin;
        prevDestination=destination;
        
          const getTravelTime = async () => {
            fetch(
              `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&departure_time=now&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`
            )
              .then((res) => res.json())
              .then((data) => {
                const timeData= data.rows[0].elements[0].duration_in_traffic.text>data.rows[0].elements[0].duration.text?data.rows[0].elements[0].duration_in_traffic:data.rows[0].elements[0].duration;
                dispatch(setTravelTimeInformation(timeData));
              });
            }
          getTravelTime();
      }


  return (
      <MapView
          style={{flex: 2}}
          mapType='mutedStandard'
          ref={mapRef}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          customMapStyle={mapstyle}>

          {origin && destination && (
            <MapViewDirections 
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={2}
            strokeColor="white"
            />
          )}
           
          {origin?.location && (
        <Marker
          identifier="origin"
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
        />
      )}

      {destination?.location && (
        <Marker
          identifier="destination"
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          pinColor='blue'
        />
      )}

      {origin?.location && destination?.location && GOOGLE_MAPS_API_KEY && (
        autoZoom(),
        mapAPICall()
      )}

    </MapView>
  )
}

export default Map