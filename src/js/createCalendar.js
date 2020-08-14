import fixCurrentDate from './fixCurrentDate';


let calendar = document.querySelector('.calendar');
let currentDate = null;
let table = null;

export default function createCalendar(elem , year, month) {
    table = document.createElement('table');
    createTbody(elem, table);
    createRow(table);

    let date = new Date(year, month - 1);
    currentDate = date;

    let todayDay = new Date().getDate();
    let todayMonth = new Date().getMonth();
    let todayYear = new Date().getFullYear();

    fixCurrentDate(currentDate);

    let qualityDays = new Date(year, month, 0).getDate();
    let dayOfWeek = date.getDay();
    if (dayOfWeek == 0) {
        dayOfWeek = 7;
    }
    if (dayOfWeek != 1) {
        let count = 7 - (8 - dayOfWeek);
        let emptyFirstTd = table.querySelectorAll('td');
        let date = new Date(year, month - 1, 0).getDate();

        for (let i = count; i > 0; i--) {
            emptyFirstTd[i - 1].innerHTML = date;
            emptyFirstTd[i - 1].style.color = 'grey';
            date--;
        }
    }

    let lastCols = calendar.querySelector('tr:last-child').querySelectorAll('td');


    for (let i = 1; i <= qualityDays; i++) {

        lastCols[dayOfWeek - 1].innerHTML = i;
        if (i === todayDay && todayMonth === date.getMonth() && todayYear === date.getFullYear()) {
            lastCols[dayOfWeek - 1].className = 'active duble-active';
        }
        dayOfWeek += 1;

        if (dayOfWeek > 7 && i + 1 <= qualityDays) {
            createRow();
            lastCols = calendar.querySelector('tr:last-child').querySelectorAll('td');
            dayOfWeek = 1;
        }
    }

    let differenceTr = 6 - table.querySelectorAll('tr').length;
    if (dayOfWeek != 7 || differenceTr > 0) {

        let restDays = (7 - (dayOfWeek - 1)) + differenceTr * 7;
        if (dayOfWeek > 7) {
            createRow();
            lastCols = calendar.querySelector('tr:last-child').querySelectorAll('td');
            dayOfWeek = 1;
        }
        for (let i = 1; i <= restDays; i++) {
            lastCols[dayOfWeek - 1].innerHTML = i;
            lastCols[dayOfWeek - 1].style.color = 'grey';
            dayOfWeek += 1;

            if (dayOfWeek > 7 && i + 1 <= restDays) {
                createRow();
                lastCols = calendar.querySelector('tr:last-child').querySelectorAll('td');
                dayOfWeek = 1;
            }
        }
    }
}



function createRow(table) {
    let lastRow = calendar.querySelector('tr:last-child');

    let tr = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        let td = document.createElement('td');
        tr.append(td);
    }
    if (lastRow) {
        lastRow.after(tr);
    } else {
        table.tBodies[0].append(tr);
    }

}

function createTbody(elem, table) {
    let tBody = document.createElement('tbody');
    table.append(tBody);
    elem.append(table);
}

createCalendar(calendar, new Date().getFullYear(), new Date().getMonth() + 1);


/*==== Calendar Arrows====*/


let calendarMainArrows = document.querySelector('.calendar-main__arrows');
calendarMainArrows.addEventListener('click', changeCalendar);


function changeCalendar(e) {

    if (e.target.classList.contains('calendar-main__arrow--top')) {

        let currentMonth = currentDate.getMonth() + 1;
        let currentYear = currentDate.getFullYear();

        if (currentMonth - 1 <= 0) {
            currentMonth = 13;
            currentYear = currentYear - 1;
        }
        if (table) {
            table.remove();
        }
        createCalendar(calendar, currentYear, currentMonth - 1);

    } else if (e.target.classList.contains('calendar-main__arrow--bottom')) {

        let currentMonth = currentDate.getMonth() + 1;
        let currentYear = currentDate.getFullYear();

        if (currentMonth - 1 > 13) {
            currentMonth = 1;
            currentYear = currentYear + 1;
        }
        if (table) {
            table.remove();
        }
        createCalendar(calendar, currentYear, currentMonth + 1);
    }
}
