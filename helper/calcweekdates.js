function calcweekdates(start, end, weekdays) {

    let currentDate= new Date(start);
    const stopDate = new Date(end);

    const selectedDaysArray = Object.keys(weekdays)
  .filter((day) => weekdays[day])
  .map((day) => parseInt(day));

    var days = [];

    while (currentDate <= stopDate) {
        if (selectedDaysArray.includes(currentDate.getDay())) {
            days.push(currentDate.toISOString().slice(0,10));
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;

}

export default calcweekdates;