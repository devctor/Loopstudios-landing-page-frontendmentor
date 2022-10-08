import { test, expect } from '@playwright/test'
// import * as db from '../../db.json'

test.describe('<FeaturedPost />', () => {
  test('Should have a thumnail image', async ({ page }) => {
    // console.log(db)
    await page.goto('http://localhost:5173/')
    const postImage = page.locator('_react=FeaturedPost >> img')
    const postTitle = page.locator('_react=FeaturedPost >> h2')
    const postParagraph = page.locator('_react=FeaturedPost >> p')

    await expect(postImage).toHaveAttribute('alt', 'The leader in interactive VR')
    await expect(postTitle).toHaveText('The leader in interactive VR')
    await expect(postParagraph).toHaveText(/Founded in 2011, Loopstudios has been producing/)
  })
})
