import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import ProjectsPage from '../../src/routes/projects/+page.svelte';

describe('Projects Page Component', () => {
	it('renders the main heading and intro text', () => {
		render(ProjectsPage);
		expect(screen.getByText('Projects')).toBeInTheDocument();
		expect(screen.getByText(/A collection of my work/i)).toBeInTheDocument();
	});

	it('renders the MSc Dissertation project with correct details', () => {
		render(ProjectsPage);
		
		// Check Title and Date
		expect(screen.getByText('MSc Cyber Security Dissertation')).toBeInTheDocument();
		expect(screen.getByText('Autumn 2023')).toBeInTheDocument();
		expect(screen.getByText('Researcher and developer')).toBeInTheDocument();
	});

	it('renders all content sections (Spark, Mission, Learnings)', () => {
		render(ProjectsPage);
		
		// Check section headers
		expect(screen.getByText('The Spark')).toBeInTheDocument();
		expect(screen.getByText('The Mission')).toBeInTheDocument();
		expect(screen.getByText('What I learned')).toBeInTheDocument();

		// Check specific content from the dissertation project
		expect(screen.getByText(/algorithm for phishing email detection/i)).toBeInTheDocument();
	});

	it('verifies the project link attributes for security', () => {
		render(ProjectsPage);
		const link = screen.getByRole('link', { name: /MSc Cyber Security Dissertation/i });
		
		// External links should have these for security and UX
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noreferrer');
		expect(link).toHaveAttribute('href', 'https://github.com/barbininiccolo/MSc-Cyber-Security-Dissertation-NLP-and-Phishing-emails-detection');
	});
});