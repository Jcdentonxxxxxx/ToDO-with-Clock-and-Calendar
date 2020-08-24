//Selectors
const todoMain = document.querySelector('.todo');
const todoInput = document.querySelector('.todo__input');
const todoButton = document.querySelector('.todo__button');
const todoList = document.querySelector('.todo__list');
const filterOption = document.querySelector('.todo__filter');
const calendar = document.querySelector('.calendar');
const calendarMainDate = document.querySelector('.calendar-main__date');
const todoHeader = document.querySelector('.todo__header');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close');
const arrayDaysWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const modalAffairs = modal.querySelector('.modal__affairs');
//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
document.addEventListener('DOMContentLoaded', getChosenDate);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
calendar.addEventListener('click', getTodos);
calendar.addEventListener('click', getChosenDate);
todoHeader.addEventListener('click', showModal);
modalClose.addEventListener('click', closeModal);
modalAffairs.addEventListener('click', filterAffairs);
//Functions

function addTodo(event) {
    event.preventDefault();
    const monthAndYearArr = calendarMainDate.getAttribute('data-monthAndYear').split(',');
    const dayOfMonth = calendar.querySelector('.calendar .active').innerHTML;
    const date = new Date(`${monthAndYearArr[0]}-${+monthAndYearArr[1] + 1}-${dayOfMonth}`);
    

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo__block');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo__item');
    todoDiv.append(newTodo);


    saveLocalTodos(todoInput.value, date);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('todo__complete');
    todoDiv.append(completedButton);


    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('todo__trash');
    todoDiv.append(trashButton);

    todoList.append(todoDiv);

    todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target;
    if (item.closest('.todo__trash')) {
        const todo = item.closest('.todo__block');
        todo.classList.add('todo__fall');
        todo.setAttribute('data-remove', true)

        let collectionTodo = todoList.querySelectorAll('.todo__block');
        let index;
        for (let i = 0; i < collectionTodo.length; i++) {
            if (collectionTodo[i].dataset.remove) index = i;
        }
        const monthAndYearArr = calendarMainDate.getAttribute('data-monthAndYear').split(',');
        const dayOfMonth = calendar.querySelector('.calendar .active').innerHTML;

        
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });

        removeLocalTodos(todo, index, monthAndYearArr, dayOfMonth);

    };


    if (item.closest('.todo__complete')) {
        const todo = item.closest('.todo__block');
        todo.classList.toggle('completed');
        let isComplete;

        if (todo.dataset.complete == 'true') {
            todo.setAttribute('data-complete', false);
            todo.setAttribute('data-find', 'findMe');
            isComplete = false;
        } else {
            todo.setAttribute('data-complete', true);
            isComplete = true;
            todo.setAttribute('data-find', 'findMe');
            
        }

        let collectionTodo = todoList.querySelectorAll('.todo__block');
        let index;
        for (let i = 0; i < collectionTodo.length; i++) {
            if (collectionTodo[i].dataset.find) index = i;
        }
        const monthAndYearArr = calendarMainDate.getAttribute('data-monthAndYear').split(',');
        const dayOfMonth = calendar.querySelector('.calendar .active').innerHTML;

        changeLocalTodos(todo, index, isComplete, monthAndYearArr, dayOfMonth);
        todo.removeAttribute('data-find');
    };
}

