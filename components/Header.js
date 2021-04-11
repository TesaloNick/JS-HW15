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
        const basket = document.createElement('a')
        basket.classList.add('basket-link')
        basket.setAttribute('href', '#')
        let sum = 0
        if (localStorage.getItem('buyProduct')) {
            JSON.parse(localStorage.getItem('buyProduct')).map(item => {
                sum += item.amount * item.price
                console.log(sum);
            })
            setCookie('fullPrice', sum)
            basket.innerHTML = `<img class='img-basket' src='images/basket.png'>
            <span class='amount-products-basket'>${JSON.parse(localStorage.getItem('buyProduct')).length}</span>
            <span class='full-price-basket'>$${+Math.round(sum*100)/100}</span>`
        } else {
            basket.innerHTML = `<img class='img-basket' src='images/basket.png'>
            <span class='amount-products-basket'>0</span>
            <span class='full-price-basket'>$0</span>`
        }
        header.insertAdjacentElement('beforeend', basket)
    }
    init() {
        this.create()
    }
}
const header = new Header().init()
export {header};
