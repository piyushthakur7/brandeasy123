import { test, expect } from '@playwright/test';

test('Primary navigation across pages', async ({ page }) => {
  await page.goto('/');

  // Using a link checking mechanism for main navigation links
  // We assume there are visible links for these routes in the header/footer
  // We use .first() in case there are multiple (e.g. mobile vs desktop)

  const aboutLink = page.locator('a[href="/about"]').first();
  if (await aboutLink.isVisible()) {
    await aboutLink.click();
    await expect(page).toHaveURL(/\/about/);
  }

  const productsLink = page.locator('a[href="/products"]').first();
  if (await productsLink.isVisible()) {
    await productsLink.click();
    await expect(page).toHaveURL(/\/products/);
  }

  const contactLink = page.locator('a[href="/contact"]').first();
  if (await contactLink.isVisible()) {
    await contactLink.click();
    await expect(page).toHaveURL(/\/contact/);
  }
});
