function calcdaydates(start, end, num) {

    let currentDate= new Date(start);
    const stopDate = new Date(end);

    var days = [];

    while (currentDate <= stopDate) {
        days.push(currentDate.toISOString().slice(0,10));
        currentDate.setDate(currentDate.getDate() + num);
    }
    
    return days;
}

export default calcdaydates;