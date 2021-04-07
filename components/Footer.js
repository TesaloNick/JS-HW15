class Footer {
    create() {
        const footer = document.createElement('footer')
        document.querySelector('.app').appendChild(footer)
        console.log('footer');
    }
    init() {
        this.create()
    }
}
const footer = new Footer().init()
export {footer};