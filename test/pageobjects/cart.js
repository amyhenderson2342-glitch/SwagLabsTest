import { $ } from '@wdio/globals'
import Base1 from './base1.js';

class Cart extends Base1{
   get addToCart() {
        return $(this.cartItem);
    }
    get cartBadge() {
        return $('.shopping_cart_badge');
    }

    constructor() {
        super();
        this.cartItem = ('#add-to-cart-sauce-labs-backpack');
    }

    open () {
        return super.open('cart');
    }
}

export default new Cart();