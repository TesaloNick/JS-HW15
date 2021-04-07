class Nav {
    create() {
        const nav = document.createElement('nav')
        document.querySelector('header').appendChild(nav)
        console.log('nav');
    }
    init() {
        this.create()
    }
}
const nav = new Nav().init()
export {nav};