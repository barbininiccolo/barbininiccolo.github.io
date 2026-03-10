import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import BlogPage from '../../src/routes/blog/+page.svelte';

describe('Blog List Page', () => {
	const mockData = {
		posts: [
			{
				slug: 'test-post-1',
				title: 'First Test Post',
				date: '2024-01-01',
				description: 'Description for post 1'
			},
			{
				slug: 'test-post-2',
				title: 'Second Test Post',
				date: '2024-02-01',
				description: 'Description for post 2'
			}
		]
	};

	it('renders the correct number of blog posts', () => {
		render(BlogPage, { data: mockData });
		
		const postLinks = screen.getAllByRole('link');
		expect(postLinks).toHaveLength(2);
	});

	it('renders post details correctly', () => {
		render(BlogPage, { data: mockData });

		expect(screen.getByText('First Test Post')).toBeInTheDocument();
		expect(screen.getByText('2024-01-01')).toBeInTheDocument();
		expect(screen.getByText('Description for post 1')).toBeInTheDocument();
	});

	it('has the correct link URL for posts', () => {
		render(BlogPage, { data: mockData });
		
		const link = screen.getByRole('link', { name: /First Test Post/i });
		expect(link).toHaveAttribute('href', '/blog/test-post-1');
	});
});