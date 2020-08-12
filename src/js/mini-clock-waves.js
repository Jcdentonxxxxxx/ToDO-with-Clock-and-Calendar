let miniClock = document.querySelector('.mini-clock');
miniClock.addEventListener('click', function (e) {
    let target = e.target.closest('.mini-clock');
    if (!target) return;
    var x = e.clientX - target.getBoundingClientRect().left;
    var y = e.clientY - target.getBoundingClientRect().top;

    let wave = document.createElement('span');
    wave.style.left = x + 'px';
    wave.style.top = y + 'px';
    wave.classList.add('mini-clock__wave');
    e.currentTarget.append(wave);

    setTimeout(function () {
        wave.remove();
    }, 1000)
})

miniClock.addEventListener('mousedown', (e) => {
    e.preventDefault();
});