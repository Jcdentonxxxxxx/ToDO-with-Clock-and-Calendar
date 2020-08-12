import createCalendar from '../create-calendar.js';

/*==== BigClock ====*/
let bigClockDate = document.querySelector('.big-clock__date');

bigClockDate.addEventListener('click', function (e) {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let table = document.querySelector('.calendar table');
    let calendar = document.querySelector('.calendar');
    if (table) {
        table.remove();
    }
    createCalendar(calendar, year, month);
});