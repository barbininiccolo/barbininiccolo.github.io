<script>
  import "../app.css";
  import { page } from '$app/stores';

  export const prerender = true;
  export const trailingSlash = 'always';
  
  let y = 0;
  let lastY = 0;
  let isHidden = false;

  $: {
    if (y > lastY && y > 50) {
      isHidden = true;
    } else {
      isHidden = false;
    }
    lastY = y;
  }
</script>

<svelte:window bind:scrollY={y} />

<!-- Background Grid & Glowing Orbs -->
<div class="fixed inset-0 z-[-1] bg-grid-pattern pointer-events-none mix-blend-overlay dark:opacity-40"></div>
<div class="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] animate-blob z-[-1] pointer-events-none"></div>
<div class="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 dark:bg-purple-600/10 blur-[120px] animate-blob animation-delay-2000 z-[-1] pointer-events-none"></div>

<div class="min-h-screen flex flex-col relative transition-colors duration-300">
  
  <!-- Premium Glass Navbar -->
  <div 
    class="fixed top-6 left-0 right-0 z-50 flex justify-center transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1)"
    class:-translate-y-32={isHidden}
  >
    <div class="navbar w-auto px-8 py-3 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-xl transition-all duration-500">
      <div class="flex gap-6">
        <a href="/" class="text-sm font-medium transition-colors {$page.url.pathname === '/' ? 'text-black dark:text-white drop-shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}">Home</a>
        <a href="/cv" class="text-sm font-medium transition-colors {$page.url.pathname === '/cv' ? 'text-black dark:text-white drop-shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}">CV</a>
        <a href="/academia" class="text-sm font-medium transition-colors {$page.url.pathname === '/academia' ? 'text-black dark:text-white drop-shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}">Academia</a>
        <a href="/projects" class="text-sm font-medium transition-colors {$page.url.pathname === '/projects' ? 'text-black dark:text-white drop-shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}">Projects</a>
        <a href="/blog" class="text-sm font-medium transition-colors {$page.url.pathname === '/blog' ? 'text-black dark:text-white drop-shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}">Blog</a>
      </div>
    </div>
  </div>

  <main class="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-36 pb-20">
    {#key $page.url.pathname}
      <div class="animate-fade-in">
        <slot />
      </div>
    {/key}
  </main>

  <footer class="py-10 text-center text-sm">
    <p class="text-md font-light text-gray-400 dark:text-gray-600">
			&copy; {new Date().getFullYear()} Niccolò Barbini. All rights reserved.</p>
  </footer>
</div>