//Selectors
const todoInput = document.querySelector('.todo__input');
const todoButton = document.querySelector('.todo__button');
const todoList = document.querySelector('.todo__list');
const filterOption = document.querySelector('.todo__filter');
//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo__block');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo__item');
    todoDiv.append(newTodo);

    saveLocalTodos(todoInput.value);

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

        removeLocalTodos(todo, index);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });

    };


    if (item.closest('.todo__complete')) {
        const todo = item.closest('.todo__block');
        todo.classList.toggle('completed');
    };
}

function filterTodo(event) {
    const todos = todoList.children;
    if (!todos.length) return;
    console.log(todos);

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


function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo__block');

        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
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

function removeLocalTodos(todo, index) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}