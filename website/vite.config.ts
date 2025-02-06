import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig({
	server: {
		host: true,
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
	},
	plugins: [sveltekit()]
});
