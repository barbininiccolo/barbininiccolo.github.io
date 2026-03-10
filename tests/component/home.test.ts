import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from '../../src/routes/+page.svelte';

describe('Home Page Component', () => {
	it('should render the component', () => {
		const { container } = render(Page);
		expect(container).toBeTruthy(); 
	});
});