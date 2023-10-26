import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');

  await page.getByRole('link', { name: 'Pizza' }).click();
  await page.getByRole('link', { name: 'zurück zur Übersicht' }).click();

  await page.getByTestId('add-to-cart-1').click();

  await page.getByLabel('add to shopping cart').click();
  
  await expect(page.getByTestId('item-title-1')).toContainText("Pizza");

  await page.getByRole('button', { name: 'kaufen' }).click();
  await expect(page.getByRole('heading', { name: 'Danke!' })).toBeVisible();
});