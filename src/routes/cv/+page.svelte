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

<!-- ZAC NRW - AI SOFTWARE ENGINEER SECTION -->
<section class="max-w-[1400px] mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
  
  <!-- Left Side: Text Content -->
  <div class="flex-1 order-2 lg:order-1" use:reveal>
    <div class="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-40 mb-10">
      <span>Cologne / Germany</span>
      <span>•</span>
      <span>April 2024 — Present</span>
    </div>
    
    <h2 class="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
      AI Software <br/>
      <span class="text-neutral-400">Engineer.</span>
    </h2>

    <div class="space-y-12">
      <div class="group">
        <h3 class="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-3">
          <span class="w-8 h-[1px] bg-blue-500"></span>
          AI / Software development
        </h3>
        <p class="text-2xl md:text-3xl font-light leading-snug text-neutral-800 dark:text-neutral-200">
          My work involves <span class="font-medium text-blue-500">designing machine learning models</span>, overseeing data preparation and processing, and training neural networks, all while ensuring their ethical and reliable application in real-world scenarios.
        </p>
      </div>

      <div class="group opacity-60 hover:opacity-100 transition-opacity duration-500">
        <h3 class="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-3">
          <span class="w-8 h-[1px] bg-neutral-400"></span>
          Cyber Security Consulting
        </h3>
        <p class="text-xl md:text-2xl font-light leading-snug">
          Acted as network security consultant: authored policies and wrote incident reports.
        </p>
      </div>
    </div>
  </div>
