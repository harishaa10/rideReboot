import React, { useEffect, useRef }  from 'react'
import MapView, {Marker} from 'react-native-maps'
import mapstyle from '../helper/mapstyle.json'
import {useSelector} from 'react-redux'
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';

const Map = () => {

    const origin = useSelector((state) => state.nav.origin);
    const destination= useSelector((state) => state.nav.destination);
    const mapRef =useRef(null);

    // useEffect(() => {
    //     if (origin) {
    //       mapRef.current.animateToRegion({
    //         latitude: origin.location.lat,
    //         longitude: origin.location.lng,
    //         latitudeDelta: 0.005,
    //         longitudeDelta: 0.005,
    //       });
    //     }
    //   }, [origin]);

      useEffect(() => {     
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['org', 'dest'], {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
      }, [origin, destination]);

      useEffect(() => {
        if (!origin || !destination) return;

          const getTravelTime = async () => {
            fetch(
              `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
            }
      }, [destination]);

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
          identifier="org"
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
        />
      )}

      {destination?.location && (
        <Marker
          identifier="dest"
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          pinColor='blue'
        />
      )}

    </MapView>
  )
}

export default Map