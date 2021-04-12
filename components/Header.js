import $ from './utilits.js'
import {getCookie} from '../cookie.js'
import {setCookie} from '../cookie.js'
class Header {
    create() {
        const header = document.createElement('header')
        $('.app').appendChild(header)
        const logo = document.createElement('a')
        logo.setAttribute('href', '#')
        logo.innerHTML = `<img class='logo' src='images/metro-logo.png'>`
        header.insertAdjacentElement('afterbegin', logo)
        const cart = document.createElement('a')
        cart.classList.add('cart-link')
        cart.setAttribute('href', '#')
        const mainHead = document.createElement('div')
        mainHead.classList.add('products-head')
        $('header').insertAdjacentElement('afterend', mainHead)

        let sum = 0
        if (localStorage.getItem('buyProduct')) {
            JSON.parse(localStorage.getItem('buyProduct')).map(item => {
                sum += item.amount * item.price
                // console.log(sum);
            })
            setCookie('fullPrice', sum)
            cart.innerHTML = `<img class='img-cart' src='images/cart.png'>
            <span class='amount-products-cart'>${JSON.parse(localStorage.getItem('buyProduct')).length}</span>
            <span class='full-price-cart'>$${+Math.round(sum*100)/100}</span>`
        } else {
            cart.innerHTML = `<img class='img-cart' src='images/cart.png'>
            <span class='amount-products-cart'>0</span>
            <span class='full-price-cart'>$0</span>`
        }
        header.insertAdjacentElement('beforeend', cart)
    }
    init() {
        this.create()
    }
}
const header = new Header().init()
export {header};
