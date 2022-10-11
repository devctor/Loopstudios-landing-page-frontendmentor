import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
})

test.describe('<Creations />', () => {
  test('Should contain H2 title', async ({ page }) => {
    const headerTitle = page.locator('_react=Creations >> h2')
    await expect(headerTitle).toHaveText(/our creations/i)
  })

  test('Should have list of posts', async ({ page }) => {
    const CreationsList = page.locator('.post-grid article')
    await expect(CreationsList).toHaveCount(8)
  })

  test('Should all nodes have text titles', async ({ page }) => {
    const CreationsListTitles = page.locator('.post-grid article h3')
    await expect(CreationsListTitles).toHaveCount(8)
  })

  test('Should have an image thumbnail', async ({ page }) => {
    const CreationListThumbnails = page.locator('.post-grid article img').first()
    await expect(CreationListThumbnails).toHaveAttribute('alt', /deep earth/i)
  })

  test('Nodes selected should have given text', async ({ page }) => {
    const CreationsList = page.locator('.post-grid article')
    console.log(await CreationsList.nth(5))
    await expect(CreationsList.nth(1)).toHaveText(/night arcade/i)
    await expect(CreationsList.nth(6)).toHaveText(/the curiosity/i)
  })

  test('Should have "See all" button', async ({ page }) => {
    const btnSeeAll = page.locator('_react=Creations >> button')
    await expect(btnSeeAll).toHaveText(/see all/i)
  })
})
