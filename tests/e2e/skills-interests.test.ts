import { expect, test } from '@playwright/test';

test.describe('Skills & Interests Page E2E', () => {
	test('should navigate to Skills & Interests and verify content', async ({ page }) => {
		await page.goto('/skills-interests');

		const mainHeading = page.getByRole('heading', { level: 1 });
		await expect(mainHeading).toContainText('Skills & Interests');

		await expect(
			page.getByRole('heading', { name: 'Competencies & Interests', level: 2, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', {
				name: 'Languages and Proficiency Levels',
				level: 2,
				exact: true
			})
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Competencies and Skills', level: 3, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Personal Interests', level: 3, exact: true })
		).toBeVisible();

		await expect(page.getByText('Python programming', { exact: true })).toBeVisible();
		await expect(page.getByText('Artificial Intelligence', { exact: true })).toBeVisible();
		await expect(page.getByText('Docker', { exact: true })).toBeVisible();

		await expect(page.getByText('Reading', { exact: true })).toBeVisible();
		await expect(page.getByText('Swimming', { exact: true })).toBeVisible();
		await expect(page.getByText('Stand up comedy', { exact: true })).toBeVisible();
	});

	test('should render spoken and coding language cards', async ({ page }) => {
		await page.goto('/skills-interests');

		await expect(
			page.getByRole('heading', { name: 'Languages', level: 3, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'English', level: 4, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'German', level: 4, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Italian', level: 4, exact: true })
		).toBeVisible();

		await expect(page.getByText('Bilingual Proficiency', { exact: true })).toBeVisible();
		await expect(page.getByText('Elementary (A2)', { exact: true })).toBeVisible();
		await expect(page.getByText('Native', { exact: true })).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Coding Languages', level: 3, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Python', level: 4, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Typescript', level: 4, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Tailwind CSS', level: 4, exact: true })
		).toBeVisible();

		await expect(page.getByRole('heading', { name: 'C', level: 4, exact: true })).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Java', level: 4, exact: true })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Svelte / SvelteKit', level: 4, exact: true })
		).toBeVisible();

		await expect(page.getByText('High Medium Proficiency', { exact: true })).toBeVisible();
		await expect(page.getByText('Medium Proficiency', { exact: true })).toBeVisible();
		await expect(page.getByText('Low Medium Proficiency', { exact: true })).toBeVisible();

		await expect(page.getByText('Beginner Proficiency', { exact: true })).toHaveCount(3);
	});

	test('should include the expected meta description', async ({ page }) => {
		await page.goto('/skills-interests');

		const metaDescription = page.locator('meta[name="description"]');

		await expect(metaDescription).toHaveAttribute(
			'content',
			'Technical skills, personal interests and language proficiency.'
		);
	});

	test('should not render academic-only content on the Skills & Interests page', async ({ page }) => {
		await page.goto('/skills-interests');

		await expect(page.getByText('MSc Cyber Security', { exact: true })).toHaveCount(0);
		await expect(page.getByText('BSc Computer Science', { exact: true })).toHaveCount(0);
		await expect(page.getByText('British Computer Society (BCS)', { exact: true })).toHaveCount(0);
		await expect(page.getByText(/best student and best dissertation/i)).toHaveCount(0);
	});
});