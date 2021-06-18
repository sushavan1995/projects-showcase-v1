const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
];

const giveawayDate = document.querySelector(".giveaway__date h4");
const giveawayDeadline = document.querySelector(".giveaway__deadline");
const giveawayFormat = document.querySelectorAll(".giveaway__format h4");

let futureDate = new Date(2021, 11, 22, 17, 30, 0);

let day = days[futureDate.getDay()];
let month = months[futureDate.getMonth()];
let date = futureDate.getUTCDate();
let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minute = futureDate.getMinutes();

giveawayDate.textContent = `Giveaway ends on ${day}, ${month} ${date}, ${year}, ${hours}:${minute}pm`;

const futureTime = futureDate.getTime();
function getRemainingTime() {
    const today = new Date().getTime();
    const t = (futureTime - today);

    //1 s = 1000ms
    //1 minute = 60s
    //1 hour = 60min
    //1 day = 24 hour

    //all values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    //remaining values
    const daysLeft = Math.floor(t / oneDay);
    const hoursLeft = Math.floor((t % oneDay) / oneHour);
    const minutesLeft = Math.floor((t % oneHour) / oneMinute);
    const secondsLeft = Math.floor((t % oneMinute) / oneSecond);

    const resLeft = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

    function customFormat(item) {
        if(item < 10) {
            item = `0${item}`
        }
        return item;
    }

    giveawayFormat.forEach(function(item, index) {
        item.textContent = customFormat(resLeft[index]);
    });

    if(t<0) {
        clearInterval(countDown);
        giveawayDeadline.innerHTML = `<h4>This giveaway is expired.</h4>`;
    }
}


let countDown = setInterval(getRemainingTime,1000);