<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<!-- This container centers the blog post and styles the markdown content -->
<article class="prose dark:prose-invert lg:prose-xl mx-auto py-10 px-4">
	<h1 class="mb-2">{data.meta.title}</h1>
	<p class="text-gray-500 mb-10">{data.meta.date}</p>
	
	<!-- This component renders the actual markdown content -->
	<svelte:component this={data.content} />
</article>