let currentTarget = null;

document.addEventListener('mouseover', function (e) {
    if (currentTarget) return;

    let target = e.target.closest('[data-tooltip]');
    if (!target) return;

    currentTarget = target;

    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    if (!target.classList.contains("todo__header")) {
        let date = new Date();
        let day = date.getDate();
        if(day < 10) day = '0' + day;
        let month = date.getMonth() + 1;
        if (month < 10) month = '0' + month;
        let year = date.getFullYear();
        
        tooltip.innerHTML = `Вернуться к ${day}.${month}.${year}`;
    } else {
        tooltip.innerHTML = 'Посмотреть все задачи';
    }

    
    document.body.append(tooltip);

    let coords = target.getBoundingClientRect();
    let posX = coords.left - (tooltip.offsetWidth - target.offsetWidth) / 2;
    if (posX < coords.left) posX = coords.left;
    let posY = coords.top - tooltip.offsetHeight - 5;
    if (posY < 0) posY = coords.top + target.offsetHeight + 5;
    tooltip.style.left = posX + 'px';
    tooltip.style.top = posY + 'px';
    //console.log(coords.left);
});


document.addEventListener('mouseout', function (e) {
    if (!currentTarget) return;

    let relatedTarget = e.relatedTarget.closest('[data-tooltip]');

    if (relatedTarget == currentTarget) {
        return;
    }


    document.body.querySelector('.tooltip').remove();
    currentTarget = null;
});