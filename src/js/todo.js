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
        let isComplete;

        if (todo.dataset.complete == 'true') {
            todo.setAttribute('data-complete', false);
            todo.setAttribute('data-find', 'findMe');
            isComplete = false;
        } else {
            todo.setAttribute('data-complete', true);
            isComplete = true;
            todo.setAttribute('data-find', 'findMe');
            console.dir(todo);
        }

        let collectionTodo = todoList.querySelectorAll('.todo__block');
        let index;
        for (let i = 0; i < collectionTodo.length; i++) {
            if (collectionTodo[i].dataset.find) index = i;
        }

        changeLocalTodos(todo, index, isComplete);
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


function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push({
        todoText: todo,
        completed: false
    });
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
        console.log(todo);
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

function changeLocalTodos(todo, index, isComplete) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos[index].completed = isComplete;
    localStorage.setItem('todos', JSON.stringify(todos));
}