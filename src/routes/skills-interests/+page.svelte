<script lang="ts">
	type Tag = {
		label: string;
		variant: 'primary' | 'secondary';
	};

	type Language = {
		name: string;
		proficiency: string;
		level: number;
	};

	const competencies: Tag[] = [
		{ label: 'Python programming', variant: 'primary' },
		{ label: 'Artificial Intelligence', variant: 'primary' },
		{ label: 'Computer Vision', variant: 'primary' },
		{ label: 'Natural Language Processing', variant: 'primary' },
		{ label: 'Open Source', variant: 'primary' },
		{ label: 'V&C Git', variant: 'secondary' },
		{ label: 'DevOps', variant: 'secondary' },
		{ label: 'Tailwind CSS', variant: 'secondary' },
		{ label: 'CSS', variant: 'secondary' },
		{ label: 'Typescript', variant: 'secondary' },
		{ label: 'Svelte', variant: 'secondary' },
		{ label: 'Docker', variant: 'secondary' },
		{ label: 'Virtual Environments', variant: 'secondary' },
		{ label: 'Virtual Machines', variant: 'secondary' },
		{ label: 'Data analysis', variant: 'secondary' },
		{ label: 'Basics of Statistics', variant: 'secondary' },
		{ label: 'Software Engineering', variant: 'secondary' },
		{ label: 'Software Testing', variant: 'secondary' },
		{ label: 'Network architecture', variant: 'secondary' }
	];

	const interests: Tag[] = [
		{ label: 'Reading', variant: 'primary' },
		{ label: 'Swimming', variant: 'primary' },
		{ label: 'Theatre playing', variant: 'primary' },
		{ label: 'Languages', variant: 'secondary' },
		{ label: 'Cooking', variant: 'secondary' },
		{ label: 'Stand up comedy', variant: 'secondary' },
		{ label: 'History', variant: 'secondary' }
	];

	const spokenLanguages: Language[] = [
		{ name: 'English', proficiency: 'Bilingual Proficiency', level: 5 },
		{ name: 'German', proficiency: 'Elementary (A2)', level: 2 },
		{ name: 'Italian', proficiency: 'Native', level: 5 }
	];

	const codingLanguages: Language[] = [
		{ name: 'Python', proficiency: 'High Medium Proficiency', level: 4 },
		{ name: 'Typescript', proficiency: 'Medium Proficiency', level: 3 },
		{ name: 'Tailwind CSS', proficiency: 'Beginner Proficiency', level: 2 },
		{ name: 'C', proficiency: 'Beginner Proficiency', level: 1 },
		{ name: 'Java', proficiency: 'Beginner Proficiency', level: 1 },
		{ name: 'Svelte / SvelteKit', proficiency: 'Low Medium Proficiency', level: 2 }
	];
</script>

<svelte:head>
	<meta name="description" content="Technical skills, personal interests and language proficiency." />
</svelte:head>

<div class="max-w-4xl mx-auto py-12 px-4 sm:px-6">
	<!-- Main Header -->
	<div class="mb-16">
		<h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
			Skills & Interests
		</h1>
		<p class="text-2xl text-gray-400 font-light">
			Technical competencies, personal interests and language proficiency.
		</p>
	</div>

	<!-- SECTION: COMPETENCIES & INTERESTS -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 ml-3">
			Competencies & Interests
		</h2>

		<ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-16">
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-blue-600 rounded-full"></div>
				</span>

				<h3 class="flex items-center mb-4 text-3xl font-bold text-gray-900 dark:text-white">
					Competencies and Skills
				</h3>

				<p class="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-6">
					This is a summary of my current technical skills. In the future, new ones will be added.
					Never stop learning.
				</p>

				<div class="flex flex-wrap gap-3 max-w-2xl">
					{#each competencies as skill}
						<span
							class={`px-4 py-2 rounded-full text-lg font-medium ${
								skill.variant === 'primary'
									? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
									: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
							}`}
						>
							{skill.label}
						</span>
					{/each}
				</div>
			</li>

			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-blue-600 rounded-full"></div>
				</span>

				<h3 class="flex items-center mb-4 text-3xl font-bold text-gray-900 dark:text-white">
					Personal Interests
				</h3>

				<p class="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-6">
					Beyond my interest in computer science, cyber security and Artificial Intelligence,
					I am always trying to explore different areas of interest.
				</p>

				<div class="flex flex-wrap gap-3 max-w-2xl">
					{#each interests as interest}
						<span
							class={`px-4 py-2 rounded-full text-lg font-medium ${
								interest.variant === 'primary'
									? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
									: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
							}`}
						>
							{interest.label}
						</span>
					{/each}
				</div>
			</li>
		</ol>
	</div>

	<!-- SECTION: LANGUAGES -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 ml-3">
			Languages and Proficiency Levels
		</h2>

		<ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-16">
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-blue-600 rounded-full"></div>
				</span>

				<h3 class="flex items-center mb-6 text-3xl font-bold text-gray-900 dark:text-white">
					Languages
				</h3>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
					{#each spokenLanguages as language}
						<div class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-200 dark:hover:border-blue-900 transition-colors shadow-sm">
							<div class="flex flex-col h-full justify-between">
								<div>
									<span class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
										{language.proficiency}
									</span>
									<h4 class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
										{language.name}
									</h4>
								</div>

								<div class="flex gap-1.5 mt-4">
									{#each Array(5) as _, index}
										<div
											class={`w-8 h-1.5 rounded-full ${
												index < language.level
													? 'bg-blue-600'
													: 'bg-gray-200 dark:bg-gray-700'
											}`}
										></div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</li>

			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-blue-600 rounded-full"></div>
				</span>

				<h3 class="flex items-center mb-6 text-3xl font-bold text-gray-900 dark:text-white">
					Coding Languages
				</h3>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
					{#each codingLanguages as language}
						<div class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-200 dark:hover:border-blue-900 transition-colors shadow-sm">
							<div class="flex flex-col h-full justify-between">
								<div>
									<span class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
										{language.proficiency}
									</span>
									<h4 class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
										{language.name}
									</h4>
								</div>

								<div class="flex gap-1.5 mt-4">
									{#each Array(5) as _, index}
										<div
											class={`w-8 h-1.5 rounded-full ${
												index < language.level
													? 'bg-blue-600'
													: 'bg-gray-200 dark:bg-gray-700'
											}`}
										></div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</li>
		</ol>
	</div>
</div>