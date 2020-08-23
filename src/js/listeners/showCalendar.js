let todoDate = document.querySelector('.todo-date');
let miniClock = document.querySelector('.mini-clock');



miniClock.addEventListener('click', function(e) {
    todoDate.classList.toggle('show');
});