<script lang="ts">
    export let data;
  </script>
  
  <h1 class="text-3xl font-bold mb-6">My Thoughts</h1>
  
  <div class="grid gap-4">
    {#each data.posts as post}
      <a href="/blog/{post.slug}" class="card bg-base-200 hover:bg-base-300 transition">
        <div class="card-body">
          <h2 class="card-title">{post.title}</h2>
          <p class="text-sm opacity-70">{post.date}</p>
          <p>{post.description}</p>
        </div>
      </a>
    {/each}
  </div>