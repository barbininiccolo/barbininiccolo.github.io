import { expect, test } from '@playwright/test';

test.describe('Blog Integration', () => {
	test('should load and display real posts from the filesystem', async ({ page }) => {
		await page.goto('/blog');

		await expect(page.getByRole('heading', { name: 'My Thoughts' })).toBeVisible();

		// Check that at least the "first-post" exists
		const firstPost = page.locator('a[href="/blog/first-post"]');
		await expect(firstPost).toBeVisible();

		await firstPost.click();
		await expect(page).toHaveURL(/.*\/blog\/first-post/);
	});
});