import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,      // Listen on 0.0.0.0 (required for Docker)
		port: 5173,      // Internal Container Port
		strictPort: true,
		hmr: {
			clientPort: 3000 // Browser connects to this port for hot updates
		}
	}
});