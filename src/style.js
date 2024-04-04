const display = window.document.querySelector('div.col-span-4')

function load() {
    if(display.textContent === '') {
        display.textContent = '|'
    }
    else if (display.textContent === '|') {
        display.textContent = ''
    }
}

setInterval(load, 500)


const buttons = document.querySelectorAll('div.buttons')

buttons.forEach(element => {
    element.addEventListener('click', () => {
        const classes = element.classList

        classes.forEach(className => {
            if (className.includes('bg-gray-600')) {
                element.classList.remove('bg-gray-600')
                element.classList.add('bg-gray-400')
            } else if (className.includes('bg-orange-500')) {
                element.classList.remove('bg-orange-500')
                element.classList.add('bg-orange-300')
            } else if (className.includes('bg-gray-900')) {
                element.classList.remove('bg-gray-900')
                element.classList.add('bg-gray-700')
            }
        })

        setTimeout(() => {
            classes.forEach(className => {
                if (className.includes('bg-gray-400')) {
                    element.classList.remove('bg-gray-400')
                    element.classList.add('bg-gray-600')
                } else if (className.includes('bg-orange-300')) {
                    element.classList.remove('bg-orange-300')
                    element.classList.add('bg-orange-500')
                } else if (className.includes('bg-gray-700')) {
                    element.classList.remove('bg-gray-700')
                    element.classList.add('bg-gray-900')
                }
            })
        }, 100)
    })
})