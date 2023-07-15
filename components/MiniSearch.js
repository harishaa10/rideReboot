import { View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_API_KEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { Icon } from '@rneui/base';

const MiniSearch = ({placeholdertext, isOrigin, width=null}) => {

    const dispatch = useDispatch();

    function handleOnPress(data, details = null){
        const loc= isOrigin? setOrigin:setDestination;
        dispatch(loc({
            location: details.geometry.location,
            description: data.description
            }));
    }

  return (
    <View>
      <GooglePlacesAutocomplete
        enablePoweredByContainer={false}
        styles={{
            container:{
                flex: 0,
                width: width? width: "95%",
            },
            textInput:{
              height: 45,
              paddingTop:5
            }
        }
        }
        placeholder={placeholdertext}
        fetchDetails={true}
        autoFocus={true}
        minLength	={3}
        debounce={400}
        renderLeftButton={() => {
            colour="";
            if(isOrigin) colour="#517fa4";
            else colour="#f50";
            return (
            <Icon
                name='disc'
                type='feather'
                color={colour}
                style={{margin: 10}}
              />
            )
        }}
        query={{
            key:  GOOGLE_MAPS_API_KEY,
            language: 'en',
        }}
        onPress={handleOnPress}
        />
    </View>
  )
}

export default MiniSearch