import preprocess from "svelte-preprocess";
import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		// default options are shown
		adapter: vercel({
		  // if true, will deploy the app using edge functions
		  // (https://vercel.com/docs/concepts/functions/edge-functions)
		  // rather than serverless functions
		edge: false,
	
		  // an array of dependencies that esbuild should treat
		  // as external when bundling functions
		external: [],
	
		  // if true, will split your app into multiple functions
		  // instead of creating a single one for the entire app
		split: false
		})
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;