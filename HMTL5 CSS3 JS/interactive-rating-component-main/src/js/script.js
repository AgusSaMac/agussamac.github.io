document.addEventListener('DOMContentLoaded', function () {
    start();
});

function start() {
    selection();
    enter();
}

function selection(){
    const selected = document.querySelectorAll('.rating-card__rating a');
    selected.forEach(select => {
        select.addEventListener('click', function(e) {
            removeSelection();
            select.classList.add('selected');
        })
    })
}

function removeSelection(){
    const options = document.querySelectorAll('.rating-card__rating a');
    options.forEach(option => {
        option.classList.remove('selected')
    })
}

function enter() {
    const accept = document.querySelector('.submit');
    accept.addEventListener('click', function(e){
        const rated = document.querySelector('.selected');
        if(rated == null) {
            console.log('rating no seleccionado');
        }
        else {
            const rating = document.querySelector('.rating-card');
            const thank = document.querySelector('.thank-you-card');
            const number = document.querySelector('.number');
            number.textContent = rated.textContent;
            rating.classList.add('hide');
            thank.classList.remove('hide');
        }
    })

}