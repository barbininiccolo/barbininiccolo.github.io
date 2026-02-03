import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: ['.md']
        })
    ],

    extensions: ['.svelte', '.md'],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true
        }),

        alias: {
            '$components': 'src/lib/components',
            '$assets': 'src/lib/assets',
            '$posts': 'src/lib/posts'
        },

        paths: {
            // If your site is at username.github.io/repo-name, 
            base: process.env.NODE_ENV === 'production' ? '' : '',
        }
    }
};

export default config;