import $ from './utilits.js'
class Nav {
    create() {
        const nav = document.createElement('nav')
        $('a').insertAdjacentElement('afterend', nav)
        nav.innerHTML = `
            <a href='#' class='pageHome'>Home</a>
            <a href='#' class='pageShop'>Shop</a>
            <a href='#' class='pageContact'>Contact</a>
        `
    }
    init() {
        this.create()
    }
}
const nav = new Nav().init()
export {nav};