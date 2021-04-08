class Nav {
    create() {
        const nav = document.createElement('nav')
        document.querySelector('a').insertAdjacentElement('afterend', nav)
        nav.innerHTML = `
            <a href='#'>Home</a>
            <a href='#'>Shop</a>
            <a href='#'>Contact</a>
        `
    }
    init() {
        this.create()
    }
}
const nav = new Nav().init()
export {nav};