let arrMonthBigClock = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


export default function getMonthStr(date) {
    let MonthBigClock = arrMonthBigClock[date.getMonth()];
    //let MonthCalendar = arrMonthCalendar[date.getMonth()];
    return {
        MonthBigClock: MonthBigClock,
        //monthCalendar: MonthCalendar
    };
}