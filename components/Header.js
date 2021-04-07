class Header {
    create() {
        const header = document.createElement('header')
        document.querySelector('.app').appendChild(header)
        console.log('header');
    }
    init() {
        this.create()
    }
}
const header = new Header().init()
export {header};