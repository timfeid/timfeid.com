<script lang="ts">
	import Github from './github.svg?component';
	let { link, repo } = $props();
</script>

<a href={link} class="flex w-min space-x-2">
	<Github class="h-6 w-6 text-white" fill="currentColor" />
	<div>{repo}</div>
</a>
