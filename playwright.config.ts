import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 90 * 1000,
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    headless: true, // Set this to false to see the browser
    trace: "on-first-retry",
    // You can also set other options here
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
