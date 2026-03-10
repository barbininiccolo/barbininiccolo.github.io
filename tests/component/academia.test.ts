import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import AcademiaPage from '../../src/routes/academia/+page.svelte';

describe('Academia Page Component', () => {
	it('renders the main academic headings', () => {
		render(AcademiaPage);
		expect(screen.getByText(/Academic experience and Personal interests/i)).toBeInTheDocument();
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

	it('renders technical skill badges', () => {
		render(AcademiaPage);
		const skills = ['Python programming', 'Artificial Intelligence', 'Svelte', 'Docker'];
		skills.forEach(skill => {
			expect(screen.getByText(skill)).toBeInTheDocument();
		});
	});

	it('renders the language cards with proficiency levels', () => {
		render(AcademiaPage);
		// Check for language names
		expect(screen.getByRole('heading', { name: 'English' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'German' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Italian' })).toBeInTheDocument();

		// Check for specific proficiency text
		expect(screen.getByText(/Bilingual Proficiency/i)).toBeInTheDocument();
		expect(screen.getByText(/Elementary \(A2\)/i)).toBeInTheDocument();
		expect(screen.getByText(/Native/i)).toBeInTheDocument();
	});
});