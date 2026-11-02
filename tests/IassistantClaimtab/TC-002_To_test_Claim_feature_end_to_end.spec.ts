import { test, expect } from '@playwright/test';

test(
  'To test Claim feature end to end',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-002' },
    tag: ['@QADENCE_TC_ID:TC-002'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://iassistant-qa.ideas2it.com/login', async () => {
      await page.goto('https://iassistant-qa.ideas2it.com/login');
    });
    //Start - Module - Login to Iassistant

    await test.step('#02 - Click on the \'Enter Ideas2IT Email\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).click();
    });

    await test.step('#03 - Enter email \'yogeshwar.sankaralingam@ideas2it.com\' in the \'Enter Ideas2IT Email\' field', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).fill('yogeshwar.sankaralingam@ideas2it.com');
    });

    await test.step('#04 - Click on the \'Enter the password\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).click();
    });

    await test.step('#05 - Enter password \'Popular@123\' in the \'Enter the password\' field', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).fill('Popular@123');
    });

    await test.step('#06 - Click the \'Login\' button', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });
    //End - Module - Login to Iassistant

    await test.step('#07 - Click the \'claims\' link', async () => {
      await page.getByRole("link", { name: "claims", exact: true }).click();
    });

    await test.step('#08 - Select \'FOOD\' option from the claim type dropdown', async () => {
      await page.getByRole("combobox").filter({ hasText: "All TypesFoodTravelCertificationAsset" }).selectOption('FOOD');
    });

    await test.step('#09 - Select \'CERTIFICATION\' option from the claim type dropdown', async () => {
      await page.getByRole("combobox").filter({ hasText: "All TypesFoodTravelCertificationAsset" }).selectOption('CERTIFICATION');
    });

    await test.step('#10 - Select \'TRAVEL\' option from the claim type dropdown', async () => {
      await page.getByRole("combobox").filter({ hasText: "All TypesFoodTravelCertificationAsset" }).selectOption('TRAVEL');
    });

    await test.step('#11 - Select \'ASSET_REIMBURSEMENT\' option from the claim type dropdown', async () => {
      await page.getByRole("combobox").filter({ hasText: "All TypesFoodTravelCertificationAsset" }).selectOption('ASSET_REIMBURSEMENT');
    });

    await test.step('#12 - Select \'FOOD\' option from the claim type dropdown', async () => {
      await page.getByRole("combobox").filter({ hasText: "All TypesFoodTravelCertificationAsset" }).selectOption('FOOD');
    });

    await test.step('#13 - Click the \'Resolved Claims\' button', async () => {
      await page.getByRole("button", { name: "Resolved Claims", exact: true }).click();
    });

    await test.step('#14 - Click the \'Active Claims\' button', async () => {
      await page.getByRole("button", { name: "Active Claims", exact: true }).click();
    });

    await test.step('#15 - Click the \'Reimburse Food\' button', async () => {
      await page.getByRole("button", { name: "Reimburse Food", exact: true }).click();
    });

    await test.step('#16 - Click on the \'Select date\' textbox', async () => {
      await page.getByRole("textbox", { name: "Select date", exact: true }).click();
    });

    await test.step('#17 - Select date \'Monday, November 2nd, 2026\' from the date picker', async () => {
      await page.getByRole("option", { name: "Choose Monday, November 2nd, 2026", exact: true }).click();
    });

    await test.step('#18 - Click on the \'Enter the description\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the description", exact: true }).click();
    });

    await test.step('#19 - Enter description \'123456uhgcx\' in the \'Enter the description\' field', async () => {
      await page.getByRole("textbox", { name: "Enter the description", exact: true }).fill('123456uhgcx');
    });

    await test.step('#20 - Click on the \'Amount\' spinbutton field', async () => {
      await page.getByRole("spinbutton", { name: "Amount", exact: true }).click();
    });

    await test.step('#21 - Enter amount \'12345\' in the \'Amount\' field', async () => {
      await page.getByRole("spinbutton", { name: "Amount", exact: true }).fill('12345');
    });

    await test.step('#22 - Click the dropdown indicator container', async () => {
      await page.locator('div.css-qrebse-indicatorContainer').click();
    });

    await test.step('#23 - Click the cancel icon image', async () => {
      await page.getByRole("img", { name: "cancel icon", exact: true }).click();
    });

    await test.step('#24 - Click the \'Yes\' button to confirm cancellation', async () => {
      await page.getByRole("button", { name: "Yes" }).click();
    });

    await test.step('#25 - Click the \'leave request\' link', async () => {
      await page.getByRole("link", { name: "leave request", exact: true }).click();
    });

    await test.step('#26 - Click the \'Old Requests\' button', async () => {
      await page.getByRole("button", { name: "Old Requests", exact: true }).click();
    });

    await test.step('#27 - Verify that the column header displays \'FROM DATE\'', async () => {
      await expect(page.getByRole("columnheader", { name: "FROM DATE", exact: true })).toHaveText('FROM DATE');
    });

    await test.step('#28 - Verify that the first date cell in the filtered row displays \'20 Jul 2026\'', async () => {
      await expect(page.getByRole("row").filter({ hasText: "20 Jul 202620 Jul 2026Sick Leave-ApprovedMithun (I" }).getByText("20 Jul 2026").nth(0)).toHaveText(new RegExp('^20 Jul 2026$'));
    });

    await test.step('#29 - Click the \'claims\' link', async () => {
      await page.getByRole("link", { name: "claims", exact: true }).click();
    });

    await test.step('#30 - Click the \'Reimburse Certificate\' button', async () => {
      await page.getByRole("button", { name: "Reimburse Certificate", exact: true }).click();
    });

    await test.step('#31 - Click on the certificate type dropdown (6th div element)', async () => {
      await page.locator('#certificationType').locator('div').nth(5).click();
    });

    await test.step('#32 - Click the cancel icon image', async () => {
      await page.getByRole("img", { name: "cancel icon", exact: true }).click();
    });

    await test.step('#33 - Click the \'fuel (Flexi Benefit)\' link', async () => {
      await page.getByRole("link", { name: "fuel (Flexi Benefit)", exact: true }).click();
    });

    await test.step('#34 - Select \'2024-04-01,2025-03-05\' option from the year dropdown', async () => {
      await page.getByRole("combobox").filter({ hasText: "2024-20252025-20262026-2027" }).selectOption('2024-04-01,2025- 03-05');
    });

  }
);

