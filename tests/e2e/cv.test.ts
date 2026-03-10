import { expect, test } from '@playwright/test';

test.describe('CV Page E2E', () => {
	test('should navigate to CV and show the experience timeline', async ({ page }) => {
		await page.goto('/cv');

		// 1. Check the main heading on the page (H1) instead of the browser tab title
		const heading = page.getByRole('heading', { level: 1 });
		await expect(heading).toContainText(/Work and research experiences/i);

		// 2. Verify the current job is prominent
		const currentJob = page.locator('h3', { hasText: 'AI software engineer and developer' });
		await expect(currentJob).toBeVisible();

		// 3. Verify the "Present" badge/time exists
		await expect(page.getByText('April 2024 - Present')).toBeVisible();

		// 4. Check that the timeline border (the vertical line) is rendered
		const timeline = page.locator('ol.border-l-2');
		await expect(timeline).toBeVisible();
	});
});