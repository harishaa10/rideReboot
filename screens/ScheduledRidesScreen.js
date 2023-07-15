import { View} from 'react-native'
import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars'
import EventRender from '../components/EventRender'
import { useSelector } from 'react-redux'

const ScheduledRidesScreen = () => {

    const [selected, setSelected] = useState(new Date().toISOString().split('T')[0])
    const schedule= useSelector(state => state.schedule.schedule);
    var dates= {};

    if( schedule.type==="schedule"){
        schedule.dates.forEach((date)=>{
            dates[date]={marked: true, dotColor: "purple"}
        })
    }


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
        ...dates
    }}
    />
    <View style={{flex:1, borderTopLeftRadius:25, borderTopRightRadius:25}}>
    { selected in dates && (
        <EventRender date={selected} dets={schedule}/>
    )
    }
    </View>
    </View>
    )
}

export default ScheduledRidesScreen
