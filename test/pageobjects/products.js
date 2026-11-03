import { $ } from '@wdio/globals'
import Base1 from './base1.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Products extends Base1{
    /**
     * define selectors using getter methods
     */

    get productTitle () {
        return $('.title');
    }
}

export default new Products();
