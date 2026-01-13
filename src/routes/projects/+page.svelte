<script>
    const projects = [
        {
          title: "MSc Cyber Security Dissertation",
          link: "https://github.com/barbininiccolo/MSc-Cyber-Security-Dissertation-NLP-and-Phishing-emails-detection",
          role: "Researcher and developer",
          date: "Autumn 2023",
          reason: "This project was undertaken as part of the MSc Cyber Security programme, requiring focused research in a specialised area supported by a software implementation.",
          mission: "To develop an algorithm for phishing email detection using Natural Language Processing (NLP) techniques.",
          learning: "The project developed my postgraduate research skills and strengthened my proficiency in algorithm design and implementation using Python."
        }
    ];
</script>

<div class="max-w-4xl mx-auto">
  <!-- Header -->
  <div class="mb-16">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Projects</h1>
    <p class="text-2xl text-gray-400 font-light">
      A collection of my work, the reasons behind them, and the lessons learned along the way.
    </p>
  </div>

  <!-- Timeline List -->
  <ol class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-20">                  
    {#each projects as project}
      <li class="ml-10">
        <!-- Timeline Dot -->
        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-[1.05rem] ring-8 ring-white dark:ring-black dark:bg-blue-900">
          <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
        </span>

        <!-- Title & Link -->
        <h3 class="flex items-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          <a href={project.link} target="_blank" rel="noreferrer" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3">
            {project.title}
            <!-- External Link Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 opacity-60">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </h3>

        <!-- Meta Data (Role & Date) -->
        <div class="flex items-center gap-4 mb-8 text-lg">
          <span class="font-semibold text-gray-700 dark:text-gray-300">{project.role}</span>
          <span class="text-gray-400">•</span>
          <time class="text-gray-400">{project.date}</time>
        </div>

        <!-- Content Blocks -->
        <div class="space-y-8">
          
          <!-- 1. The Reason -->
          <div class="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
            <h4 class="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">The Spark</h4>
            <p class="text-xl font-light text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {project.reason}
            </p>
          </div>

          <!-- 2. The Mission -->
          <div class="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
            <h4 class="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">The Mission</h4>
            <p class="text-xl font-light text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {project.mission}
            </p>
          </div>

          <!-- 3. The Learnings -->
          <div class="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h4 class="flex items-center gap-2 text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              What I learned
            </h4>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.learning}
            </p>
          </div>

        </div>
      </li>
    {/each}
  </ol>
</div>