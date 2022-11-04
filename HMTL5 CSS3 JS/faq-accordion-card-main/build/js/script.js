document.addEventListener('DOMContentLoaded', function () {
    start();
});

function start() {
    selection();
}
var i = false;
function selection(){
    const selected = document.querySelectorAll('.question');
    selected.forEach(select => {
        select.addEventListener('click', function(e) {
            if(select.classList.contains('active')){
                console.log(select.classList.contains('active'))
                removeSelection();
            } else {
                removeSelection();
                select.classList.add('active');
                let image = select.children[0].children[1];
                image.classList.add('up');
                i = true;
            }
        })
    })
}

function removeSelection(){
    const options = document.querySelectorAll('.question');
    options.forEach(option => {
        option.classList.remove('active')
        let image = option.children[0].children[1];
        image.classList.remove('up');
    })
}

//# sourceMappingURL=script.js.map
