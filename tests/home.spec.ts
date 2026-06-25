import { test, expect } from '@playwright/test';

test('has basic content', async ({ page }) => {
  await page.goto('/');

  // Verify the page has loaded by checking for the body tag
  await expect(page.locator('body')).toBeVisible({ timeout: 10000 });
});
