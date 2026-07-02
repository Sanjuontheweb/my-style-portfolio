import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
		base: process.env.NODE_ENV === 'production'
			? '/my-style-portfolio'
			: ''
    }
  }
};

export default config;
