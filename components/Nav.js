import $ from './utilits.js'
class Nav {
    create() {
        const nav = document.createElement('nav')
        nav.innerHTML = `
            <a class='pageHome'>Home</a>
            <a class='pageCart'>Cart</a>
            <a class='pageContact'>Contact</a>
        `
        const menuLogo = document.createElement('img')
        menuLogo.setAttribute('src', 'images/menu-logo.png')
        menuLogo.classList.add('menu-logo')
        $('a').insertAdjacentElement('afterend', menuLogo)
        menuLogo.insertAdjacentElement('afterend', nav)
    }
    init() {
        this.create()
    }
}
const nav = new Nav().init()
export {nav};