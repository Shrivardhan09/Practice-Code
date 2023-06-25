/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */

function timeConversion(s) {
    let timeSplit = s.slice(0, -2).split(':');
    console.log(timeSplit);
    let flag = s.slice(-2);
    if (flag === 'AM') {
        if (timeSplit[0] == '12') {
            timeSplit[0] = '00';
        }
        return `${timeSplit[0]}:${timeSplit[1]}:${timeSplit[2]}`;
    }
    if (flag === 'PM') {
        if (timeSplit[0] !== '12') {
            timeSplit[0] = String(parseInt(timeSplit[0]) + 12);
        }
        return `${timeSplit[0]}:${timeSplit[1]}:${timeSplit[2]}`;
    }
}
console.log(timeConversion('03:01:01PM'));
console.log(timeConversion('01:00:00AM'));
console.log(timeConversion('07:05:45PM'));