<!-- Right Side: Advanced "Deep Autoencoder" Visual -->
  <div class="flex-1 w-full aspect-[4/5] lg:aspect-square relative order-1 lg:order-2" use:reveal>
    <!-- Premium Dark Glass Canvas -->
    <div class="absolute inset-0 bg-[#050507] dark:bg-[#050507] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl" use:tilt>
        
      <!-- Micro-Grid Background -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_40%,transparent_100%)]"></div>

      <!-- Deep Ambient Latent Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#3b82f630_0%,#6366f110_40%,transparent_70%)] blur-[80px] rounded-full"></div>

      <!-- Advanced Neural Architecture SVG -->
      <div class="relative w-full h-full flex items-center justify-center p-2 lg:p-6">
        <svg viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[600px]">
          <defs>
            <!-- High-Tech Gradients -->
            <linearGradient id="forwardFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.1" />
              <stop offset="50%" stop-color="#818cf8" stop-opacity="0.8" />
              <stop offset="100%" stop-color="#c084fc" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient id="skipConnection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0" />
              <stop offset="50%" stop-color="#0ea5e9" stop-opacity="0.6" />
              <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0" />
            </linearGradient>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur1" />
              <feGaussianBlur stdDeviation="8" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <!-- Layer Identifiers (Engineering UI) -->
          <g class="font-mono text-[9px] uppercase tracking-[0.3em] fill-neutral-500" opacity="0.6">
            <text x="50" y="60" text-anchor="middle">Input</text>
            <text x="200" y="60" text-anchor="middle">Encoder</text>
            <text x="350" y="60" text-anchor="middle" class="fill-blue-400">Latent Space</text>
            <text x="500" y="60" text-anchor="middle">Decoder</text>
            <text x="650" y="60" text-anchor="middle">Output</text>
          </g>

          <!-- RESIDUAL (SKIP) CONNECTIONS -->
          <!-- Sweeping arcs that bypass the center, crucial in modern Deep Learning (ResNets/Transformers) -->
          <g fill="none" stroke="url(#skipConnection)" stroke-width="1.5" stroke-dasharray="6 6">
            <path d="M 200,150 C 350,20 350,20 500,150">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 200,450 C 350,580 350,580 500,450">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
            </path>
          </g>

          <!-- BASE SYNAPSES (Dense Mesh Background) -->
          <g fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
            <!-- Input to Encoder (5x4) -->
            <path d="M50,150 C125,150 125,150 200,150 M50,150 C125,150 125,250 200,250 M50,150 C125,150 125,350 200,350 M50,150 C125,150 125,450 200,450" />
            <path d="M50,225 C125,225 125,150 200,150 M50,225 C125,225 125,250 200,250 M50,225 C125,225 125,350 200,350 M50,225 C125,225 125,450 200,450" />
            <path d="M50,300 C125,300 125,150 200,150 M50,300 C125,300 125,250 200,250 M50,300 C125,300 125,350 200,350 M50,300 C125,300 125,450 200,450" />
            <path d="M50,375 C125,375 125,150 200,150 M50,375 C125,375 125,250 200,250 M50,375 C125,375 125,350 200,350 M50,375 C125,375 125,450 200,450" />
            <path d="M50,450 C125,450 125,150 200,150 M50,450 C125,450 125,250 200,250 M50,450 C125,450 125,350 200,350 M50,450 C125,450 125,450 200,450" />
            
            <!-- Decoder to Output (4x5) -->
            <path d="M500,150 C575,150 575,150 650,150 M500,150 C575,150 575,225 650,225 M500,150 C575,150 575,300 650,300 M500,150 C575,150 575,375 650,375 M500,150 C575,150 575,450 650,450" />
            <path d="M500,250 C575,250 575,150 650,150 M500,250 C575,250 575,225 650,225 M500,250 C575,250 575,300 650,300 M500,250 C575,250 575,375 650,375 M500,250 C575,250 575,450 650,450" />
            <path d="M500,350 C575,350 575,150 650,150 M500,350 C575,350 575,225 650,225 M500,350 C575,350 575,300 650,300 M500,350 C575,350 575,375 650,375 M500,350 C575,350 575,450 650,450" />
            <path d="M500,450 C575,450 575,150 650,150 M500,450 C575,450 575,225 650,225 M500,450 C575,450 575,300 650,300 M500,450 C575,450 575,375 650,375 M500,450 C575,450 575,450 650,450" />
          </g>

          <!-- ACTIVE FIBER OPTIC DATA FLOW (Continuous Forward Pass) -->
          <g fill="none" stroke="url(#forwardFlow)" stroke-width="2" stroke-dasharray="8 16" stroke-linecap="round">
            <animate attributeName="stroke-dashoffset" from="48" to="0" dur="1.5s" repeatCount="indefinite" />
            
            <!-- Compressing into Latent Space -->
            <path d="M200,150 C275,150 275,300 350,300" opacity="0.8" />
            <path d="M200,250 C275,250 275,280 350,300" opacity="0.6" />
            <path d="M200,350 C275,350 275,320 350,300" opacity="0.9" />
            <path d="M200,450 C275,450 275,300 350,300" opacity="0.7" />

            <!-- Expanding from Latent Space -->
            <path d="M350,300 C425,300 425,150 500,150" opacity="0.8" />
            <path d="M350,300 C425,300 425,250 500,250" opacity="0.6" />
            <path d="M350,300 C425,300 425,350 500,350" opacity="0.9" />
            <path d="M350,300 C425,300 425,450 500,450" opacity="0.7" />
          </g>

          <!-- BACKPROPAGATION GRADIENT PULSES (Rose Color - Right to Left) -->
          <g filter="url(#neonGlow)">
            <circle r="2.5" fill="#f43f5e">
              <animateMotion dur="2.1s" begin="0s" repeatCount="indefinite" path="M650,225 C575,225 575,250 500,250" />
            </circle>
            <circle r="3" fill="#fb923c">
              <animateMotion dur="1.8s" begin="-0.5s" repeatCount="indefinite" path="M500,350 C425,350 425,300 350,300" />
            </circle>
            <circle r="2.5" fill="#f43f5e">
              <animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M350,300 C275,300 275,250 200,250" />
            </circle>
            <circle r="2" fill="#fb923c">
              <animateMotion dur="1.9s" begin="-0.8s" repeatCount="indefinite" path="M200,150 C125,150 125,225 50,225" />
            </circle>
          </g>

          <!-- THE LATENT SPACE CORE (Highly Complex Central Hub) -->
          <g transform="translate(350, 300)">
            <!-- Outer containment field -->
            <circle r="45" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 8" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
            </circle>
            
            <!-- Multi-dimensional geometric structure -->
            <path d="M0,-30 L26,-15 L26,15 L0,30 L-26,15 L-26,-15 Z" fill="none" stroke="#818cf8" stroke-width="1.5" opacity="0.6">
               <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="15s" repeatCount="indefinite" />
            </path>
            <path d="M0,-20 L17,-10 L17,10 L0,20 L-17,10 L-17,-10 Z" fill="none" stroke="#c084fc" stroke-width="2" opacity="0.8">
               <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
            </path>

            <!-- Dense Vector Embeddings (Inner points) -->
            <circle cx="-10" cy="-10" r="1.5" fill="#fff" class="animate-pulse" />
            <circle cx="12" cy="-5" r="2" fill="#fff" class="animate-ping" />
            <circle cx="-5" cy="15" r="1.5" fill="#fff" />
            <circle cx="10" cy="10" r="1.5" fill="#fff" class="animate-pulse" />

            <!-- Bright Center Core -->
            <circle r="8" fill="#ffffff" filter="url(#neonGlow)" />
            <circle r="16" fill="#6366f1" opacity="0.3" filter="url(#neonGlow)" class="animate-pulse" />
          </g>

          <!-- NEURAL NODES (Clean UI Component Style) -->
          <g>
            <!-- 1. Input Layer (5 Nodes) -->
            <g fill="#050507" stroke="#3b82f6" stroke-width="2">
              <circle cx="50" cy="150" r="8" /><circle cx="50" cy="150" r="2" fill="#fff" stroke="none" />
              <circle cx="50" cy="225" r="8" /><circle cx="50" cy="225" r="2" fill="#fff" stroke="none" />
              <circle cx="50" cy="300" r="8" /><circle cx="50" cy="300" r="2" fill="#fff" stroke="none" class="animate-pulse" />
              <circle cx="50" cy="375" r="8" /><circle cx="50" cy="375" r="2" fill="#fff" stroke="none" />
              <circle cx="50" cy="450" r="8" /><circle cx="50" cy="450" r="2" fill="#fff" stroke="none" />
            </g>

            <!-- 2. Encoder Layer (4 Nodes - Bottlenecking) -->
            <g fill="#050507" stroke="#6366f1" stroke-width="2.5">
              <circle cx="200" cy="150" r="10" /><circle cx="200" cy="150" r="3" fill="#818cf8" stroke="none" />
              <circle cx="200" cy="250" r="10" filter="url(#neonGlow)" /><circle cx="200" cy="250" r="4" fill="#fff" stroke="none" />
              <circle cx="200" cy="350" r="10" filter="url(#neonGlow)" /><circle cx="200" cy="350" r="4" fill="#fff" stroke="none" />
              <circle cx="200" cy="450" r="10" /><circle cx="200" cy="450" r="3" fill="#818cf8" stroke="none" />
            </g>

            <!-- 4. Decoder Layer (4 Nodes - Expanding) -->
            <g fill="#050507" stroke="#a855f7" stroke-width="2.5">
              <circle cx="500" cy="150" r="10" /><circle cx="500" cy="150" r="3" fill="#c084fc" stroke="none" />
              <circle cx="500" cy="250" r="10" filter="url(#neonGlow)" /><circle cx="500" cy="250" r="4" fill="#fff" stroke="none" />
              <circle cx="500" cy="350" r="10" filter="url(#neonGlow)" /><circle cx="500" cy="350" r="4" fill="#fff" stroke="none" />
              <circle cx="500" cy="450" r="10" /><circle cx="500" cy="450" r="3" fill="#c084fc" stroke="none" />
            </g>

            <!-- 5. Output Layer (5 Nodes) -->
            <g fill="#050507" stroke="#8b5cf6" stroke-width="2">
              <circle cx="650" cy="150" r="8" /><circle cx="650" cy="150" r="2" fill="#fff" stroke="none" />
              <circle cx="650" cy="225" r="8" /><circle cx="650" cy="225" r="2" fill="#fff" stroke="none" />
              <circle cx="650" cy="300" r="8" /><circle cx="650" cy="300" r="2" fill="#fff" stroke="none" class="animate-pulse" />
              <circle cx="650" cy="375" r="8" /><circle cx="650" cy="375" r="2" fill="#fff" stroke="none" />
              <circle cx="650" cy="450" r="8" /><circle cx="650" cy="450" r="2" fill="#fff" stroke="none" />
            </g>
          </g>
        </svg>
      </div>

      <!-- Top Status Pills -->
      <div class="absolute top-6 left-6 flex flex-col gap-2">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span class="text-[10px] font-medium text-neutral-300 tracking-wide uppercase">Active Training</span>
        </div>
      </div>

      <!-- High-End AI Diagnostics Dashboard Overlay -->
      <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 backdrop-blur-xl bg-black/50 border border-white/10 p-5 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        
        <!-- Architecture Readout -->
        <div class="flex flex-col gap-1.5">
           <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-blue-400 flex items-center gap-2">
             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
             Architecture
           </span>
           <span class="text-xs font-mono tracking-wider text-white">Deep Autoencoder // ResNet</span>
        </div>

        <!-- Live Metrics Grid -->
        <div class="grid grid-cols-2 sm:flex gap-6 sm:gap-8">
          <div class="flex flex-col gap-1.5 sm:text-right">
            <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-500">Parameters</span>
            <span class="text-xs font-mono tracking-wider text-white">1.2B Active</span>
          </div>
          <div class="flex flex-col gap-1.5 sm:text-right">
            <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-500">Latent Dim</span>
            <span class="text-xs font-mono tracking-wider text-indigo-300">512-Vector</span>
          </div>
          <div class="flex flex-col gap-1.5 sm:text-right col-span-2 sm:col-span-1">
            <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-500">Loss Grad.</span>
            <span class="text-xs font-mono tracking-wider text-emerald-400">0.0031 <span class="text-rose-400 text-[10px] animate-pulse">∇ Backprop</span></span>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- UNIVERSITY OF GLOUCESTERSHIRE - NLP RESEARCH SECTION -->
