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
          Cybersecurity Consultant
        </h3>
        <p class="text-xl md:text-2xl font-light leading-snug">
          Formulating security policies.
        </p>
      </div>
    </div>
  </div>
 
<!-- Right Side: Advanced "Deep Autoencoder" Visual -->
  <div class="flex-1 w-full aspect-[4/5] lg:aspect-square relative order-1 lg:order-2" use:reveal>
    <!-- Premium Dark Glass Canvas -->
    <div class="absolute inset-0 bg-[#050507] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl" use:tilt>
        
      <!-- Micro-Grid Background -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_45%,transparent_100%)]"></div>

      <!-- Deep Ambient Latent Glow -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-4/5 h-4/5 bg-[radial-gradient(circle_at_center,#3b82f640_0%,#6366f115_50%,transparent_80%)] blur-[100px] rounded-full"></div>
      </div>

      <!-- Scaled & Perfectly Spaced Hero Graphic -->
      <div class="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <!-- Shifted viewBox slightly (y=-20) to accommodate the higher text -->
        <svg viewBox="0 -20 700 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          <defs>
            <linearGradient id="forwardFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.1" />
              <stop offset="50%" stop-color="#818cf8" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#c084fc" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient id="skipConnection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0" />
              <stop offset="50%" stop-color="#0ea5e9" stop-opacity="0.7" />
              <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0" />
            </linearGradient>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur1" />
              <feGaussianBlur stdDeviation="10" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <!-- Layer Identifiers (Moved upward to y=20) -->
          <g font-family="monospace" font-size="18" font-weight="bold" text-transform="uppercase" letter-spacing="2" fill="#e5e7eb">
            <text x="50" y="20" text-anchor="middle">Input</text>
            <text x="200" y="20" text-anchor="middle">Encoder</text>
            <text x="350" y="20" text-anchor="middle" fill="#60a5fa" font-size="20">Latent Space</text>
            <text x="500" y="20" text-anchor="middle">Decoder</text>
            <text x="650" y="20" text-anchor="middle">Output</text>
          </g>

          <!-- RESIDUAL (SKIP) CONNECTIONS -->
          <g fill="none" stroke="url(#skipConnection)" stroke-width="2.5" stroke-dasharray="8 8">
            <path d="M 200,150 C 350,20 350,20 500,150"><animate attributeName="stroke-dashoffset" from="32" to="0" dur="1s" repeatCount="indefinite" /></path>
            <path d="M 200,450 C 350,580 350,580 500,450"><animate attributeName="stroke-dashoffset" from="32" to="0" dur="1s" repeatCount="indefinite" /></path>
          </g>

          <!-- VISIBLE OUTER SYNAPSES (Input -> Encoder) -->
          <g fill="none" stroke="#3b82f6" stroke-opacity="0.35" stroke-width="2">
            <path d="M50,150 C125,150 125,150 200,150 M50,150 C125,150 125,250 200,250 M50,150 C125,150 125,350 200,350 M50,150 C125,150 125,450 200,450" />
            <path d="M50,225 C125,225 125,150 200,150 M50,225 C125,225 125,250 200,250 M50,225 C125,225 125,350 200,350 M50,225 C125,225 125,450 200,450" />
            <path d="M50,300 C125,300 125,150 200,150 M50,300 C125,300 125,250 200,250 M50,300 C125,300 125,350 200,350 M50,300 C125,300 125,450 200,450" />
            <path d="M50,375 C125,375 125,150 200,150 M50,375 C125,375 125,250 200,250 M50,375 C125,375 125,350 200,350 M50,375 C125,375 125,450 200,450" />
            <path d="M50,450 C125,450 125,150 200,150 M50,450 C125,450 125,250 200,250 M50,450 C125,450 125,350 200,350 M50,450 C125,450 125,450 200,450" />
          </g>

          <!-- VISIBLE OUTER SYNAPSES (Decoder -> Output) -->
          <g fill="none" stroke="#a855f7" stroke-opacity="0.35" stroke-width="2">
            <path d="M500,150 C575,150 575,150 650,150 M500,150 C575,150 575,225 650,225 M500,150 C575,150 575,300 650,300 M500,150 C575,150 575,375 650,375 M500,150 C575,150 575,450 650,450" />
            <path d="M500,250 C575,250 575,150 650,150 M500,250 C575,250 575,225 650,225 M500,250 C575,250 575,300 650,300 M500,250 C575,250 575,375 650,375 M500,250 C575,250 575,450 650,450" />
            <path d="M500,350 C575,350 575,150 650,150 M500,350 C575,350 575,225 650,225 M500,350 C575,350 575,300 650,300 M500,350 C575,350 575,375 650,375 M500,350 C575,350 575,450 650,450" />
            <path d="M500,450 C575,450 575,150 650,150 M500,450 C575,450 575,225 650,225 M500,450 C575,450 575,300 650,300 M500,450 C575,450 575,375 650,375 M500,450 C575,450 575,450 650,450" />
          </g>

          <!-- ACTIVE FORWARD FLOW (Thickened Core Flow) -->
          <g fill="none" stroke="url(#forwardFlow)" stroke-width="3.5" stroke-dasharray="12 24" stroke-linecap="round">
            <animate attributeName="stroke-dashoffset" from="72" to="0" dur="1.5s" repeatCount="indefinite" />
            <path d="M200,150 C275,150 275,300 350,300" opacity="0.8" />
            <path d="M200,250 C275,250 275,280 350,300" opacity="0.6" />
            <path d="M200,350 C275,350 275,320 350,300" opacity="0.9" />
            <path d="M200,450 C275,450 275,300 350,300" opacity="0.7" />
            <path d="M350,300 C425,300 425,150 500,150" opacity="0.8" />
            <path d="M350,300 C425,300 425,250 500,250" opacity="0.6" />
            <path d="M350,300 C425,300 425,350 500,350" opacity="0.9" />
            <path d="M350,300 C425,300 425,450 500,450" opacity="0.7" />
          </g>

          <!-- OUTER DATA PULSES (To show activity on the edges) -->
          <g filter="url(#neonGlow)">
            <!-- Input to Encoder Pulses -->
            <circle r="4" fill="#60a5fa"><animateMotion dur="1.2s" begin="0.1s" repeatCount="indefinite" path="M50,225 C125,225 125,150 200,150" /></circle>
            <circle r="3" fill="#3b82f6"><animateMotion dur="1.5s" begin="0.4s" repeatCount="indefinite" path="M50,375 C125,375 125,350 200,350" /></circle>
            <!-- Decoder to Output Pulses -->
            <circle r="4" fill="#c084fc"><animateMotion dur="1.3s" begin="0.2s" repeatCount="indefinite" path="M500,250 C575,250 575,300 650,300" /></circle>
            <circle r="3" fill="#a855f7"><animateMotion dur="1.4s" begin="0.5s" repeatCount="indefinite" path="M500,450 C575,450 575,450 650,450" /></circle>
          </g>

          <!-- BACKPROPAGATION GRADIENTS -->
          <g filter="url(#neonGlow)">
            <circle r="4" fill="#f43f5e"><animateMotion dur="2.1s" begin="0s" repeatCount="indefinite" path="M650,225 C575,225 575,250 500,250" /></circle>
            <circle r="5" fill="#fb923c"><animateMotion dur="1.8s" begin="-0.5s" repeatCount="indefinite" path="M500,350 C425,350 425,300 350,300" /></circle>
            <circle r="4" fill="#f43f5e"><animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M350,300 C275,300 275,250 200,250" /></circle>
            <circle r="3.5" fill="#fb923c"><animateMotion dur="1.9s" begin="-0.8s" repeatCount="indefinite" path="M200,150 C125,150 125,225 50,225" /></circle>
          </g>

          <!-- THE LATENT SPACE CORE (Scaled up by 30% via transform) -->
          <g transform="translate(350, 300) scale(1.3)">
            <circle r="45" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="6 10" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" /></circle>
            <path d="M0,-30 L26,-15 L26,15 L0,30 L-26,15 L-26,-15 Z" fill="none" stroke="#818cf8" stroke-width="2" opacity="0.7"><animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="15s" repeatCount="indefinite" /></path>
            <path d="M0,-20 L17,-10 L17,10 L0,20 L-17,10 L-17,-10 Z" fill="none" stroke="#c084fc" stroke-width="2.5" opacity="0.9"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" /></path>
            <!-- Thicker Inner Points -->
            <circle cx="-10" cy="-10" r="2.5" fill="#fff" class="animate-pulse" />
            <circle cx="12" cy="-5" r="3" fill="#fff" class="animate-ping" />
            <circle cx="-5" cy="15" r="2.5" fill="#fff" />
            <circle cx="10" cy="10" r="2.5" fill="#fff" class="animate-pulse" />
            <!-- Thicker Bright Core -->
            <circle r="10" fill="#ffffff" filter="url(#neonGlow)" />
            <circle r="20" fill="#6366f1" opacity="0.4" filter="url(#neonGlow)" class="animate-pulse" />
          </g>

          <!-- NEURAL NODES (Scaled up massively) -->
          <g>
            <g fill="#050507" stroke="#3b82f6" stroke-width="2.5">
              <circle cx="50" cy="150" r="12" /><circle cx="50" cy="150" r="4" fill="#fff" stroke="none" />
              <circle cx="50" cy="225" r="12" /><circle cx="50" cy="225" r="4" fill="#fff" stroke="none" />
              <circle cx="50" cy="300" r="12" /><circle cx="50" cy="300" r="4" fill="#fff" stroke="none" class="animate-pulse" />
              <circle cx="50" cy="375" r="12" /><circle cx="50" cy="375" r="4" fill="#fff" stroke="none" />
              <circle cx="50" cy="450" r="12" /><circle cx="50" cy="450" r="4" fill="#fff" stroke="none" />
            </g>
            <g fill="#050507" stroke="#6366f1" stroke-width="3">
              <circle cx="200" cy="150" r="15" /><circle cx="200" cy="150" r="5" fill="#818cf8" stroke="none" />
              <circle cx="200" cy="250" r="15" filter="url(#neonGlow)" /><circle cx="200" cy="250" r="6" fill="#fff" stroke="none" />
              <circle cx="200" cy="350" r="15" filter="url(#neonGlow)" /><circle cx="200" cy="350" r="6" fill="#fff" stroke="none" />
              <circle cx="200" cy="450" r="15" /><circle cx="200" cy="450" r="5" fill="#818cf8" stroke="none" />
            </g>
            <g fill="#050507" stroke="#a855f7" stroke-width="3">
              <circle cx="500" cy="150" r="15" /><circle cx="500" cy="150" r="5" fill="#c084fc" stroke="none" />
              <circle cx="500" cy="250" r="15" filter="url(#neonGlow)" /><circle cx="500" cy="250" r="6" fill="#fff" stroke="none" />
              <circle cx="500" cy="350" r="15" filter="url(#neonGlow)" /><circle cx="500" cy="350" r="6" fill="#fff" stroke="none" />
              <circle cx="500" cy="450" r="15" /><circle cx="500" cy="450" r="5" fill="#c084fc" stroke="none" />
            </g>
            <g fill="#050507" stroke="#8b5cf6" stroke-width="2.5">
              <circle cx="650" cy="150" r="12" /><circle cx="650" cy="150" r="4" fill="#fff" stroke="none" />
              <circle cx="650" cy="225" r="12" /><circle cx="650" cy="225" r="4" fill="#fff" stroke="none" />
              <circle cx="650" cy="300" r="12" /><circle cx="650" cy="300" r="4" fill="#fff" stroke="none" class="animate-pulse" />
              <circle cx="650" cy="375" r="12" /><circle cx="650" cy="375" r="4" fill="#fff" stroke="none" />
              <circle cx="650" cy="450" r="12" /><circle cx="650" cy="450" r="4" fill="#fff" stroke="none" />
            </g>
          </g>
        </svg>
      </div>

      <!-- Floating Status Pill -->
      <div class="absolute top-6 lg:top-8 left-6 lg:left-8 z-10">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#050507]/60 border border-white/20 backdrop-blur-xl shadow-xl">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span class="text-xs sm:text-sm font-bold text-white tracking-widest uppercase">Neural Net</span>
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
    <div class="absolute inset-0 bg-[#050507] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl" use:tilt>
        
      <!-- Micro-Grid Background -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_45%,transparent_100%)]"></div>

      <!-- Deep Ambient NLP Glow (Emerald to Teal) -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-4/5 h-4/5 bg-[radial-gradient(circle_at_center,#10b98135_0%,#0d948810_50%,transparent_80%)] blur-[100px] rounded-full"></div>
      </div>

      <!-- Scaled & Balanced Hero Graphic -->
      <div class="absolute inset-0 flex items-center justify-center p-6 md:p-10 lg:p-14">
        <!-- Re-framed for UI Harmony with the Autoencoder section -->
        <svg viewBox="0 0 720 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <defs>
            <linearGradient id="nlpFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.1" />
              <stop offset="50%" stop-color="#34d399" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient id="threatFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#fb923c" stop-opacity="0.1" />
            </linearGradient>
            <filter id="emeraldGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur1" />
              <feGaussianBlur stdDeviation="10" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <!-- Layer Identifiers (Harmonized with Autoencoder Section) -->
          <g font-family="monospace" font-size="20" font-weight="bold" text-transform="uppercase" letter-spacing="2" fill="#e5e7eb">
            <text x="80" y="50" text-anchor="middle">Input Text</text>
            <text x="250" y="50" text-anchor="middle">Tokenization</text>
            <text x="450" y="50" text-anchor="middle" fill="#34d399" font-size="22">Comparator</text>
            <text x="620" y="50" text-anchor="middle">Decision</text>
          </g>

          <!-- RAW TEXT SCANNER (Left Side) -->
          <g transform="translate(40, 150)">
            <rect x="0" y="0" width="80" height="6" rx="3" fill="#ffffff" opacity="0.15" />
            <rect x="0" y="24" width="60" height="6" rx="3" fill="#ffffff" opacity="0.15" />
            <rect x="0" y="48" width="90" height="6" rx="3" fill="#ffffff" opacity="0.15" />
            
            <rect x="0" y="96" width="70" height="6" rx="3" fill="#ffffff" opacity="0.15" />
            <rect x="0" y="120" width="85" height="6" rx="3" fill="#10b981" opacity="0.5" /> 
            <rect x="0" y="144" width="50" height="6" rx="3" fill="#ffffff" opacity="0.15" />
            
            <rect x="0" y="192" width="95" height="6" rx="3" fill="#f43f5e" opacity="0.5" /> 
            <rect x="0" y="216" width="65" height="6" rx="3" fill="#ffffff" opacity="0.15" />
            <rect x="0" y="240" width="80" height="6" rx="3" fill="#ffffff" opacity="0.15" />

            <!-- Scanning Laser -->
            <rect x="-10" y="0" width="110" height="2" fill="#34d399" filter="url(#emeraldGlow)">
              <animate attributeName="y" values="0;250;0" dur="4s" repeatCount="indefinite" />
            </rect>
          </g>

          <!-- BASE NLP PATHS (Refined Weights) -->
          <g fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1.5">
            <path d="M140,250 C190,250 190,200 250,200 M250,200 C310,200 310,250 450,250" />
            <path d="M140,250 C190,250 190,300 250,300 M250,300 C310,300 310,250 450,250" />
            <path d="M140,310 C190,310 190,350 250,350 M250,350 C350,350 350,400 450,400" />
          </g>

          <!-- ACTIVE SEMANTIC DATA FLOW -->
          <g fill="none" stroke="url(#nlpFlow)" stroke-width="2.5" stroke-dasharray="10 20" stroke-linecap="round">
            <animate attributeName="stroke-dashoffset" from="60" to="0" dur="1.2s" repeatCount="indefinite" />
            <path d="M140,250 C190,250 190,200 250,200 C310,200 310,250 450,250" />
          </g>
          
          <!-- THREAT DETECTION FLOW (Rose/Red) -->
          <g fill="none" stroke="url(#threatFlow)" stroke-width="3" stroke-dasharray="12 24" stroke-linecap="round" filter="url(#emeraldGlow)">
            <animate attributeName="stroke-dashoffset" from="72" to="0" dur="1s" repeatCount="indefinite" />
            <path d="M140,310 C190,310 190,350 250,350 C350,350 350,400 450,400" />
          </g>

          <!-- MOVING DATA PACKETS -->
          <g filter="url(#emeraldGlow)">
            <circle r="4" fill="#34d399">
              <animateMotion dur="2.3s" repeatCount="indefinite" path="M140,250 C190,250 190,200 250,200 C310,200 310,250 450,250" />
            </circle>
            <circle r="5" fill="#f43f5e">
              <animateMotion dur="1.8s" begin="0.2s" repeatCount="indefinite" path="M140,310 C190,310 190,350 250,350 C350,350 350,400 450,400" />
            </circle>
          </g>

          <!-- FINAL DECISION PATHS -->
          <g fill="none" stroke="#ffffff" stroke-opacity="0.15" stroke-width="2">
            <path d="M450,250 C530,250 530,200 620,200" /> 
            <path d="M450,400 C530,400 530,450 620,450" /> 
          </g>

          <!-- HARMONIZED NODES -->
          <g>
            <circle cx="140" cy="250" r="10" fill="#050507" stroke="#10b981" stroke-width="2.5" />
            <circle cx="140" cy="310" r="10" fill="#050507" stroke="#f43f5e" stroke-width="2.5" />

            <circle cx="250" cy="200" r="15" fill="#050507" stroke="#34d399" stroke-width="3" />
            <circle cx="250" cy="300" r="15" fill="#050507" stroke="#0ea5e9" stroke-width="3" />
            <circle cx="250" cy="350" r="15" fill="#1e1b4b" stroke="#f43f5e" stroke-width="3" filter="url(#emeraldGlow)" />

            <!-- Comparator Cores -->
            <g transform="translate(450, 250)">
              <circle r="22" fill="#050507" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="7" fill="#34d399" filter="url(#emeraldGlow)" />
            </g>
            <g transform="translate(450, 400)">
              <circle r="22" fill="#050507" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 4">
                <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle r="7" fill="#f43f5e" filter="url(#emeraldGlow)" class="animate-pulse" />
            </g>

            <!-- Classification Badges -->
            <g transform="translate(620, 200)">
              <rect x="-45" y="-14" width="90" height="28" rx="14" fill="#10b981" opacity="0.15" />
              <rect x="-45" y="-14" width="90" height="28" rx="14" fill="none" stroke="#10b981" stroke-width="2" />
              <circle cx="-30" cy="0" r="5" fill="#34d399" />
            </g>
            <g transform="translate(620, 450)">
              <rect x="-45" y="-14" width="90" height="28" rx="14" fill="#f43f5e" opacity="0.25" filter="url(#emeraldGlow)"/>
              <rect x="-45" y="-14" width="90" height="28" rx="14" fill="none" stroke="#f43f5e" stroke-width="2.5" />
              <circle cx="-30" cy="0" r="5" fill="#fff" class="animate-ping" />
              <circle cx="-30" cy="0" r="5" fill="#fff" />
            </g>
          </g>
        </svg>
      </div>

      <!-- Consistent Status Pill -->
      <div class="absolute top-6 lg:top-8 left-6 lg:left-8 z-10">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#050507]/60 border border-white/10 backdrop-blur-xl shadow-xl">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span class="text-xs sm:text-sm font-bold text-white tracking-widest uppercase">NLP Engine</span>
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
    <h2 class="text-6xl md:text-8xl font-bold tracking-tighter mb-4">Internships.</h2>
    <p class="text-3xl opacity-40 font-light">Exploring different areas of the IT world. From simple technical support to phishing campaign awareness.</p>
  </div>

  <!-- Row 1: Maggies 2019 -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 border-b border-white/5 items-start" use:reveal>
    <div class="lg:col-span-4">
      <h3 class="text-3xl font-bold tracking-tight mb-2">IT Support Technician</h3>
      <p class="text-sm font-bold opacity-30 uppercase tracking-[0.2em]">Maggie's / Glasgow / 2019</p>
    </div>
    <div class="lg:col-span-8">
      <p class="text-2xl md:text-3xl font-light opacity-60 leading-snug">
        Worked with the IT department in developing and studying phishing campaigns against the company for employees training. The principal software utilised during this internship was <span class="text-blue-400 font-medium">Microsoft Azure</span>.
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
        Worked with the IT team for a <span class="text-black font-medium">data analysis project</span> with the aim of analysing UK postal codes and customers origins. The main software suit used during this internship was Microsoft Power BI.
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
