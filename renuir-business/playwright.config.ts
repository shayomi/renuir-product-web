import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BROWSER_QA_BASE_URL || 'http://127.0.0.1:3000';
const shouldSkipWebServer = process.env.BROWSER_QA_SKIP_WEBSERVER === '1';

export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.BROWSER_QA_WORKERS
    ? Number(process.env.BROWSER_QA_WORKERS)
    : 1,
  reporter: process.env.CI ? [['github'], ['html']] : [['list'], ['html']],
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  webServer: shouldSkipWebServer
    ? undefined
    : {
        command: process.env.BROWSER_QA_START_COMMAND || 'pnpm dev --webpack',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120000,
      },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
