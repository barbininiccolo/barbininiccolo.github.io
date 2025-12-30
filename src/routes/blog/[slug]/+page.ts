import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = async ({ params }) => {
    // 1. Get all markdown files using an absolute path (no more counting dots!)
    const modules = import.meta.glob('/src/lib/posts/*.md');

    // 2. Build the specific path for the requested slug
    const path = `/src/lib/posts/${params.slug}.md`;

    // 3. Check if the file exists in our list
    if (!modules[path]) {
        throw error(404, `Post not found: ${params.slug}`);
    }

    // 4. Execute the import function for that specific file
    const post: any = await modules[path]();

    return {
        content: post.default,
        meta: post.metadata
    };
};