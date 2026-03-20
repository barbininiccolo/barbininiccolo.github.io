<script lang="ts">
  // 1. Your 3D Tilt Effect (for visual boxes only)
  function tilt(node: HTMLElement) {
    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = x / rect.width - 0.5;
      const yPct = y / rect.height - 0.5;
      node.style.transform = `perspective(1000px) rotateX(${yPct * -10}deg) rotateY(${xPct * 10}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleLeave = () => {
      node.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    };
    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return { destroy() { node.removeEventListener('mousemove', handleMove); node.removeEventListener('mouseleave', handleLeave); } };
  }

  // 2. Google-style Scroll Reveal
  function reveal(node: HTMLElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('opacity-100', 'translate-y-0');
          node.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, { threshold: 0.1 });
    node.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-12');
    observer.observe(node);
    return { destroy() { observer.disconnect(); } };
  }
</script>

<header class="py-32 px-6 text-center" use:reveal>
  <h1 class="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12">
    Work & Research <br/>
    <span class="opacity-20 italic">Experiences.</span>
  </h1>
  <p class="text-2xl md:text-4xl font-light opacity-50 max-w-4xl mx-auto leading-tight">
    My professional journey. Between industry, academia and government
  </p>
</header>

<!-- ZAC NRW -->
<section class="max-w-[1400px] mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-20">
  <div class="flex-1" use:reveal>
    <div class="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-40 mb-10">
      <span>Cologne / Germany</span>
      <span>•</span>
      <span>April 2024 — Present</span>
    </div>
    
    <h2 class="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-10">
      AI Software Engineer <br/>
      <span class="text-blue-500">& Developer.</span>
    </h2>

    <div class="space-y-8">
      <div class="border-l-2 border-blue-500 pl-8">
        <h3 class="text-xl font-bold uppercase tracking-tight mb-2">Main work</h3>
        <p class="text-2xl md:text-3xl font-light leading-snug opacity-80">
          My work involves designing machine learning models, overseeing data preparation and processing, and training neural networks, all while ensuring their ethical and reliable application in real-world scenarios.
        </p>
      </div>

      <div class="border-l-2 border-gray-500/30 pl-8">
        <h3 class="text-xl font-bold uppercase tracking-tight mb-2">Interim role</h3>
        <p class="text-2xl md:text-3xl font-light leading-snug opacity-80">
          Acted as network security consultant: authored policies and wrote incident reports.
        </p>
      </div>
    </div>
  </div>

  <!-- Visual Representation -->
  <div class="flex-1 w-full aspect-square bg-black/5 dark:bg-white/5 rounded-[4rem] flex items-center justify-center overflow-hidden border border-white/5" use:tilt use:reveal>
     <div class="w-1/2 h-1/2 bg-blue-500/20 blur-[120px] absolute"></div>
     <div class="relative z-10 flex flex-col items-center">
        <span class="text-[12rem]">🧠</span>
     </div>
  </div>
</section>

<!-- UNIVERSITY OF GLOUCESTERSHIRE) -->
<section class="max-w-[1400px] mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-20">
  <!-- Visual Box -->
  <div class="flex-1 w-full aspect-square bg-black/5 dark:bg-white/5 rounded-[4rem] flex items-center justify-center overflow-hidden border border-white/5 order-2 lg:order-1" use:tilt use:reveal>
     <div class="w-1/2 h-1/2 bg-emerald-500/20 blur-[120px] absolute"></div>
     <div class="relative z-10 flex flex-col gap-6 w-1/2">
        <div class="h-4 bg-emerald-500/40 rounded-full w-full"></div>
        <div class="h-4 bg-emerald-500 rounded-full w-3/4"></div>
        <div class="h-4 bg-emerald-500/40 rounded-full w-full"></div>
        <div class="h-4 bg-emerald-500/20 rounded-full w-1/2"></div>
     </div>
  </div>

  <div class="flex-1 order-1 lg:order-2" use:reveal>
    <div class="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-40 mb-10">
      <span>Cheltenham / UK</span>
      <span>•</span>
      <span>July 2022 — March 2024</span>
    </div>
    
    <h2 class="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-10">
      Graduate Research <br/>
      <span class="text-emerald-500">Assistant.</span>
    </h2>

    <p class="text-2xl md:text-4xl font-light leading-tight opacity-80 mb-12">
      Worked with the School of Computing and Engineering in researching, developing and testing Natural Language Processing (NLP) models.
    </p>

    <div class="p-10 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20">
      <h3 class="text-lg font-bold uppercase tracking-widest text-emerald-500 mb-4 italic">Core Project Output</h3>
      <p class="text-xl md:text-2xl font-light leading-relaxed opacity-70 italic">
        "I built and tested an algorithm to detect phishing using Natural Language Processing. By extracting keywords from an email, and comparing them with semantic similarity models, I determined whether an email was genuine or phishing."
      </p>
    </div>
  </div>
</section>

<!-- Previous experiences -->
<section class="max-w-[1400px] mx-auto px-6 py-40 border-t border-white/10 mt-20">
  <div class="mb-32" use:reveal>
    <h2 class="text-6xl md:text-8xl font-bold tracking-tighter mb-4">Infrastructure.</h2>
    <p class="text-3xl opacity-40 font-light">Supporting the intelligence through robust IT operations.</p>
  </div>

  <!-- Row 1: Maggies 2019 -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 border-b border-white/5 items-start" use:reveal>
    <div class="lg:col-span-4">
      <h3 class="text-3xl font-bold tracking-tight mb-2">IT Support Technician</h3>
      <p class="text-sm font-bold opacity-30 uppercase tracking-[0.2em]">Maggie's / Glasgow / 2019</p>
    </div>
    <div class="lg:col-span-8">
      <p class="text-2xl md:text-3xl font-light opacity-60 leading-snug">
        Worked with the IT department in developing and studying phishing campaigns against the company. The software utilised in this task was <span class="text-blue-400 font-medium">Microsoft Azure</span>.
      </p>
    </div>
  </div>

  <!-- Row 2: Maggies 2018 -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 border-b border-white/5 items-start" use:reveal>
    <div class="lg:col-span-4">
      <h3 class="text-3xl font-bold tracking-tight mb-2">IT Support Technician</h3>
      <p class="text-sm font-bold opacity-30 uppercase tracking-[0.2em]">Maggie's / Glasgow / 2018</p>
    </div>
    <div class="lg:col-span-8">
      <p class="text-2xl md:text-3xl font-light opacity-60 leading-snug">
        Worked for a <span class="text-black font-medium">data analysis project</span> with the aim of analysing UK postal codes and customers origins. Elaborated a plan to allocate resources (human and financial) around the UK.
      </p>
    </div>
  </div>

  <!-- Row 3: Riskpoint -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 items-start" use:reveal>
    <div class="lg:col-span-4">
      <h3 class="text-3xl font-bold tracking-tight mb-2">IT Support Technician</h3>
      <p class="text-sm font-bold opacity-30 uppercase tracking-[0.2em]">Riskpoint Ltd / London / 2016</p>
    </div>
    <div class="lg:col-span-8">
      <p class="text-2xl md:text-3xl font-light opacity-60 leading-snug">
        General IT jobs, assistance. Helped the IT department with varied tasks to support the timely delivery of high-quality services.
      </p>
    </div>
  </div>
</section>
