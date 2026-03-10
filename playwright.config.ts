import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173, // Default SvelteKit preview port
		reuseExistingServer: !process.env.CI,
	},
	testDir: 'tests/e2e', // Look in this folder!
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
});