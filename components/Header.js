import $ from './utilits.js'
class Header {
    create() {
        const header = document.createElement('header')
        $('.app').appendChild(header)
        const logo = document.createElement('a')
        logo.setAttribute('href', '#')
        logo.innerHTML = `<img class='logo' src='images/metro-logo.png'>`
        header.insertAdjacentElement('afterbegin', logo)
        const basket = document.createElement('a')
        basket.setAttribute('href', '#')
        basket.innerHTML = `<img class='basket' src='images/basket.png'>`
        header.insertAdjacentElement('beforeend', basket)
    }
    init() {
        this.create()
    }
}
const header = new Header().init()
export {header};
