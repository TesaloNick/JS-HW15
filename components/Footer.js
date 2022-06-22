import $ from './utilits.js'
class Footer {
    create() {
        const footer = document.createElement('footer')
        const container = document.createElement('div')
        container.classList.add('container')
        $('.app').appendChild(footer)
        footer.appendChild(container)
        const logo = document.createElement('a')
        logo.setAttribute('href', '#')
        logo.innerHTML = `<img src='images/metro-black-logo.png'>`
        container.insertAdjacentElement('beforeend', logo)
        const contacts = document.createElement('div')
        contacts.innerHTML = `
            <a href='tel:+1234567890'>Tel: +1234567890</a>
            <a href='mailto:wecare@metro.co.in'>Email: wecare@metro.co.in</a>
            <a>Адресс: Memphis, USA</a>
        `

        container.insertAdjacentElement('beforeend', contacts)
    }
    init() {
        this.create()
    }
}
const footer = new Footer().init()
export { footer };