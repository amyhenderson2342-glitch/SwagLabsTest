import { $ } from '@wdio/globals'
import Page from './base1.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get productTitle () {
        return $('.title');
    }
}

export default new SecurePage();
