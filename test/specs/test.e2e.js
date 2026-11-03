import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.js'
import Products from '../pageobjects/products.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        for (let i = 0; i < Login.users.length; i++) {
            await Login.open()
            await Login.login(Login.users[i], Login.universalPass)
            await expect(Products.productTitle).toHaveText(
                expect.stringContaining('Products'))
        }
    })
})

