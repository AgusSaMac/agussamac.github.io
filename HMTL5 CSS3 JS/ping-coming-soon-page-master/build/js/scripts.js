document.addEventListener('DOMContentLoaded', function() {
    startApp()
})

function startApp() {
    submit()
}

function submit() {
    const enter = document.querySelector('.submit')
    const input = document.getElementById('email')

    enter.addEventListener('click', function(e) {
        e.preventDefault()
        if(input.value === "") {
            input.classList.add('error')
            setInstructions(input)
            return
        }
        let email = validateEmail(input)
        console.log(email)
    })
}

function validateEmail(input) {
    var validRegex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    
    if (input.value.match(validRegex))
    {
        removeInstructions(input)
        input.classList.remove('error')
        Swal.fire({
            icon: 'success',
            title: 'Great!',
            text: 'We will be in contact really soon!',
        })
    } else {
        input.value=''
        input.classList.add('error')
        setInstructions(input)
    }
}

function setInstructions(input) {
    input.setAttribute('placeholder', 'example@email.com')
    const block = document.querySelector('.message')
    const message = document.createElement('P')
    message.classList.add('alert')
    message.textContent = 'Please provide a valid email address'
    block.appendChild(message)
    return
}

function removeInstructions(input) {
    input.setAttribute('Your email address...')
    const message = document.querySelector('.message')
    message.innerHTML=''
}
//# sourceMappingURL=scripts.js.map
