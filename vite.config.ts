import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig(() => {
	return {
		base: "/",
		plugins: [tsconfigPaths(), react()],
		test: {
			globals: true,
			environment: "jsdom",
			setupFiles: "./src/setupTests.ts", 
		},
		build: {
			outDir: "build", 
		},
	};
});
