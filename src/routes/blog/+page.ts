interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
}

export const load = async () => {
	// 1. Update path to look in src/lib/posts
	const imports = import.meta.glob('/src/lib/posts/*.md');
	
	const posts: Post[] = [];

	for (const path in imports) {
		const file: any = await imports[path]();
		
		// Extract slug from the filename (e.g., "/src/lib/posts/first-post.md" -> "first-post")
		const slug = path.split('/').pop()?.replace('.md', '');

		if (file && file.metadata && slug) {
			posts.push({
				slug,
				title: file.metadata.title,
				date: file.metadata.date,
				description: file.metadata.description
			});
		}
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};