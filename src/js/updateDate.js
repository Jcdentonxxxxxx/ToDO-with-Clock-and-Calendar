import getMonthStr from './getMonth';

let infoTime = {};

function update() {
    let spanList = document.body.querySelectorAll('span');

    let date = new Date();


    let hours = date.getHours();
    infoTime.hours = hours;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    infoTime.seconds = seconds;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    infoTime.minutes = minutes;

    let day = date.getDate();
    infoTime.day = day;

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    infoTime.month = month;

    Object.assign(infoTime, getMonthStr(date));

    let year = date.getFullYear();
    infoTime.year = year;


    for (let i = 0; i < spanList.length; i++) {
        if (!spanList[i].dataset.clock) continue;
        spanList[i].innerHTML = infoTime[spanList[i].dataset.clock];
    }


}

update();

setInterval(() => {
    update();
}, 1000);