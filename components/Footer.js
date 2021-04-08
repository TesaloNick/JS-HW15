class Footer {
    create() {
        const footer = document.createElement('footer')
        document.querySelector('.app').appendChild(footer)
        console.log('footer');

        const logo = document.createElement('a')
        logo.setAttribute('href', '#')
        logo.innerHTML = `<img class='logo' src='images/metro-black-logo.png'>`
        footer.insertAdjacentElement('afterbegin', logo)
        const contacts = document.createElement('div')

        footer.insertAdjacentElement('beforeend', contacts)
    }
    init() {
        this.create()
    }
}
const footer = new Footer().init()
export {footer};