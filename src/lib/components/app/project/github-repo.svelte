<script lang="ts">
	import { cn } from '../../../utils';
	import Github from './github.svg?component';
	let { link, repo, class: className } = $props();
</script>

<a href={link} class={cn('flex w-min space-x-2 whitespace-nowrap', className)}>
	<Github class="h-6 w-6 text-white" fill="currentColor" />
	<div>{repo}</div>
</a>
