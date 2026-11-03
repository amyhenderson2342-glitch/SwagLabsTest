import { $ } from '@wdio/globals'
import Page from './base1.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Products extends Base {
    /**
     * define selectors using getter methods
     */
    get shoppingCart () {
        return $('.shopping_cart_badge');
    }

    get productTitle () {
        return $('.title');
    }
}

export default new Products();
