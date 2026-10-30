import { test, expect } from '@playwright/test';

test(
  'To validate the test run',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
    tag: ['@QADENCE_TC_ID:TC-001'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://iassistant-qa.ideas2it.com/timesheet', async () => {
      await page.goto('https://iassistant-qa.ideas2it.com/timesheet');
    });

  }
);

