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
            <div class ='product-information'>
                <h2>${product.title}</h2>
                <div class ='product-basket'>
                    <p class='price'>$${product.price}</p>
                    <img src='images/basket.png'>
                </div>
                
            </div>

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
        // console.log(document.querySelectorAll('.product'));
        const products = document.querySelectorAll(".product");
        let arrAmountBuyProduct = new Array(20);
        arrAmountBuyProduct.fill(1)
        console.log(arrAmountBuyProduct);
        for (let i = 0; i < products.length; i++) {
            products[i].addEventListener("mouseenter", () => {
                console.log(arrAmountBuyProduct);
                products[i].querySelector('.price').innerHTML = `
                <input type="number" class='amount${i}' value='${arrAmountBuyProduct[i]}'>
                `
            });
            products[i].addEventListener("mouseleave", () => {
                arrAmountBuyProduct[i] = +document.querySelector(`.amount${i}`).value
                products[i].querySelector('.price').innerHTML = `
                <p class='price'>$${JSON.parse(localStorage.getItem('products'))[i].price}</p>
                `
            });
        }
    }
}
const main = new Main().init()
export {main};