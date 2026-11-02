import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/products.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(LoginPage.standUser, LoginPage.universalPass)
        await expect(SecurePage.productTitle).toHaveText(
            expect.stringContaining('Products'))
    })
})

