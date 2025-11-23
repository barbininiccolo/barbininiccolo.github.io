<script>
  import "../app.css";
</script>

<div class="min-h-screen flex flex-col bg-base-100 text-base-content">
  <div class="navbar bg-base-200 shadow-sm">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">SeniorDev</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/">About</a></li>
        <li><a href="/cv">CV</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
  </div>

  <main class="flex-grow container mx-auto p-4">
    <slot />
  </main>

  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p>Copyright © 2024 - Your Name</p>
    </aside>
  </footer>
</div>