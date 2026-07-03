import { test, expect } from '@playwright/test';

test('About page renders correctly', async ({ page }) => {
  await page.goto('/about');
  
  // Verify heading
  await expect(page.locator('h1').filter({ hasText: /About/i })).toBeVisible();

  // Verify journey/timeline
  await expect(page.locator('text=Our Journey')).toBeVisible();
  
  // Verify one of the years
  await expect(page.locator('text=2012')).toBeVisible();
});
