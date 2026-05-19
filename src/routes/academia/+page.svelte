<script lang="ts">
	// Academic data can be moved to a +page.ts file later if needed
</script>

<svelte:head>
	<meta name="description" content="Academic background, dissertation and awards." />
</svelte:head>

<div class="max-w-4xl mx-auto py-12 px-4 sm:px-6">
	<!-- Main Header -->
	<div class="mb-16">
		<h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
			Academic experience
		</h1>
		<p class="text-2xl text-gray-400 font-light">
			Education, dissertation and academic awards.
		</p>
	</div>

	<!-- SECTION: EDUCATION -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 ml-3">Education</h2>

		<ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-16">
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-blue-900">
					<div class="w-3 h-3 bg-blue-600 rounded-full"></div>
				</span>

				<h3 class="flex items-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					MSc Cyber Security
				</h3>

				<div class="flex items-center gap-4 mb-4 text-lg">
					<span class="font-semibold text-gray-700 dark:text-gray-300">
						University of Gloucestershire, United Kingdom
					</span>
					<span class="text-gray-400">•</span>
					<time class="text-gray-400">2021 - 2023</time>
				</div>

				<p class="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
					Dissertation:
					<span class="italic">
						"How to improve the accuracy of phishing email detection using Natural Language Processing"
					</span>.
					<br class="mb-4" />
					Researched utilisation of Natural Language Processing in the cyber security domain.
					Supervised by Professor Hassan Chizari.
				</p>
			</li>

			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-gray-400 rounded-full"></div>
				</span>

				<h3 class="flex items-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					BSc Computer Science
				</h3>

				<div class="flex items-center gap-4 mb-4 text-lg">
					<span class="font-semibold text-gray-700 dark:text-gray-300">
						University of Perugia, Italy
					</span>
					<span class="text-gray-400">•</span>
					<time class="text-gray-400">2015 - 2021</time>
				</div>
			</li>
		</ol>
	</div>

	<!-- SECTION: ACADEMIC AWARD -->
	<div class="mb-20">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 ml-3">
			Academic Award
		</h2>

		<ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-16">
			<li class="ml-10">
				<span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-gray-800">
					<div class="w-3 h-3 bg-blue-600 rounded-full"></div>
				</span>

				<h3 class="flex items-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					MSc Cyber Security Award
				</h3>

				<div class="flex items-center gap-4 mb-4 text-lg">
					<span class="font-semibold text-gray-700 dark:text-gray-300">
						British Computer Society (BCS)
					</span>
					<span class="text-gray-400">•</span>
					<time class="text-gray-400">2022 - 2023</time>
				</div>

				<p class="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
					I received the British Computer Society Award as best student and best dissertation
					for Master Level, Level 7 of the UK National Qualifications Framework.
				</p>
			</li>
		</ol>
	</div>
</div>