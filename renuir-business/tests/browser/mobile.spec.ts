import { expect, test } from '@playwright/test';

test.describe('Mobile baseline checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
  });

  test('mobile menu opens and can navigate to About us', async ({ page }) => {
    await page.locator('nav button').first().click();
    await expect(page.getByRole('link', { name: 'About us' })).toBeVisible();

    await page.getByRole('link', { name: 'About us' }).click();
    await expect(page).toHaveURL(/\/about-us$/);
  });

  test('no horizontal overflow on homepage mobile viewport', async ({ page }) => {
    const hasOverflow = await page.evaluate(() => {
      const width = document.documentElement.clientWidth;
      return document.documentElement.scrollWidth > width + 1;
    });

    expect(hasOverflow).toBe(false);
  });
});
