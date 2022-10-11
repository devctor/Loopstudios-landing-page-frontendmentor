import { test, expect } from '@playwright/test'

const navItems: string[] = ['about', 'carrers', 'events', 'products', 'support']

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
})

test.describe('<Footer />', () => {
  test('Should contain brand logo', async ({ page }) => {
    const footerLogo = page.locator('footer >> svg')
    await expect(footerLogo).toHaveAttribute('title', /loopstudios logo/i)
  })

  test('Footer menu items', async ({ page }) => {
    const menuFooter = page.locator('_react=Footer >> ul > li')
    await expect(menuFooter).toContainText(navItems)

  })

  test('Should display social icons', async ({ page }) => {
    const socialIcons = page.locator('.social-icons img')
    await expect(socialIcons).toHaveCount(4)
  })

  test('Should have branding foot note', async ({ page }) => {
    const footNote = page.locator('footer .foot-note')
    await expect(footNote).toHaveText(/© 2022 loopstudios. All rights reserved./i)
  })
})
