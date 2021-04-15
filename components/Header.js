import $ from './utilits.js'
import {getCookie} from '../cookie.js'
import {setCookie} from '../cookie.js'
class Header {

    create() {
        const header = document.createElement('header')
        $('.app').appendChild(header)
        const logo = document.createElement('a')
        logo.innerHTML = `<img class='logo' src='images/metro-logo.png'>`
        header.insertAdjacentElement('afterbegin', logo)
        const cart = document.createElement('a')
        cart.classList.add('cart-link')
        const mainHead = document.createElement('div')
        mainHead.classList.add('products-head')
        $('header').insertAdjacentElement('afterend', mainHead)
        header.insertAdjacentElement('beforeend', cart)

        this.sum()
    }
    sum() {
        let sum = 0
        if (localStorage.getItem('buyProduct')) {
            JSON.parse(localStorage.getItem('buyProduct')).map(item => {
                sum += item.amount * item.price
            })
            setCookie('fullPrice', sum)
            $('.cart-link').innerHTML = `<img class='img-cart' src='images/cart.png'>
            <span class='amount-products-cart'>${JSON.parse(localStorage.getItem('buyProduct')).length}</span>
            <span class='full-price-cart'>$${+Math.round(sum*100)/100}</span>`
        } else {
            $('.cart-link').innerHTML = `<img class='img-cart' src='images/cart.png'>
            <span class='amount-products-cart'>0</span>
            <span class='full-price-cart'>$0</span>`
        }
    }
    init() {
        this.create()
    }
}
const header = new Header().init()
export {header};
export {};
