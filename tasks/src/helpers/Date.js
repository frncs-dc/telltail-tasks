// Check if hour is in am or pm
function getPeriod( hour ){
    if(hour > 12){
        return "PM" 
    } else {
        return "AM"
    }
}

// param stringDate    a string that will be converted to Date
// return objDate      an object that has the ff properties:
//                         the date object,
//                         month index,
//                         day,
//                         year,
//                         hour,
//                         minutes,
//                         period
// 0123456789012345
// 2023-09-01T16:28:00.000Z
// 2023-09-07T21:56
function toDate( stringDate ) {

    const iMonth =  Number(stringDate.slice(5,7)) - 1
    const day =     stringDate.slice(8,10)
    const year =    stringDate.slice(0,4)
    const hour =    stringDate.slice(11,13)
    const minutes=  stringDate.slice(14,16)
    const period =  getPeriod(Number(hour))
    const date =    new Date(year, iMonth, day, hour, minutes, 0)

    const objDate = {
        iMonth: iMonth,
        day: day,
        year: year,
        hour: hour,
        minutes: minutes,
        period: period,
        date: date
    }

    return objDate
}

// TIMEZONE CONVERSION GRRR
function toTimeZone( date ) {
    //convert to UTC+8
    // how to convert:
    // 1. add 8 hours
    // 2. if hours > 24, -24 from the sum. then increase the day

    date.hour = Number(date.hour) + 8

    if(date.hour > 24){
        date.day = date.day + 1
        date.hour = date.hour - 24
    }

    return date
}

// convert military time to normal time
function toStandard ( hour ) {

    if( hour > 12){
        hour = hour - 12
    }

    return hour
}

// date to word function
function toWords ( date ) {

    let objDate = toDate(date)
    console.log(objDate)
    objDate = toTimeZone(objDate)
    console.log(objDate)
    const toReturn = "Due on " + (objDate.iMonth + 1) + "/" +
                                objDate.day + "/" +
                                objDate.year + " at " +
                                (toStandard(Number(objDate.hour))) + ":" +
                                objDate.minutes +
                                objDate.period

    return toReturn
}

// tracking of deadlines



// number month to month word function

module.exports = {
    toDate,
    toWords
}