import { StyleSheet, Text, View } from 'react-native'
import React , {useState}from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Day', value: 'option1' },
    { label: 'Week', value: 'option2' }];

const MiniDropDown = () => {

    const [value, setValue] = useState("option2");

  return (
    <Dropdown
    data={data}
    placeholder='Select'
    value={value}
    style={styles.dropdown}
    labelField={'label'}
    valueField={'value'}
    onChange={item => setValue(item.value)}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    />
  )
}

export default MiniDropDown

const styles = StyleSheet.create({
    container:{
        flex: 0,
        padding: 10,
    },
    dropdown: {
        margin: 10,
        height: 40,
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
})