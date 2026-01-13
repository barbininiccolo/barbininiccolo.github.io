<section class="flex flex-col gap-10">
  
  <!-- Hero Section: HUGE Typography -->
  <div class="py-10 md:py-20">
    <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-gray-900 dark:text-white leading-[0.9] mb-8">
      Niccolò Barbini <br />
      <span class="text-gray-300 dark:text-gray-700">AI software engineer</span>
    </h1>
    <p class="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 max-w-4xl leading-relaxed font-light">
      I build scalable full-stack platforms. <br class="hidden md:block" />
      Specialising in <span class="text-black dark:text-white font-medium">AI Engineering</span>, 
      <span class="text-black dark:text-white font-medium">Computer Vision</span>, and 
      <span class="text-black dark:text-white font-medium">DevOps</span>.
    </p>
  </div>

  <!-- The Bento Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
    
    <!-- Block 1: Profile Picture (Square) -->
    <div class="aspect-square rounded-[3rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm group relative">
      <img 
        src="/images/nb.jpg" 
        alt="Niccolò Barbini" 
        class="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out scale-110 group-hover:scale-100"
      />
    </div>

    <!-- Block 2: About (Large) -->
    <div class="md:col-span-2 md:row-span-2 min-h-[500px] p-10 md:p-14 rounded-[3rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group hover:shadow-2xl transition duration-500">
      <div class="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div class="badge badge-lg badge-neutral mb-6">About</div>
          <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight">System Design <br/> meets Intelligence.</h2>
        </div>
        <p class="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
          I don't just write code; I like to develop intelligent systems. From training custom AI models based on a specific goal to deploying Dockerized microservices, I am working to bridge the gap between complex AI research and production-grade software.
        </p>
      </div>
      <!-- Decorative Gradient -->
      <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full blur-3xl opacity-60 group-hover:scale-125 transition duration-1000"></div>
    </div>

    <!-- Block 3: Tech Stack (Tall - FULL VERSION RESTORED) -->
    <div class="md:col-span-1 md:row-span-2 min-h-[500px] p-10 rounded-[3rem] bg-black text-white dark:bg-white dark:text-black shadow-sm flex flex-col justify-between hover:scale-[1.02] transition duration-500">
      <div>
        <h3 class="text-3xl font-bold mb-8">Stack.</h3>
        <ul class="space-y-6 text-lg md:text-xl font-light opacity-90">
          
          <!-- Artificial Intelligence-->
          <li class="flex items-center gap-4 border-b border-gray-800 dark:border-gray-300 pb-3 group-hover:pl-2 transition-all duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"></path></svg>
            <span>Artificial Intelligence</span>
          </li>

          <!-- Git -->
          <li class="flex items-center gap-4 border-b border-gray-800 dark:border-gray-300 pb-3 group-hover:pl-2 transition-all duration-300 delay-150">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 11.25M7.5 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm9 12.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM7.5 7.5h.008v.008H7.5V7.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM16.5 16.5h.008v.008H16.5V16.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 7.5h.008v.008H12V7.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
            <span>Git & DevOps</span>
          </li>
          
          <!-- Python -->
          <li class="flex items-center gap-4 border-b border-gray-800 dark:border-gray-300 pb-3 group-hover:pl-2 transition-all duration-300 delay-200">
             <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>
             <span>Python, Tailwind CSS</span>
          </li>

          <!-- TypeScript -->
          <li class="flex items-center gap-4 border-b border-gray-800 dark:border-gray-300 pb-3 group-hover:pl-2 transition-all duration-300 delay-100">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
            </svg>
            <span>TypeScript</span>
          </li>
          
          <!-- Docker -->
          <li class="flex items-center gap-4 border-b border-gray-800 dark:border-gray-300 pb-3 group-hover:pl-2 transition-all duration-300 delay-150">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path>
            </svg>
            <span>Docker</span>
          </li>
        </ul>
      </div>
      <div class="text-xs uppercase tracking-[0.3em] opacity-40 mt-6">Core Toolkit</div>
    </div>

    <!-- Block 4: LinkedIn (Square) -->
    <a href="https://linkedin.com/in/yourprofile" target="_blank" class="p-10 rounded-[3rem] bg-[#0077b5] text-white shadow-sm flex flex-col justify-between hover:bg-[#005a8a] transition duration-300 group">
      <svg class="w-12 h-12 fill-current group-hover:scale-110 transition duration-300" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      <div>
        <div class="font-bold text-xl">LinkedIn</div>
        <div class="text-sm opacity-80 uppercase tracking-wider mt-1">Let's connect</div>
      </div>
    </a>

    <!-- Block 5: Status (Square-ish, widened to balance bottom row) -->
    <div class="md:col-span-1 lg:col-span-2 p-10 rounded-[3rem] bg-blue-50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700 shadow-sm flex flex-col justify-between group hover:bg-blue-100 dark:hover:bg-gray-800 transition duration-500">
      <div class="text-6xl mb-2 group-hover:scale-110 transition duration-300 origin-left">🇩🇪</div>
      <div>
        <div class="text-sm text-gray-500 uppercase tracking-wider mt-1">Based In</div>
        <div class="font-bold text-xl">Cologne, Germany</div>
      </div>
    </div>

    <!-- Block 6: GitHub (Square-ish, widened to balance bottom row) -->
    <a href="https://github.com/barbininiccolo" target="_blank" class="md:col-span-1 lg:col-span-2 p-10 rounded-[3rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 group">
      <svg class="w-16 h-16 text-gray-900 dark:text-white group-hover:rotate-12 transition duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      <div>
        <div class="font-bold text-xl">GitHub</div>
        <div class="text-sm text-gray-500 uppercase tracking-wider mt-1">Check my projects</div>
      </div>
    </a>

  </div>
</section>