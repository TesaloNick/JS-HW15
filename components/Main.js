class Main {
    create() {
        const main = document.createElement('div')
        main.classList.add('products-div')
        document.querySelector('.app').appendChild(main)
        console.log('Main');
    }
     getProducts(){
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify(products))
            products.map(product => {
                document.querySelector('.products-div').insertAdjacentHTML('beforeend', `
                <div class ='product'>
                    <div class ='product-image'>
                        <img src='${product.image}'>
                    </div>
                    <h2>${product.title}</h2>
                    <p>$${product.price}</p>
                </div>
                `)
            })

        })

        
        
    }
    init() {
        this.getProducts()
        this.create()
    }
}
const main = new Main().init()
export {main};