import { expect, test } from '@playwright/test';

test.describe('Layout & Navigation', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('navbar contains all expected links', async ({ page }) => {
		const navbar = page.locator('.navbar');

		await expect(navbar.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
		await expect(navbar.getByRole('link', { name: 'CV', exact: true })).toBeVisible();
		await expect(navbar.getByRole('link', { name: 'Academia', exact: true })).toBeVisible();
		await expect(navbar.getByRole('link', { name: 'Projects', exact: true })).toBeVisible();
		await expect(navbar.getByRole('link', { name: 'Blog', exact: true })).toBeVisible();
	});

	test('footer displays the correct current year and author name', async ({ page }) => {
		const currentYear = new Date().getFullYear();
		await expect(page.getByText(`© ${currentYear} Niccolò Barbini`)).toBeVisible();
	});

	test('navigation links route correctly and update active styling', async ({ page }) => {
		const navbar = page.locator('.navbar');
		const cvLink = navbar.getByRole('link', { name: 'CV', exact: true });
		
		await cvLink.click();
		await expect(page).toHaveURL(/.*\/cv/);
		await expect(cvLink).toHaveClass(/.*text-blue-600.*/);
		
		const homeLink = navbar.getByRole('link', { name: 'Home', exact: true });
		await expect(homeLink).toHaveClass(/.*text-gray-600.*/);
	});

	test('navbar hides when scrolling down and reappears when scrolling up', async ({ page }) => {
		await page.evaluate(() => {
			document.body.style.minHeight = '2000px';
		});

		// We check the container with the translate classes
		const navbarContainer = page.locator('.fixed.top-6');

		// Scroll down
		await page.evaluate(() => window.scrollBy(0, 100));
		await page.waitForTimeout(100); 
		await expect(navbarContainer).toHaveClass(/.*-translate-y-32.*/);

		// Scroll up
		await page.evaluate(() => window.scrollBy(0, -50));
		await page.waitForTimeout(100);
		await expect(navbarContainer).not.toHaveClass(/.*-translate-y-32.*/);
	});
});