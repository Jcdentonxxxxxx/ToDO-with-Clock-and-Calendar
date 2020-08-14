let calendar = document.querySelector('.calendar');

calendar.addEventListener('click', function (e) {
    let calendarListTd = calendar.querySelectorAll('td');
    for (let i = 0; i < calendarListTd.length; i++) {

        if (calendarListTd[i].classList.contains('active')) {
            calendarListTd[i].classList.remove('active');
        }
    }
    e.target.classList.add('active');
});