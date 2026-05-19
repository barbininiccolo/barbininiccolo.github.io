import { expect, test } from '@playwright/test';

test.describe('Academia Page E2E', () => {
	test('should navigate to Academia and verify SEO and academic content', async ({ page }) => {
		await page.goto('/academia');

		await expect(page).toHaveTitle('Academic CV');

		const mainHeading = page.getByRole('heading', { level: 1 });
		await expect(mainHeading).toContainText(/Academic experience/i);

		await expect(page.getByRole('heading', { name: 'Education', level: 2 })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Academic Award', level: 2 })).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'MSc Cyber Security', level: 3, exact: true })
		).toBeVisible();

		await expect(page.getByText(/University of Gloucestershire/i)).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'BSc Computer Science', level: 3, exact: true })
		).toBeVisible();

		await expect(
			page.getByText(/How to improve the accuracy of phishing email detection/i)
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'MSc Cyber Security Award', level: 3, exact: true })
		).toBeVisible();

		await expect(page.getByText('British Computer Society (BCS)')).toBeVisible();
		await expect(page.getByText(/best student and best dissertation/i)).toBeVisible();
	});

	test('should not render non-academic content on the Academia page', async ({ page }) => {
		await page.goto('/academia');

		await expect(page.getByText(/Competencies and Skills/i)).toHaveCount(0);
		await expect(page.getByText(/Personal Interests/i)).toHaveCount(0);
		await expect(page.getByText(/Languages and Proficiency/i)).toHaveCount(0);
		await expect(page.getByText(/Coding Languages/i)).toHaveCount(0);

		await expect(page.getByText('Python programming')).toHaveCount(0);
		await expect(page.getByText('Artificial Intelligence')).toHaveCount(0);
		await expect(page.getByText('Swimming')).toHaveCount(0);
		await expect(page.getByText('English')).toHaveCount(0);
	});
});