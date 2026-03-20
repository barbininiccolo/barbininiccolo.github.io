import { expect, test } from '@playwright/test';

test.describe('CV Page E2E', () => {
	test('should navigate to CV and show the product-style experience lineup', async ({ page }) => {
		await page.goto('/cv');

		// 1. Check the main heading (H1)
		// Changed from "Work and research experiences" to "Work & Research"
		const heading = page.getByRole('heading', { level: 1 });
		await expect(heading).toContainText(/Work & Research/i);

		// 2. Verify the Flagship Job (now an H2 in the new design)
		// We use a regex for "AI Software Engineer" to be safe with casing/line breaks
		const flagshipJob = page.getByRole('heading', { 
			level: 2, 
			name: /AI Software Engineer/i 
		});
		await expect(flagshipJob).toBeVisible();

		// 3. Verify the "Present" time exists
		// Note: The new code uses an em-dash (—) or hyphen (-), regex handles both
		await expect(page.getByText(/April 2024.*Present/i)).toBeVisible();

		// 4. Check for the "Foundation" or "Infrastructure" section
		// Since the <ol> is gone, we verify the semantic section exists
		const foundationSection = page.getByRole('heading', { 
			level: 2, 
			name: /Infrastructure|Foundation/i 
		});
		await expect(foundationSection).toBeVisible();

		// 5. Verify at least one of the earlier roles is rendered
		await expect(page.getByText(/Riskpoint Ltd/i)).toBeVisible();
	});
});