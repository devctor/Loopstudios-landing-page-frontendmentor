import { test, expect } from '@playwright/test';

test('Should have a title', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await expect.soft(page).toHaveTitle(/Loopstudios Landing Page | Frontend Mentor Challenge/)
})
