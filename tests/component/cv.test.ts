import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import CVPage from '../../src/routes/cv/+page.svelte';

describe('CV Page Component', () => {
	it('renders the main heading and subtitle', () => {
		render(CVPage);
		expect(screen.getByText(/Work and research experiences/i)).toBeInTheDocument();
		expect(screen.getByText(/My professional journey/i)).toBeInTheDocument();
	});

	it('renders all 5 work experience entries', () => {
		const { container } = render(CVPage);
		const listItems = container.querySelectorAll('li');
		expect(listItems).toHaveLength(5);
	});

	it('displays specific technical roles and companies', () => {
		render(CVPage);
		expect(screen.getByText('AI software engineer and developer')).toBeInTheDocument();
		expect(screen.getByText('ZAC NRW / Cologne / Germany')).toBeInTheDocument();
		
        // Use queryAll or a regex if the name is long
		expect(screen.getByText(/University of Gloucestershire/i)).toBeInTheDocument();
	});

	it('contains key professional keywords', () => {
		render(CVPage);
		
		expect(screen.getByText(/machine learning models/i)).toBeInTheDocument();
		
		// "phishing" and "NLP" appear in multiple job descriptions, 
		const nlpMentions = screen.getAllByText(/Natural Language Processing/i);
		expect(nlpMentions.length).toBeGreaterThan(0);

		const phishingMentions = screen.getAllByText(/phishing/i);
		expect(phishingMentions.length).toBeGreaterThan(0);
	});
});