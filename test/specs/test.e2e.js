import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.js'
import Products from '../pageobjects/products.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await Login.open()

        await Login.login(Login.standUser, Login.universalPass)
        await expect(Products.productTitle).toHaveText(
            expect.stringContaining('Products'))
            
    })
})

