import { test, expect } from '@playwright/test';

test('Portfolio page renders correctly', async ({ page }) => {
  await page.goto('/portfolio');
  
  // Verify heading
  await expect(page.locator('h1').filter({ hasText: /Portfolio/i })).toBeVisible();

  // Check WhatsApp Catalog section
  await expect(page.locator('text=Browse All Our Real-Time')).toBeVisible();
  
  // Verify WhatsApp button presence
  const waButton = page.locator('a[href*="wa.me"]');
  await expect(waButton).toBeVisible();
});