<section class="max-w-[1400px] mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
  
  <!-- Left Side: Advanced NLP "Semantic Scanner" Visual -->
  <div class="flex-1 w-full aspect-[4/5] lg:aspect-square relative order-2 lg:order-1" use:reveal>
    <!-- Premium Dark Glass Canvas -->
    <div class="absolute inset-0 bg-[#050507] dark:bg-[#050507] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl" use:tilt>
        
      <!-- Micro-Grid Background -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]"></div>

      <!-- Deep Ambient NLP Glow (Emerald to Teal) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#10b98130_0%,#0d948810_40%,transparent_70%)] blur-[80px] rounded-full"></div>

      <!-- Advanced NLP Architecture SVG -->
      <div class="relative w-full h-full flex items-center justify-center p-2 lg:p-6">
        <svg viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[600px]">
          <defs>
            <linearGradient id="nlpFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.1" />
              <stop offset="50%" stop-color="#34d399" stop-opacity="0.8" />
              <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient id="threatFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.8" />
              <stop offset="100%" stop-color="#fb923c" stop-opacity="0.1" />
            </linearGradient>
            <filter id="emeraldGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur1" />
              <feGaussianBlur stdDeviation="8" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <!-- Layer Identifiers -->
          <g class="font-mono text-[9px] uppercase tracking-[0.3em] fill-neutral-500" opacity="0.6">
            <text x="80" y="60" text-anchor="middle">Input Text</text>
            <text x="250" y="60" text-anchor="middle">Tokenization</text>
            <text x="450" y="60" text-anchor="middle" class="fill-emerald-400">Semantic Comparator</text>
            <text x="620" y="60" text-anchor="middle">Classification</text>
          </g>

          <!-- RAW TEXT SCANNER (Left Side) -->
          <!-- Represents the email being read and keywords being extracted -->
          <g transform="translate(40, 150)">
            <rect x="0" y="0" width="80" height="6" rx="3" fill="#ffffff" opacity="0.1" />
            <rect x="0" y="20" width="60" height="6" rx="3" fill="#ffffff" opacity="0.1" />
            <rect x="0" y="40" width="90" height="6" rx="3" fill="#ffffff" opacity="0.1" />
            
            <rect x="0" y="80" width="70" height="6" rx="3" fill="#ffffff" opacity="0.1" />
            <rect x="0" y="100" width="85" height="6" rx="3" fill="#10b981" opacity="0.4" /> <!-- Keyword -->
            <rect x="0" y="120" width="50" height="6" rx="3" fill="#ffffff" opacity="0.1" />
            
            <rect x="0" y="160" width="95" height="6" rx="3" fill="#f43f5e" opacity="0.4" /> <!-- Suspect Keyword -->
            <rect x="0" y="180" width="65" height="6" rx="3" fill="#ffffff" opacity="0.1" />
            <rect x="0" y="200" width="80" height="6" rx="3" fill="#ffffff" opacity="0.1" />

            <!-- Scanning Laser -->
            <rect x="-10" y="0" width="110" height="2" fill="#34d399" filter="url(#emeraldGlow)">
              <animate attributeName="y" values="0;220;0" dur="4s" repeatCount="indefinite" />
            </rect>
          </g>

          <!-- NLP SELF-ATTENTION CURVES (Tokenization to Semantic Embeddings) -->
          <g fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1.5">
            <!-- Safe Paths -->
            <path d="M140,250 C190,250 190,200 250,200 M250,200 C310,200 310,250 450,250" />
            <path d="M140,250 C190,250 190,300 250,300 M250,300 C310,300 310,250 450,250" />
            <!-- Threat Paths -->
            <path d="M140,310 C190,310 190,350 250,350 M250,350 C350,350 350,400 450,400" />
          </g>

          <!-- ACTIVE SEMANTIC DATA FLOW -->
          <g fill="none" stroke="url(#nlpFlow)" stroke-width="2" stroke-dasharray="6 12" stroke-linecap="round">
            <animate attributeName="stroke-dashoffset" from="36" to="0" dur="1.2s" repeatCount="indefinite" />
            <path d="M140,250 C190,250 190,200 250,200 C310,200 310,250 450,250" />
            <path d="M140,250 C190,250 190,300 250,300 C310,300 310,250 450,250" opacity="0.5" />
          </g>
          
          <!-- THREAT DETECTION FLOW (Phishing keyword being analyzed) -->
          <g fill="none" stroke="url(#threatFlow)" stroke-width="2.5" stroke-dasharray="8 16" stroke-linecap="round" filter="url(#emeraldGlow)">
            <animate attributeName="stroke-dashoffset" from="48" to="0" dur="1s" repeatCount="indefinite" />
            <path d="M140,310 C190,310 190,350 250,350 C350,350 350,400 450,400" />
          </g>

          <!-- MOVING DATA PACKETS (Keywords) -->
          <g filter="url(#emeraldGlow)">
            <!-- Safe keywords -->
            <circle r="3" fill="#34d399">
              <animateMotion dur="2.3s" repeatCount="indefinite" path="M140,250 C190,250 190,200 250,200 C310,200 310,250 450,250" />
            </circle>
            <circle r="2.5" fill="#0ea5e9">
              <animateMotion dur="2.7s" begin="0.5s" repeatCount="indefinite" path="M140,250 C190,250 190,300 250,300 C310,300 310,250 450,250" />
            </circle>
            <!-- Phishing keyword being flagged -->
            <circle r="4" fill="#f43f5e">
              <animateMotion dur="1.8s" begin="0.2s" repeatCount="indefinite" path="M140,310 C190,310 190,350 250,350 C350,350 350,400 450,400" />
            </circle>
          </g>

          <!-- SIMILARITY COMPARATOR TO OUTPUT CLASSIFIER -->
          <g fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2">
            <path d="M450,250 C530,250 530,200 620,200" /> <!-- Route to Genuine -->
            <path d="M450,400 C530,400 530,450 620,450" /> <!-- Route to Phishing -->
          </g>

          <g filter="url(#emeraldGlow)">
            <!-- Final Decision Pulse (Threat Detected) -->
            <circle r="3.5" fill="#f43f5e">
              <animateMotion dur="1.5s" begin="1s" repeatCount="indefinite" path="M450,400 C530,400 530,450 620,450" />
            </circle>
          </g>

          <!-- UI NODES -->
          <g>
            <!-- Extraction Nodes -->
            <circle cx="140" cy="250" r="6" fill="#050507" stroke="#10b981" stroke-width="2" />
            <circle cx="140" cy="310" r="6" fill="#050507" stroke="#f43f5e" stroke-width="2" />

            <!-- Tokenization Matrix -->
            <circle cx="250" cy="200" r="12" fill="#050507" stroke="#34d399" stroke-width="2" />
            <circle cx="250" cy="200" r="3" fill="#fff" />
            <circle cx="250" cy="300" r="12" fill="#050507" stroke="#0ea5e9" stroke-width="2" />
            <circle cx="250" cy="300" r="3" fill="#fff" />
            <circle cx="250" cy="350" r="12" fill="#1e1b4b" stroke="#f43f5e" stroke-width="2" filter="url(#emeraldGlow)" />
            <circle cx="250" cy="350" r="3" fill="#fff" />

            <!-- Semantic Comparator Core (Cosine Similarity) -->
            <g transform="translate(450, 250)">
              <circle r="18" fill="#050507" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="6" fill="#34d399" filter="url(#emeraldGlow)" />
            </g>
            
            <g transform="translate(450, 400)">
              <circle r="18" fill="#050507" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 4">
                <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle r="6" fill="#f43f5e" filter="url(#emeraldGlow)" class="animate-pulse" />
            </g>

            <!-- Classification Output Nodes -->
            <!-- Genuine Node -->
            <g transform="translate(620, 200)">
              <rect x="-40" y="-12" width="80" height="24" rx="12" fill="#10b981" opacity="0.1" />
              <rect x="-40" y="-12" width="80" height="24" rx="12" fill="none" stroke="#10b981" stroke-width="1" />
              <circle cx="-25" cy="0" r="4" fill="#34d399" />
            </g>
            
            <!-- Phishing Node (Triggered) -->
            <g transform="translate(620, 450)">
              <rect x="-45" y="-12" width="90" height="24" rx="12" fill="#f43f5e" opacity="0.2" filter="url(#emeraldGlow)"/>
              <rect x="-45" y="-12" width="90" height="24" rx="12" fill="none" stroke="#f43f5e" stroke-width="1.5" />
              <circle cx="-30" cy="0" r="4" fill="#fff" class="animate-ping" />
              <circle cx="-30" cy="0" r="4" fill="#fff" />
            </g>
          </g>
        </svg>
      </div>

      <!-- Top Status Pills -->
      <div class="absolute top-6 left-6 flex flex-col gap-2">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-[10px] font-medium text-neutral-300 tracking-wide uppercase">NLP Engine Active</span>
        </div>
      </div>

      <!-- Live AI Diagnostics Dashboard Overlay -->
      <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 backdrop-blur-xl bg-black/50 border border-white/10 p-5 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        
        <!-- Architecture Readout -->
        <div class="flex flex-col gap-1.5">
           <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-2">
             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
             Current Task
           </span>
           <span class="text-xs font-mono tracking-wider text-white">Semantic Phishing Analysis</span>
        </div>

        <!-- Live Metrics Grid -->
        <div class="grid grid-cols-2 sm:flex gap-6 sm:gap-8">
          <div class="flex flex-col gap-1.5 sm:text-right">
            <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-500">Extracted</span>
            <span class="text-xs font-mono tracking-wider text-white">128 Keywords</span>
          </div>
          <div class="flex flex-col gap-1.5 sm:text-right">
            <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-500">Cosine Sim.</span>
            <span class="text-xs font-mono tracking-wider text-teal-300">0.94 Match</span>
          </div>
          <div class="flex flex-col gap-1.5 sm:text-right col-span-2 sm:col-span-1">
            <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-500">Classification</span>
            <span class="text-xs font-mono tracking-wider text-rose-400 font-bold animate-pulse">THREAT DETECTED</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Right Side: Text Content -->
  <div class="flex-1 order-1 lg:order-2" use:reveal>
    <div class="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-40 mb-10">
      <span>Cheltenham / UK</span>
      <span>•</span>
      <span>July 2022 — March 2024</span>
    </div>
    
    <h2 class="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
      Graduate Research <br/>
      <span class="text-emerald-500">Assistant.</span>
    </h2>

    <div class="space-y-12">
      <div class="group">
        <h3 class="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-3">
          <span class="w-8 h-[1px] bg-emerald-500"></span>
          Primary Research Scope
        </h3>
        <p class="text-2xl md:text-3xl font-light leading-snug text-neutral-800 dark:text-neutral-200">
          Worked with the School of Computing and Engineering in researching, developing and testing <span class="font-medium text-emerald-500">Natural Language Processing (NLP)</span> models. 
        </p>
      </div>

      <!-- Core Output Blockquote -->
      <div class="relative group mt-8">
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-[2.5rem] blur-xl transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
        <div class="relative p-10 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 backdrop-blur-sm">
          <h3 class="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            Core Project Output
          </h3>
          <p class="text-xl md:text-2xl font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
            As part of my research, I built and tested an algorithm to detect phishing using Natural Language Processing. 
            By <span class="font-medium text-emerald-600 dark:text-emerald-400">extracting keywords</span> from an email and comparing them with <span class="font-medium text-emerald-600 dark:text-emerald-400">semantic similarity models</span>, I determined whether an email was genuine or phishing.
          </p>
        </div>
      </div>
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
