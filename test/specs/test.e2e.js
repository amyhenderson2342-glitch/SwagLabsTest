import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.js'
import Products from '../pageobjects/products.js'
import Cart from '../pageobjects/cart.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        for (let i = 0; i < Login.credentials.users.length; i++) {
            await Login.open();
            await Login.login(Login.credentials.users[i], Login.credentials.universalPass)
            await expect(Products.productTitle).toHaveText('Products');
                
        
        }
        await Cart.addToCart.click()
                await expect(Cart.cartBadge).toExist();
    });
});
