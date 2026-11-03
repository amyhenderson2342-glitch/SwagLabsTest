import { expect } from '@wdio/globals'
import login from '../pageobjects/login.js'
import products from '../pageobjects/products.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await login.open()

        await login.login(login.standUser, login.universalPass)
        await expect(products.shoppingCart).toBeExisting()
        await expect(products.productTitle).toHaveText(
            expect.stringContaining('Products'))
            
    })
})

