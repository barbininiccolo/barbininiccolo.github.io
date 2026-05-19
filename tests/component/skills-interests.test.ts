import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import SkillsInterestsPage from '../../src/routes/skills-interests/+page.svelte';

describe('Skills & Interests Page Component', () => {
	it('renders the main page headings', () => {
		render(SkillsInterestsPage);

		expect(
			screen.getByRole('heading', { name: 'Skills & Interests', level: 1 })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: 'Competencies & Interests', level: 2 })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: 'Languages and Proficiency Levels', level: 2 })
		).toBeInTheDocument();
	});

	it('renders competencies and skill badges', () => {
		render(SkillsInterestsPage);

		expect(
			screen.getByRole('heading', { name: 'Competencies and Skills', level: 3 })
		).toBeInTheDocument();

		const skills = [
			'Python programming',
			'Artificial Intelligence',
			'Computer Vision',
			'Natural Language Processing',
			'Open Source',
			'Docker',
			'Svelte',
			'Network architecture'
		];

		skills.forEach((skill) => {
			expect(screen.getByText(skill)).toBeInTheDocument();
		});
	});

	it('renders personal interests', () => {
		render(SkillsInterestsPage);

		expect(
			screen.getByRole('heading', { name: 'Personal Interests', level: 3 })
		).toBeInTheDocument();

		const interests = [
			'Reading',
			'Swimming',
			'Theatre playing',
			'Cooking',
			'Stand up comedy',
			'History'
		];

		interests.forEach((interest) => {
			expect(screen.getByText(interest)).toBeInTheDocument();
		});
	});

	it('renders spoken languages with proficiency levels', () => {
		render(SkillsInterestsPage);

		expect(screen.getByRole('heading', { name: 'Languages', level: 3 })).toBeInTheDocument();

		expect(screen.getByRole('heading', { name: 'English', level: 4 })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'German', level: 4 })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Italian', level: 4 })).toBeInTheDocument();

		expect(screen.getByText(/Bilingual Proficiency/i)).toBeInTheDocument();
		expect(screen.getByText(/Elementary \(A2\)/i)).toBeInTheDocument();
		expect(screen.getByText(/Native/i)).toBeInTheDocument();
	});

	it('renders coding languages with proficiency levels', () => {
        render(SkillsInterestsPage);

        expect(
            screen.getByRole('heading', { name: 'Coding Languages', level: 3 })
        ).toBeInTheDocument();

        expect(screen.getByRole('heading', { name: 'Python', level: 4 })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Typescript', level: 4 })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Tailwind CSS', level: 4 })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'C', level: 4 })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Java', level: 4 })).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'Svelte / SvelteKit', level: 4 })
        ).toBeInTheDocument();

        expect(screen.getByText('High Medium Proficiency', { exact: true })).toBeInTheDocument();
        expect(screen.getByText('Medium Proficiency', { exact: true })).toBeInTheDocument();
        expect(screen.getAllByText('Beginner Proficiency', { exact: true })).toHaveLength(3);
        expect(screen.getByText('Low Medium Proficiency', { exact: true })).toBeInTheDocument();
    });

	it('does not render academic-only content', () => {
		render(SkillsInterestsPage);

		expect(screen.queryByText('MSc Cyber Security')).not.toBeInTheDocument();
		expect(screen.queryByText('BSc Computer Science')).not.toBeInTheDocument();
		expect(screen.queryByText('British Computer Society (BCS)')).not.toBeInTheDocument();
		expect(screen.queryByText(/best student and best dissertation/i)).not.toBeInTheDocument();
	});
});