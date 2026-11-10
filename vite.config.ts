import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	base: "/",
	server: { host: true, port: 5176, strictPort: true },
	preview: { host: true, port: 5176, strictPort: true },
	build: {
		target: "es2022",
		assetsInlineLimit: 0,
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	plugins: [
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["icons/*.png", "assets/**/*", "shaders/**/*"],
			manifest: {
				name: "NeoMatrix",
				short_name: "NeoMatrix",
				description: "Matrix digital rain — variants, mobile-first PWA.",
				lang: "en",
				start_url: "/",
				scope: "/",
				display: "standalone",
				display_override: ["standalone", "fullscreen"],
				orientation: "any",
				background_color: "#000000",
				theme_color: "#003300",
				categories: ["entertainment", "games"],
				icons: [
					{ src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
					{ src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
					{ src: "icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
				],
			},
			workbox: {
				globPatterns: ["**/*.{js,css,html,png,jpg,svg,glsl,wgsl,ttf,woff2}"],
				maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
				navigateFallback: "/index.html",
			},
		}),
	],
});
