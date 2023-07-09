import { StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars'
import EventRender from '../components/EventRender'

const ScheduledRidesScreen = () => {

    const [selected, setSelected] = useState(new Date().toISOString().split('T')[0])

  return (
    <View style={{flex:1}}>
    <Calendar 
    minDate={new Date().toISOString().split('T')[0]}
    maxDate={new Date(new Date().getTime() + 90*86400000).toISOString().split('T')[0]}
    enableSwipeMonths={true}
    disableAllTouchEventsForDisabledDays={true}
    onDayPress={(day) => {  
        setSelected(day.dateString)
    }}
    markedDates={{
        [selected]: {
            selected: true,
            selectedColor: 'grey',
            marked: true
        },
        '2023-07-15': {marked: true, dotColor: 'red', activeOpacity: 0},
    }}
    />
    <View style={{flex:1, borderTopLeftRadius:25, borderTopRightRadius:25}}>
    <EventRender date={selected}/>
    </View>
    </View>
    )
}

export default ScheduledRidesScreen
