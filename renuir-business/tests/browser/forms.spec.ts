import { expect, test } from '@playwright/test';

test.describe('Public form UX', () => {
  test('about-us contact form fields and CTA are visible', async ({ page }) => {
    await page.goto('/about-us');

    await expect(page.getByLabel('Full name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Subject')).toBeVisible();
    await expect(page.getByLabel('Message')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('developer page waitlist form is visible', async ({ page }) => {
    await page.goto('/developer');

    await expect(page.getByPlaceholder('Enter your work email')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Request API Access' })).toBeVisible();
  });

  test('solutions page demo form is visible', async ({ page }) => {
    await page.goto('/solutions');

    await expect(page.getByPlaceholder('Enter your work email')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Request a demo' })).toBeVisible();
  });
});
