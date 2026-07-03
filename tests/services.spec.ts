import { test, expect } from '@playwright/test';

test('Services page renders correctly', async ({ page }) => {
  await page.goto('/services');
  
  // Verify heading
  await expect(page.locator('h1').filter({ hasText: /Our.*Services/i })).toBeVisible();

  // Check presence of services
  await expect(page.locator('h2').filter({ hasText: 'LED Sign Boards' })).toBeVisible();
  await expect(page.locator('h2').filter({ hasText: 'Neon Signs' })).toBeVisible();
  await expect(page.locator('text=Get Started →').first()).toBeVisible();
});
