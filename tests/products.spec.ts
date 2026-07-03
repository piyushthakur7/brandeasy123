import { test, expect } from '@playwright/test';

test('Products page search and filter functionality', async ({ page }) => {
  await page.goto('/products');
  
  // Verify heading
  await expect(page.locator('h1').filter({ hasText: /Industrial.*Signage/i })).toBeVisible();

  // Test search
  const searchInput = page.locator('input[placeholder*="Search products"]');
  await searchInput.fill('LED');
  
  // Wait for results
  await expect(page.locator('text=Search & Filter Results')).toBeVisible();
  
  // Open filters
  await page.click('button:has-text("Filter Catalog")');
  await expect(page.locator('h4:has-text("Categories")')).toBeVisible();
  
  // Click reset
  await page.click('button:has-text("Reset Filters")');
});
