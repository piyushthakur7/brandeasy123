import { test, expect } from '@playwright/test';

test('Homepage basic content and sections visibility', async ({ page }) => {
  await page.goto('/');

  // Verify the page has loaded
  await expect(page.locator('body')).toBeVisible({ timeout: 10000 });

  // Basic check for headings (Hero, CTA, etc.)
  const headings = page.locator('h1, h2, h3');
  await expect(headings.first()).toBeVisible();
});
