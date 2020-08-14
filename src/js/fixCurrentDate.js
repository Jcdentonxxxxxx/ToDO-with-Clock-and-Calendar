let arrMonthCalendar = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let calendarMainDateList = document.querySelectorAll('.calendar-main__date span');

export default function fixCurrentDate(date) {
    let monthStr = arrMonthCalendar[date.getMonth()];
    let year = date.getFullYear();
    calendarMainDateList[0].innerHTML = monthStr;
    calendarMainDateList[1].innerHTML = year;
}