export default class App {
    constructor() {
        this.mainDiv
    }
    create() {
        this.mainDiv = document.createElement('div')
        this.mainDiv.classList.add('app')
        // и сохранить его в свойстве element
    }
    render() {
        document.body.appendChild(this.mainDiv)
        // и добавления в контейнер других элементов из других загруженных компонентов
    }
    init() {
        // для описания логики загрузки других компонентов
        this.create()
        this.render() 
    }
}