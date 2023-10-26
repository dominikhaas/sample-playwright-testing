# sample-playwright-testing
Sample for e2e/frontend testing (used for talks) 


# Demo 

## Preparation
1. Clone https://github.com/sspringer82/wdc-next
1. Open project wdc-next
1. Start backend ```npm run backend```
1. Start frontend ```npm run dev```
1. Open project in visual studio code

## Part 1 - Getting started & tools
We alredy initialized playwright via ```npm init playwright@latest```


---
1. Run the tests with ```npx playwright test --headed```
1. Show results ```npx playwright show-report```
1. Run tests with traces ```npx playwright test --trace on```
1. Run ui with ```npx playwright test --ui```
1. Show visual studio extension
1. Debug existing test



## Part 2

1. Record a new test

```` typescript
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');

  await page.getByRole('link', { name: 'Pizza' }).click();
  await page.getByRole('link', { name: 'zurück zur Übersicht' }).click();
  await page.getByTestId('container').locator('div').filter({ hasText: 'Pizza9.99hinzufügen' }).getByRole('button').click();
  

  await page.getByLabel('add to shopping cart').click();

  await page.getByRole('button', { name: 'kaufen' }).click();
  await expect(await page.getByRole('heading', { name: 'Danke!' })).toBeVisible();
});
```


4. Run test
5. Run test with trace
6. Run UI