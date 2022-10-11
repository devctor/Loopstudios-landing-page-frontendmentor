import { test, expect } from '@playwright/test'

const navItems: string[] = ['about', 'carrers', 'events', 'products', 'support']

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test.describe('<Header />', () => {
  test('Should have a logo image', async ({ page }) => {
    const headerImg = page.locator('header svg')
    await expect(headerImg).toHaveAttribute('title', 'Loopstudios logo')
  })
})

test.describe('<Nav />', () => {
  test('Nav button open close', async ({ page }) => {
    const btn = page.locator('_react=Header >> button')
    const nav = page.locator('_react=Nav')

    await btn.click()
    await expect(nav).toBeVisible()
    btn.click()
    await expect(nav).not.toBeVisible()
  })

  test('Menu items', async ({ page }) => {
    const btn = page.locator('_react=Header >> button')
    await btn.click()

    const menu = page.locator('_react=Nav >> ul > li')
    // Get a list of text
    // const texts = await menu.allTextContents()
    await expect(menu).toContainText(navItems)

    /*TODO*/
    // const resp = await page.request.get('http://localhost:3000/menu')
    // console.log('resp', await resp.json())
  })

})
