// vite.config.ts
import { sveltekit } from "file:///app/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///app/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [sveltekit()],
  server: {
    host: true,
    // Listen on 0.0.0.0 (required for Docker)
    port: 5173,
    // Internal Container Port
    strictPort: true,
    hmr: {
      clientPort: 3e3
      // Browser connects to this port for hot updates
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtzdmVsdGVraXQoKV0sXG5cdHNlcnZlcjoge1xuXHRcdGhvc3Q6IHRydWUsICAgICAgLy8gTGlzdGVuIG9uIDAuMC4wLjAgKHJlcXVpcmVkIGZvciBEb2NrZXIpXG5cdFx0cG9ydDogNTE3MywgICAgICAvLyBJbnRlcm5hbCBDb250YWluZXIgUG9ydFxuXHRcdHN0cmljdFBvcnQ6IHRydWUsXG5cdFx0aG1yOiB7XG5cdFx0XHRjbGllbnRQb3J0OiAzMDAwIC8vIEJyb3dzZXIgY29ubmVjdHMgdG8gdGhpcyBwb3J0IGZvciBob3QgdXBkYXRlc1xuXHRcdH1cblx0fVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUE4TCxTQUFTLGlCQUFpQjtBQUN4TixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsVUFBVSxDQUFDO0FBQUEsRUFDckIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLEtBQUs7QUFBQSxNQUNKLFlBQVk7QUFBQTtBQUFBLElBQ2I7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
