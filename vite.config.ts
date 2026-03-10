import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config'; // <-- Changed this line

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,      // Listen on 0.0.0.0 (required for Docker)
		port: 5173,      // Internal Container Port
		strictPort: true,
		hmr: {
			clientPort: 3000 // Browser connects to this port for hot updates
		}
	},
	// --- Added Test Configuration ---
	test: {
		include: ['tests/component/**/*.{test,spec}.{js,ts}'], 
		environment: 'happy-dom',
		globals: true,
		setupFiles: ['./vitest-setup.ts'],
		// --- ADD THIS BLOCK ---
		server: {
			deps: {
				inline: [
					'@testing-library/dom',
					'@testing-library/svelte'
				]
			}
		}
	}
});