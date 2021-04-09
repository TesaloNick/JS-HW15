import $ from './utilits.js'
class App {
    constructor() {
        this.mainDiv
    }
    create() {
        document.head.innerHTML = `
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="author" content="Nikolay Antonovich">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>JS-HW15 SPA</title>
            <link rel="stylesheet" href="style.css">
        `
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
export default new App().init()
