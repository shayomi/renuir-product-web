import { expect, test } from '@playwright/test';

const routes = ['/', '/about-us', '/individual', '/solutions', '/developer'];

test.describe('Public route integrity', () => {
  for (const route of routes) {
    test(`loads ${route}`, async ({ page }) => {
      test.setTimeout(60000);

      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });

      expect(response?.ok()).toBeTruthy();
      await expect(page).toHaveURL(new RegExp(`${route === '/' ? '/$' : route}$`));
      await expect(page.locator('main')).toBeVisible();
      await expect(page.getByText('404')).not.toBeVisible();
    });
  }
});
