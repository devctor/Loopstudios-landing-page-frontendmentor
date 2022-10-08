import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test.describe('<Hero />', () => {
  test('Should have a hero image', async ({ page }) => {
    const headerImg = page.locator('_react=Hero >> img')
    await expect(headerImg).toHaveAttribute('alt', 'Immersive experiences that deliver')
  })

  test('Have a hero title', async ({ page }) => {
    const heroTitle = page.locator('_react=Hero >> h1')
    await expect(heroTitle).toHaveText(/Immersive experiences that deliver/)
  })
})

