import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import ProjectsPage from '../../src/routes/projects/+page.svelte';

describe('Projects Page Component', () => {
	it('renders the main heading and intro text', () => {
		render(ProjectsPage);
		expect(screen.getByText('Projects')).toBeInTheDocument();
		expect(screen.getByText(/A collection of my work/i)).toBeInTheDocument();
	});

	// MSc Dissertation
	it('renders the MSc Dissertation project with correct details', () => {
		render(ProjectsPage);
		
		// Check Title and Date
		expect(screen.getByText('MSc Cyber Security Dissertation')).toBeInTheDocument();
		expect(screen.getByText('Spring-Autumn 2023')).toBeInTheDocument();
		expect(screen.getByText('Researcher and developer')).toBeInTheDocument();
	});

	it('renders all content sections (Reason, Mission, Learnings)', () => {
		render(ProjectsPage);
		
		// Check section headers (use getAllByText since multiple projects have these)
		expect(screen.getAllByText('The Reason').length).toBeGreaterThan(0);
		expect(screen.getAllByText('The Mission').length).toBeGreaterThan(0);
		expect(screen.getAllByText('What I learned').length).toBeGreaterThan(0);

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

	// AI cyber attacks detection system
	it('renders the AI cyber attacks detection system project with correct details', () => {
		render(ProjectsPage);
		
		// Check Title and Date
		expect(screen.getByText('AI cyber attacks detection system')).toBeInTheDocument();
		// Used by multiple projects, so we use getAllByText
		expect(screen.getAllByText('Spring 2022').length).toBeGreaterThan(0);
		expect(screen.getAllByText('University module').length).toBeGreaterThan(0);
	});

	it('renders AI cyber attacks content sections (Reason, Mission, Learnings)', () => {
		render(ProjectsPage);
		
		expect(screen.getAllByText('The Reason').length).toBeGreaterThan(0);
		expect(screen.getAllByText('The Mission').length).toBeGreaterThan(0);
		expect(screen.getAllByText('What I learned').length).toBeGreaterThan(0);

		// Check specific content from the AI project
		expect(screen.getByText(/ML classifier to classify cyber attacks/i)).toBeInTheDocument();
	});

	it('verifies the AI project link attributes for security', () => {
		render(ProjectsPage);
		const link = screen.getByRole('link', { name: /AI cyber attacks detection system/i });
		
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noreferrer');
		expect(link).toHaveAttribute('href', 'https://github.com/barbininiccolo/AI-Cyber-Attacks-Detection-System');
	});

	// Handwritten digit classification
	it('renders the Handwritten digit classification project with correct details', () => {
		render(ProjectsPage);
		
		// Check Title and Date
		expect(screen.getByText('Handrwitten digit classification')).toBeInTheDocument();
		expect(screen.getAllByText('Spring 2022').length).toBeGreaterThan(0);
		expect(screen.getAllByText('University module').length).toBeGreaterThan(0);
	});

	it('renders Handwritten digit classification content sections (Reason, Mission, Learnings)', () => {
		render(ProjectsPage);
		
		expect(screen.getAllByText('The Reason').length).toBeGreaterThan(0);
		expect(screen.getAllByText('The Mission').length).toBeGreaterThan(0);
		expect(screen.getAllByText('What I learned').length).toBeGreaterThan(0);

		// Check specific content from the Handwritten digit project
		expect(screen.getByText(/example of building, training, and evaluating/i)).toBeInTheDocument();
	});

	it('verifies the Handwritten digit project link attributes for security', () => {
		render(ProjectsPage);
		const link = screen.getByRole('link', { name: /Handrwitten digit classification/i });
		
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noreferrer');
		expect(link).toHaveAttribute('href', 'https://github.com/barbininiccolo/Handwritten-Digit-Classification-with-Neural-Networks');
	});

	// Library system in C
	it('renders the Library system in C project with correct details', () => {
		render(ProjectsPage);
		
		// Check Title and Date
		expect(screen.getByText('Library system in C')).toBeInTheDocument();
		expect(screen.getByText('Year 2016')).toBeInTheDocument();
		expect(screen.getAllByText('University module').length).toBeGreaterThan(0);
	});

	it('renders Library system content sections (Reason, Mission, Learnings)', () => {
		render(ProjectsPage);
		
		expect(screen.getAllByText('The Reason').length).toBeGreaterThan(0);
		expect(screen.getAllByText('The Mission').length).toBeGreaterThan(0);
		expect(screen.getAllByText('What I learned').length).toBeGreaterThan(0);

		// Check specific content from the C project
		expect(screen.getByText(/I learned the C programming language/i)).toBeInTheDocument();
	});

	it('verifies the Library system project link attributes for security', () => {
		render(ProjectsPage);
		const link = screen.getByRole('link', { name: /Library system in C/i });
		
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noreferrer');
		expect(link).toHaveAttribute('href', 'https://github.com/barbininiccolo/Library-system-in-C');
	});
});