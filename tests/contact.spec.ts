import { test, expect } from '@playwright/test';

test('Contact page and form submission mock', async ({ page }) => {
  await page.goto('/contact');
  
  // Verify heading
  await expect(page.locator('h1').filter({ hasText: /Contact.*Us/i })).toBeVisible();

  // Verify address
  await expect(page.locator('text=Ground Floor Darshan Apartment')).toBeVisible();

  // Form submission
  await page.fill('input[placeholder="Your name"]', 'Test User');
  await page.fill('input[placeholder="+91 XXXXX XXXXX"]', '9876543210');
  await page.fill('input[placeholder="your@email.com"]', 'test@example.com');
  
  // Select service
  await page.selectOption('select', { label: 'Custom Banners' });
  
  // Fill message
  await page.fill('textarea', 'This is a test message for E2E testing.');

  // Submit
  await page.click('button[type="submit"]');

  // Verify success message
  await expect(page.locator('text=Thank you!')).toBeVisible();
  await expect(page.locator('text=We\'ll get back to you within 24 hours.')).toBeVisible();
});
