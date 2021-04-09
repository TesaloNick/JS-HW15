import $ from './utilits.js'
class Footer {
    create() {
        const footer = document.createElement('footer')
        $('.app').appendChild(footer)
        const logo = document.createElement('a')
        logo.setAttribute('href', '#')
        logo.innerHTML = `<img class='logo' src='images/metro-black-logo.png'>`
        footer.insertAdjacentElement('beforeend', logo)
        const contacts = document.createElement('div')
        contacts.innerHTML = `
            <div><img class='mini-logo' src='images/location.png'><p>Location</p></div>
            <div><img class='mini-logo' src='images/phone.png'><p>Phone</p></div>
            <div><img class='mini-logo' src='images/email.png'><p>Email</p></div>
        `

        footer.insertAdjacentElement('beforeend', contacts)
    }
    init() {
        this.create()
    }
}
const footer = new Footer().init()
export {footer};