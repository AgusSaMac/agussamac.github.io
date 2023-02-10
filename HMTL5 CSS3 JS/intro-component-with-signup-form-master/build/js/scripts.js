document.addEventListener('DOMContentLoaded', function() {
    startApp();
});

function startApp() {
    submit();
}

function submit() {
    const submit = document.querySelector('.button');
    const elements = document.querySelectorAll('.field');

    submit.addEventListener('click', function(e){
        e.preventDefault();
        elements.forEach(element=> {
            const input = element.querySelector('.input');
            if(input.value === "")
            {
                element.classList.add('error')
                if(input.getAttribute('placeholder') === 'Email Address') 
                {
                    email.setAttribute('placeholder', 'email@example.com')
                } else {
                    input.setAttribute('placeholder' , ' ')
                }
            } else{
                element.classList.remove('error')
            }
        })
    })
}
//# sourceMappingURL=scripts.js.map
