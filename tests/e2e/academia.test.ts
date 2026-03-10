import { expect, test } from '@playwright/test';

test.describe('Academia Page E2E', () => {
	test('should navigate to Academia and verify SEO and content', async ({ page }) => {
		await page.goto('/academia');

		await expect(page).toHaveTitle('Academic CV');

		// Verify the main H1 is visible
		const mainHeading = page.getByRole('heading', { level: 1 });
		await expect(mainHeading).toContainText(/Academic experience/i);

		await expect(page.getByText('British Computer Society (BCS)')).toBeVisible();

		// Verify the language cards are rendered in a grid
		const languageCards = page.locator('.grid-cols-1.md\\:grid-cols-2 div.p-6');
		await expect(languageCards).toHaveCount(3);
	});
});