<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '../../utils';

	let { class: className = '', children }: { children: Snippet; class?: string } = $props();
</script>

<div class={cn('container mx-auto flex flex-col px-3 py-6', className)}>
	{@render children()}
</div>
