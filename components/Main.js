import $ from './utilits.js'
import {getCookie} from '../cookie.js'
import {setCookie} from '../cookie.js'

class Main {
    constructor() {
        this.amountProduct = []
        this.buyProducts = localStorage.getItem('buyProduct') ? JSON.parse(localStorage.getItem('buyProduct')) : []
        this.fullPrice = localStorage.getItem('buyProduct') ? getCookie('fullPrice') : 0
    }
    create() {
        const mainHead = document.createElement('div')
        mainHead.classList.add('products-head')
        $('header').insertAdjacentElement('afterend', mainHead)
        const main = document.createElement('div')
        main.classList.add('products-div')
        $('.products-head').insertAdjacentElement('afterend', main)
    }
    createProductCard(product){
        $('.products-div').insertAdjacentHTML('beforeend', `
        <div class ='product'>
            <div class ='product-image'>
                <img src='${product.image}'>
            </div>
            <div class ='product-information'>
                <h2>${product.title}</h2>
                <div class ='product-basket'>
                    <p class='price'>$${product.price}</p>
                    <img class='buy-button' src='images/basket.png'>
                </div>
                
            </div>

        </div>
        `)

    }
    getAmountBuyProduct(){
        const products = document.querySelectorAll(".product"); // массив всех продуктов
        const buttonForBuy = document.querySelectorAll(".buy-button"); // массив всех кнопок покупки
        this.amountProduct = new Array(20);
        this.amountProduct.fill(1)
        for (let i = 0; i < products.length; i++) {
            products[i].addEventListener("mouseenter", () => {
                products[i].querySelector('.price').innerHTML = `
                <input type="number" class='amount${i}' value='${this.amountProduct[i]}'>
                `
            }); 
            products[i].addEventListener("mouseleave", () => {
                this.amountProduct[i] = +$(`.amount${i}`).value
                products[i].querySelector('.price').innerHTML = `
                <p class='price'>$${JSON.parse(localStorage.getItem('products'))[i].price}</p>
                `
            });
            buttonForBuy[i].addEventListener('click', () => { // событие по нажатию на кнопку покупки
                let buyObj = JSON.parse(localStorage.getItem('products'))[i]
                buyObj.amount = +$(`.amount${i}`).value // добавляем свойство в метод с количеством купленных товаров

                if (this.buyProducts.find(item => item.title === buyObj.title)) { // проверка на повтор уже довабленного продукта
                    let repeat = this.buyProducts.find(item => item.title === buyObj.title)
                    repeat.amount += buyObj.amount
                } else {
                    this.buyProducts.push(buyObj) 
                }

                $('.amount-products-basket').innerHTML = this.buyProducts.length                
                this.fullPrice += buyObj.amount * buyObj.price // расчет общей стоимости
                localStorage.setItem('buyProduct', JSON.stringify(this.buyProducts)) 
                setCookie('fullPrice', this.fullPrice)   // добавляем в куки общую стоимость
                $('.full-price-basket').innerHTML = '$' + Math.round(this.fullPrice*100)/100
                $(`.amount${i}`).value = 1 // сброс цифры покупки
                console.log(this.buyProducts);
            })
        }
    }
    getProducts(){
        if (!localStorage.getItem('products')) {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                localStorage.setItem('products', JSON.stringify(products))
                products.map(product => this.createProductCard(product))
                this.getAmountBuyProduct()
            })
        } else {
            JSON.parse(localStorage.getItem('products')).map(product => this.createProductCard(product))
            this.getAmountBuyProduct()
        }
    }
    addProductInBasket() {

    }
    init() {
        this.create()
        this.getProducts()
    }
}
const main = new Main().init()
export {main};