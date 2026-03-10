import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');

	// This assumes you have an <h1> on your home page. 
	await expect(page.locator('h1')).toBeVisible();
});