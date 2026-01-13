<script lang="ts">
	// You can eventually move this data to a +page.ts file if you want to fetch it dynamically
</script>

<svelte:head>
	<title>Academic CV</title>
	<meta name="description" content="Academic background and research." />
</svelte:head>

<div class="max-w-4xl mx-auto py-12 px-4 sm:px-6">
	
	<!-- Main Header -->
	<div class="mb-16">
		<h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
			Academic experience and Personal interests
		</h1>
		<p class="text-2xl text-gray-400 font-light">
			Education, award, interests and languages.
		</p>
	</div>

	<!-- SECTION: EDUCATION (Using your Blue Dot style for key milestones) -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 ml-3">Education</h2>
		
		<ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-16">
			<!-- MSc Cyber Security -->
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-blue-900">
					<div class="w-3 h-3 bg-blue-600 rounded-full"></div>
				</span>
				<h3 class="flex items-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					MSc Cyber Security
				</h3>
				<div class="flex items-center gap-4 mb-4 text-lg">
					<span class="font-semibold text-gray-700 dark:text-gray-300">University of Gloucestershire, United Kingdom</span>
					<span class="text-gray-400">•</span>
					<time class="text-gray-400">2021 - 2023</time>
				</div>
				<p class="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
					Dissertation: <span class="italic">"How to improve the accuracy of phishing email detection using Natural Language Processing"</span>. 
					<br class="mb-4">
					Researched utilisation of Natural Language Processing in the cyber security domain. Supervised by Professor Hassan Chizari.
				</p>
			</li>

			<!-- Masters -->
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-gray-400 rounded-full"></div>
				</span>
				<h3 class="flex items-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					BSc Computer Science
				</h3>
				<div class="flex items-center gap-4 mb-4 text-lg">
					<span class="font-semibold text-gray-700 dark:text-gray-300">University of Perugia, Italy</span>
					<span class="text-gray-400">•</span>
					<time class="text-gray-400">2015 - 2021</time>
				</div>
			</li>
		</ol>
	</div>

	

	<!-- SECTION: AWARD -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 ml-3">Academic Award</h2>
		
		<ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-16">
			<!-- Role 1 -->
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-gray-400 rounded-full"></div>
				</span>
				<h3 class="flex items-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					MSc Cyber Security award
				</h3>
				<div class="flex items-center gap-4 mb-4 text-lg">
					<span class="font-semibold text-gray-700 dark:text-gray-300">British Computer Society (BCS)</span>
					<span class="text-gray-400">•</span>
					<time class="text-gray-400">2022 - 2023</time>
				</div>
				<p class="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
					I received the British Computer Society Award as best student and best dissertation for Master Level (Level 7, UK National Qualifications Framework).
				</p>
			</li>
		</ol>
	</div>


	<!-- SECTION: COMPETENCIES (Languages & Interests) -->
	<!-- This section also has mb-20 in case you add more later -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 ml-3">Competencies & Interests</h2>
		
		<ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-16">

			<!-- Interests Node -->
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-gray-400 rounded-full"></div>
				</span>
				
				<h3 class="flex items-center mb-4 text-3xl font-bold text-gray-900 dark:text-white">
					Competencies and Skills
				</h3>
				
				<p class="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-6">
					This is a summary of my current technical skills. In the future, new ones will be added. Never stop learning.
				</p>

				<div class="flex flex-wrap gap-3 max-w-2xl">
					<span class="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-lg font-medium">Python programming</span>
					<span class="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-lg font-medium">Artificial Intelligence</span>
					<span class="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-lg font-medium">Computer Vision</span>
					<span class="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-lg font-medium">Natural Language Processing</span>
					<span class="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-lg font-medium">Open Source</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">V&C Git</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">DevOps</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">Tailwind CSS</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">CSS</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">Typescript</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">Svelte</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">Docker</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">Virtual Environments</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">Network architecture</span>
				</div>
			</li>

			<!-- Interests Node -->
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-gray-400 rounded-full"></div>
				</span>
				
				<h3 class="flex items-center mb-4 text-3xl font-bold text-gray-900 dark:text-white">
					Personal Interests
				</h3>
				
				<p class="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-6">
					Beyond my interest in computer science, cyber security and Artificial Intelligence, I tried to explore different areas of interest.
				</p>

				<div class="flex flex-wrap gap-3 max-w-2xl">
					<span class="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-lg font-medium">Reading</span>
					<span class="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-lg font-medium">Swimming</span>
					<span class="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-lg font-medium">Theatre playing</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">Languages</span>
					<span class="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-lg font-medium">Cooking</span>
				</div>
			</li>
		</ol>
	</div>

	<!-- Languages Section -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 ml-3">Languages and Proficiency levels</h2>
		
		<ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-16">
			
			<!-- Languages Node -->
			<li class="ml-10">
				<!-- Icon -->
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-gray-400 rounded-full"></div>
				</span>
				
				<h3 class="flex items-center mb-6 text-3xl font-bold text-gray-900 dark:text-white">
					Languages
				</h3>
				
				<!-- Language Cards Grid -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
					
					<!-- Card 1: English -->
					<div class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-200 dark:hover:border-blue-900 transition-colors shadow-sm">
						<div class="flex flex-col h-full justify-between">
							<div>
								<span class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Bilingual Proficiency</span>
								<h4 class="text-2xl font-bold text-gray-900 dark:text-white mt-1">English</h4>
							</div>
							<!-- 5/5 Dots Visualization -->
							<div class="flex gap-1.5 mt-4">
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
							</div>
						</div>
					</div>

					<!-- Card 2: German -->
					<div class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-200 dark:hover:border-blue-900 transition-colors shadow-sm">
						<div class="flex flex-col h-full justify-between">
							<div>
								<span class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Elementary (A2)</span>
								<h4 class="text-2xl font-bold text-gray-900 dark:text-white mt-1">German</h4>
							</div>
							<!-- 1/5 Dots -->
							<div class="flex gap-1.5 mt-4">
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
								<div class="w-8 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
								<div class="w-8 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
								<div class="w-8 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
							</div>
						</div>
					</div>

					<!-- Card 3: Italian -->
					<div class="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-200 dark:hover:border-blue-900 transition-colors shadow-sm">
						<div class="flex flex-col h-full justify-between">
							<div>
								<span class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Native</span>
								<h4 class="text-2xl font-bold text-gray-900 dark:text-white mt-1">Italian</h4>
							</div>
							<!-- 5/5 Dots -->
							<div class="flex gap-1.5 mt-4">
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>
								<div class="w-8 h-1.5 rounded-full bg-blue-600"></div>								
							</div>
						</div>
					</div>
				</div>
			</li>
		</ol>
	</div>
</div>