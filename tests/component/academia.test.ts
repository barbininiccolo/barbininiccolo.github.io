import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import AcademiaPage from '../../src/routes/academia/+page.svelte';

describe('Academia Page Component', () => {
	it('renders the main academic headings', () => {
		render(AcademiaPage);

		expect(screen.getByText(/Academic experience/i)).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Education', level: 2 })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Academic Award', level: 2 })).toBeInTheDocument();
	});

	it('displays the correct degrees and universities', () => {
		render(AcademiaPage);

		expect(screen.getByText('MSc Cyber Security')).toBeInTheDocument();
		expect(screen.getByText(/University of Gloucestershire/i)).toBeInTheDocument();
		expect(screen.getByText('BSc Computer Science')).toBeInTheDocument();
		expect(screen.getByText(/University of Perugia/i)).toBeInTheDocument();
	});

	it('displays the dissertation details', () => {
		render(AcademiaPage);

		expect(
			screen.getByText(
				/How to improve the accuracy of phishing email detection using Natural Language Processing/i
			)
		).toBeInTheDocument();

		expect(screen.getByText(/Professor Hassan Chizari/i)).toBeInTheDocument();
	});

	it('displays the academic award details', () => {
		render(AcademiaPage);

		expect(
			screen.getByRole('heading', { name: /MSc Cyber Security award/i })
		).toBeInTheDocument();
		expect(screen.getByText('British Computer Society (BCS)')).toBeInTheDocument();
		expect(screen.getByText(/best student and best dissertation/i)).toBeInTheDocument();
	});

	it('does not render non-academic content', () => {
		render(AcademiaPage);

		expect(screen.queryByText(/Competencies and Skills/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Personal Interests/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Coding Languages/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Python programming/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Swimming/i)).not.toBeInTheDocument();
	});
});