function filterTodo(event) {
    const todos = todoList.children;
    if (!todos.length) return;
    

    for (const todo of todos) {
        switch (event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    }
}


function saveLocalTodos(todo, date) {    
    let todos;     
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push({
        todoText: todo,
        completed: false,
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()

    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(e) {
    let todoBlocks = document.querySelectorAll('.todo__list .todo__block');
    for (const block of todoBlocks) {
        block.remove();
    }
    const monthAndYearArr = calendarMainDate.getAttribute('data-monthAndYear').split(',');
    const dayOfMonth = calendar.querySelector('.calendar .active').innerHTML;

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    todos = todos.filter(todoObj => {
        
        if (todoObj.day == dayOfMonth && todoObj.month == monthAndYearArr[1] && todoObj.year == monthAndYearArr[0]) {
            
            return true;
        }
    })
    
    todos.forEach(function (todo) {
        
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo__block');

        if (todo.completed === true) {
            todoDiv.classList.add('completed');
            todoDiv.setAttribute('data-complete', true);
        }

        const newTodo = document.createElement('li');
        newTodo.innerText = todo.todoText;
        newTodo.classList.add('todo__item');
        todoDiv.append(newTodo);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('todo__complete');
        todoDiv.append(completedButton);


        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('todo__trash');
        todoDiv.append(trashButton);

        todoList.append(todoDiv);
    });
}

function removeLocalTodos(todo, index, monthAndYearArr, dayOfMonth) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    let count = 0;
    let todos2 = [];
    todos = todos.map(todoObj => {

        if (todoObj.day == dayOfMonth && todoObj.month == monthAndYearArr[1] && todoObj.year == monthAndYearArr[0]) {
            
            if (count == index) {
                ++count;
                return;
            }
            ++count;

        }
        return todoObj;
    })
    
    for (let i = 0; i < todos.length; i++) {
        
        if (todos[i]) {
            todos2.push(todos[i]);
        };
    }
    
    
    localStorage.setItem('todos', JSON.stringify(todos2));
}

function changeLocalTodos(todo, index, isComplete, monthAndYearArr, dayOfMonth) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    let count = 0;

    todos = todos.map(todoObj => {
        
        if (todoObj.day == dayOfMonth && todoObj.month == monthAndYearArr[1] && todoObj.year == monthAndYearArr[0]) {
            
            if(count == index) {
                todoObj.completed = !todoObj.completed;
            }
            ++count;
            
        }
        return todoObj;
    })

    
    localStorage.setItem('todos', JSON.stringify(todos));
}


function getChosenDate(e) {
    
    let tr;
    if (e.target.tagName !== 'TD') {
        if (e.currentTarget === document) {
            let td = calendar.querySelector('.active');
            tr = td.parentElement;
        } else {
            return;  
        }
    }  
    if (!tr) {
        if (e.target.hasAttribute('anothermonth')) return;
        tr = e.target.parentElement;
    } 
    let listTd = tr.querySelectorAll('td');
    let dayWeekStr;
    let tdWithActive;
    
    for (let i = 0; i < listTd.length; i++) {        
        if (listTd[i].classList.contains('active')) {
            dayWeekStr = arrayDaysWeek[i];
            tdWithActive = listTd[i];
        }
    }

    let todoHeader = todoMain.querySelector('.todo__header');
    if (tdWithActive.classList.contains('duble-active')) {
        dayWeekStr = 'Сегодня';
    }
    todoHeader.children[0].innerHTML = dayWeekStr;
    
    todoHeader.children[1].innerHTML = tdWithActive.innerHTML;
    
}

function showModal(e) {
    
    modal.classList.toggle('show');
    let modalContent = modal.querySelector('.modal__content');
    setTimeout(()=> {
        modalContent.style.transform = 'rotateX(0deg)';
    },200)
    createList();
}

function createList() {
    let todos;
    let lastRow = modal.querySelector('.modal__affairs tr');
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    for (let i = 0; i < todos.length; i++) {
        let todoObj = todos[i];
        let tr = document.createElement('tr');
        if (todoObj.completed) {
            tr.classList.add('completed');
        }
        let tdAffair = document.createElement('td');
        tdAffair.innerText = todoObj.todoText;
        tr.append(tdAffair);

        let tdDate = document.createElement('td');
        let day = todoObj.day;        
        if(day < 10) day = '0' + day;

        let month = todoObj.month;
        if (month < 10) month = '0' + month;

        tdDate.innerText = `${day}.${month}.${todoObj.year}`;
        tr.append(tdDate);

        lastRow.after(tr);
        lastRow = tr;


    }
}

function closeModal(e) {
    modal.classList.remove('show');
    let modalContent = modal.querySelector('.modal__content');
    modalContent.style.transform = 'rotateX(90deg)';
    let listRow = modal.querySelectorAll('tr');

    for (let i = 0; i < listRow.length; i++) {
        if (listRow[i].classList.contains('modal__list')) continue;
        listRow[i].remove();
    }
}


function filterAffairs(e) {
    if (!event.target.hasAttribute('data-filter')) return;
    let trCollect = modal.querySelectorAll('tr:not(:first-child)');
    trCollect = Array.from(trCollect);

    trCollect.sort(function (a, b) {

        let innerA = a.children[1].innerHTML;
        innerA = innerA.split('.');
        let dateA = new Date(`${innerA[2]}-${innerA[1]}-${innerA[0]}`);
        let msA = dateA.getTime();

        let innerB = b.children[1].innerHTML;
        innerB = innerB.split('.');
        let dateB = new Date(`${innerB[2]}-${innerB[1]}-${innerB[0]}`);
        let msB = dateB.getTime();

        if (msA > msB) return 1;
        if (msA == msB) return 0;
        if (msA < msB) return -1;
    })


    for (let i = 0; i < trCollect.length; i++) {
        modalAffairs.append(trCollect[i]);
    }
}