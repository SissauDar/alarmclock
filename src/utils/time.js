let now = new Date();

const daysOfTheWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const monthsOfTheYear = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

// import time from '../utils/time';
// time.getHours();

export default {
    getCurrentTime() {

        const now = new Date();
        const degrees = new Object;
        degrees.seconds = (now.getSeconds() * 6);
        degrees.minutes = (now.getMinutes() * 6);
        if (now.getHours() > 12) {
            degrees.hours = ((now.getHours() - 12) * 30);
        } else {
            degrees.hours = (now.getHours() * 30);
        }
        return degrees;
    },

    getHours() {
        now = new Date();
        return now.getHours();
    },
    getMinutes() {
        now = new Date();
        return now.getMinutes();
    },
    getSeconds() {
        now = new Date();
        let second = "0";
        if (now.getSeconds() <= 9) {
            second += now.getSeconds()
        } else {
            second = now.getSeconds();
        }
        return second;
    },
    getDay() {
        now = new Date();
        return daysOfTheWeek[now.getDay()];
    },
    getMonth() {
        now = new Date();
        return monthsOfTheYear[now.getMonth()];
    },
    getDayInMonth() {
        now = new Date();
        return now.getDate();
    },
    getClock() {
        now = new Date();
        let minute = "0";
        let hour = "0";
        if (now.getMinutes() <= 9) {
            minute += now.getMinutes()
        } else {
            minute = now.getMinutes();
        }

        if (now.getHours() <= 9) {
            hour += now.getHours()
        } else {
            hour = now.getHours();
        }
        return `${hour}:${minute}`;
    }

};