let arrMonthCalendar = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let calendarMainDate = document.querySelector('.calendar-main__date');
let calendarMainDateList = document.querySelectorAll('.calendar-main__date span');
 
export default function fixCurrentDate(date) {
    let monthStr = arrMonthCalendar[date.getMonth()];
    let year = date.getFullYear();
    let month = date.getMonth() + 1;    
    calendarMainDateList[0].innerHTML = monthStr;
    calendarMainDateList[1].innerHTML = year;
    calendarMainDate.setAttribute('data-monthAndYear', `${year},${month}`);
}