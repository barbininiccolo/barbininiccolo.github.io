<script>
  import "../app.css";
  import { page } from '$app/stores';
<<<<<<< HEAD
</script>

<div class="min-h-screen flex flex-col relative bg-gray-50 dark:bg-black transition-colors duration-300">
  
  <!-- Floating Navbar (Slightly larger now) -->
  <div class="fixed top-6 left-0 right-0 z-50 flex justify-center">
=======

  // Logic for the Smart Reveal effect
  let y = 0;
  let lastY = 0;
  let isHidden = false;

  $: {
    // Hide if scrolling down more than 50px, show immediately when scrolling up
    if (y > lastY && y > 50) {
      isHidden = true;
    } else {
      isHidden = false;
    }
    lastY = y;
  }
</script>

<svelte:window bind:scrollY={y} />

<div class="min-h-screen flex flex-col relative bg-gray-50 dark:bg-black transition-colors duration-300">
  
  <!-- Floating Navbar (Your exact styles preserved) -->
  <div 
    class="fixed top-6 left-0 right-0 z-50 flex justify-center transition-transform duration-500 ease-in-out"
    class:-translate-y-32={isHidden}
  >
>>>>>>> fix_landing_page
    <div class="navbar w-auto px-8 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:scale-105 transition-transform duration-300">
      <div class="flex gap-4">
        <a href="/" class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors {$page.url.pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}">Home</a>
        <a href="/cv" class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors {$page.url.pathname === '/cv' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}">CV</a>
        <a href="/academia" class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors {$page.url.pathname === '/academia' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}">Academia</a>
        <a href="/projects" class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors {$page.url.pathname === '/projects' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}">Projects</a>
        <a href="/blog" class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors {$page.url.pathname === '/blog' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}">Blog</a>
      </div>
    </div>
  </div>

<<<<<<< HEAD
  <!-- Main Container: Significantly wider (max-w-[1600px]) -->
=======
  <!-- Main Container: max-w-[1600px] as requested -->
>>>>>>> fix_landing_page
  <main class="flex-grow w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-20">
    {#key $page.url.pathname}
      <div class="animate-fade-in">
        <slot />
      </div>
    {/key}
  </main>

  <footer class="py-10 text-center text-sm text-gray-400 opacity-60">
    <p class="text-xl font-light text-gray-500 dark:text-gray-500">
			&copy; {new Date().getFullYear()} Niccolò Barbini. All rights reserved.</p>
  </footer>
<<<<<<< HEAD
</div>
=======
</div>

<style>
  /* Ensuring the transition for -translate is smooth */
  .fixed {
    will-change: transform;
  }
</style>
>>>>>>> fix_landing_page
