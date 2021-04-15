import $ from './utilits.js'
class Nav {
    create() {
        const nav = document.createElement('nav')
        $('a').insertAdjacentElement('afterend', nav)
        nav.innerHTML = `
            <a class='pageHome'>Home</a>
            <a class='pageCart'>Cart</a>
            <a class='pageContact'>Contact</a>
        `
    }
    init() {
        this.create()
    }
}
const nav = new Nav().init()
export {nav};