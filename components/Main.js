class Main {
    create() {
        const mainHead = document.createElement('div')
        mainHead.classList.add('products-head')
        document.querySelector('header').insertAdjacentElement('afterend', mainHead)
        const main = document.createElement('div')
        main.classList.add('products-div')
        document.querySelector('.products-head').insertAdjacentElement('afterend', main)
    }
    createProductCard(product){
        document.querySelector('.products-div').insertAdjacentHTML('beforeend', `
        <div class ='product'>
            <div class ='product-image'>
                <img src='${product.image}'>
            </div>
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
        </div>
        `)
    }
    getProducts(){
        if (!localStorage.getItem('products')) {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                localStorage.setItem('products', JSON.stringify(products))
                products.map(product => this.createProductCard(product))
            })
        } else {
            console.log();
            JSON.parse(localStorage.getItem('products')).map(product => this.createProductCard(product))
        }
  
    }
    init() {
        this.create()
        this.getProducts()
    }
}
const main = new Main().init()
export {main};