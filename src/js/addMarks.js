export default function addMarks() {
    const daysList = document.querySelectorAll('.calendar td:not([anothermonth])');
    const monthAndYearArr = document.querySelector('.calendar-main__date').getAttribute('data-monthAndYear').split(',');

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos = todos.filter(todoObj => {

        if (todoObj.month == monthAndYearArr[1] && todoObj.year == monthAndYearArr[0]) {

            return true;
        }
    })

    for (let i = 0; i < todos.length; i++) {
        const number = todos[i].day;
        const day = daysList[number - 1];
        if (!day.classList.contains('haveTodo')) {
            day.classList.add('haveTodo');
        }
        
    }
}