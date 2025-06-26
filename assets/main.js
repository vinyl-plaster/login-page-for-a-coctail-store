document.addEventListener('DOMContentLoaded', () => {
    const templateRight = document.querySelector('.template__right')

    const templateRightImg = templateRight.querySelector('img')
    const templateRightElements = templateRight.querySelectorAll('span')

    templateRight.addEventListener('mousemove', (e) => {
        let rect = templateRight.getBoundingClientRect()

        let x = (e.clientX - rect.left) / rect.width - 0.4;
        let y = (e.clientY - rect.top) / rect.height - 0.4;

        templateRightImg.style.transform = `translate(${x * 20}px, ${y * 20}px)`

        templateRightElements.forEach((elem, index) =>  {
            const factor = (index + 1) * 5;
            elem.style.transform = `translate(${x * factor}px, ${y * factor}px)`
        })

    })


    // Return settings to default
    templateRight.addEventListener('mouseleave', () => {
        templateRightImg.style.transform = ''

        templateRightElements.forEach(element => {
            element.style.transform = ''
        })
    })
})