import { expect, test, type Page } from '@playwright/test';

test.describe('Desktop navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 900 });
    await page.goto('/');
  });

  const topNav = (page: Page) => page.locator('nav').first();

  test('logo links back to home', async ({ page }) => {
    await topNav(page).getByRole('link', { name: 'Renuir Logo' }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test('about us and developer links navigate correctly', async ({ page }) => {
    await topNav(page).getByRole('link', { name: 'About us' }).click();
    await expect(page).toHaveURL(/\/about-us$/);

    await page.goto('/');
    await topNav(page)
      .getByRole('link', { name: 'Developers', exact: true })
      .click();
    await page.waitForURL(/\/developer$/, { timeout: 15000 });
  });

  test('solutions dropdown routes to enterprise and individual', async ({ page }) => {
    await topNav(page)
      .getByRole('button', { name: 'Solutions', exact: true })
      .click();
    await page.getByRole('menuitem', { name: 'Enterprise', exact: true }).click();
    await expect(page).toHaveURL(/\/solutions$/);

    await page.goto('/');
    await topNav(page)
      .getByRole('button', { name: 'Solutions', exact: true })
      .click();
    await page.getByRole('menuitem', { name: 'Individual', exact: true }).click();
    await expect(page).toHaveURL(/\/individual$/);
  });
});
