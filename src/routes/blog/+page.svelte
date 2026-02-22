<script lang="ts">
  export let data;
</script>

<h1 class="text-3xl font-bold mb-6 text-base-content">My Thoughts</h1>

<div class="grid gap-4">
  {#each data.posts as post}
    <a 
      href="/blog/{post.slug}" 
      class="card bg-base-100 border border-base-300 hover:bg-base-200 hover:border-base-content/20 transition duration-300 shadow-sm text-base-content group"
    >
      <div class="card-body p-6">
        <!-- Added group-hover to color the title slightly on hover -->
        <h2 class="card-title text-xl font-bold group-hover:opacity-80 transition-opacity">
          {post.title}
        </h2>
        
        <!-- Date: Used opacity-60 instead of a fixed gray color -->
        <p class="text-xs uppercase tracking-wider opacity-60 font-medium mt-1">
          {post.date}
        </p>
        
        <!-- Description: standard text with slight transparency for hierarchy -->
        <p class="mt-2 opacity-80 leading-relaxed">
          {post.description}
        </p>
      </div>
    </a>
  {/each}
</div>