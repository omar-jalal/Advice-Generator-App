import node from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

const config = {
	kit: {
		adapter: node({ env: { port: process.env.PORT } }),
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
