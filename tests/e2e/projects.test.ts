import { expect, test } from '@playwright/test';

test.describe('Projects Page E2E', () => {
	test('should navigate to Projects and verify the timeline', async ({ page }) => {
		await page.goto('/projects');

		// 1. Verify H1
		const h1 = page.getByRole('heading', { level: 1 });
		await expect(h1).toHaveText('Projects');

		// 2. Verify the project title is visible
		const projectTitle = page.getByText('MSc Cyber Security Dissertation');
		await expect(projectTitle).toBeVisible();

		// 3. Verify the external link icon is present (the SVG)
		const externalLink = page.locator('a[href*="github.com"]').first();
		const icon = externalLink.locator('svg');
		await expect(icon).toBeVisible();

		// 4. Verify the visual timeline line exists
		const timelineLine = page.locator('ol.border-l-2');
		await expect(timelineLine).toBeVisible();
	});
});