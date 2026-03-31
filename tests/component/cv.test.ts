import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import CVPage from '../../src/routes/cv/+page.svelte';

describe('CV Page Component', () => {
	it('renders the main heading and subtitle', () => {
		render(CVPage);
		expect(screen.getByText(/Work & Research/i)).toBeInTheDocument();
		expect(screen.getByText(/Experiences/i)).toBeInTheDocument();
		expect(screen.getByText(/My professional journey/i)).toBeInTheDocument();
	});

	it('renders all 5 work experience entries', () => {
		render(CVPage);
		// Target the semantic headings for the roles
		const aiRole = screen.getByRole('heading', { name: /AI Software Engineer/i });
		const researchRole = screen.getByRole('heading', { name: /Graduate Research Assistant/i });
		const itSupportEntries = screen.getAllByRole('heading', { name: /IT Support Technician/i });

		expect(aiRole).toBeInTheDocument();
		expect(researchRole).toBeInTheDocument();
		expect(itSupportEntries).toHaveLength(3);
	});

	it('displays specific technical roles and locations', () => {
		render(CVPage);
		// Use getByRole with the full name to handle the <br/> and avoid duplicate word errors
		expect(screen.getByRole('heading', { name: /AI Software Engineer/i })).toBeInTheDocument();
		
		// Locations are unique strings, so getByText is fine here
		expect(screen.getByText(/Cologne \/ Germany/i)).toBeInTheDocument();
		expect(screen.getByText(/Cheltenham \/ UK/i)).toBeInTheDocument();
	});

	it('contains key professional keywords', () => {
		render(CVPage);
		
		expect(screen.getByText(/machine learning models/i)).toBeInTheDocument();
		
		// Use getAllByText for keywords that appear in multiple sections
		const nlpMentions = screen.getAllByText(/Natural Language Processing/i);
		expect(nlpMentions.length).toBeGreaterThan(0);

		const phishingMentions = screen.getAllByText(/phishing/i);
		expect(phishingMentions.length).toBeGreaterThan(0);
	});
});