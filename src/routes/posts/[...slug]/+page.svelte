<script lang="ts">
	import PageContent from '$lib/components/app/page-content.svelte';
	import Page from '$lib/components/app/page.svelte';
	import type { ComponentType } from 'svelte';

	let PostComponent: ComponentType | undefined = $state(undefined);

	let { data } = $props();
	import(`$lib/posts/content/${data.slug}.svx`).then((post) => {
		PostComponent = post.default;
	});
</script>

<Page
	title={data.metadata.title}
	description={data.metadata.description}
	image={data.metadata.image}
>
	<PageContent>
		<div class="prose prose-zinc dark:prose-invert mx-auto">
			{#if PostComponent}
				<PostComponent />
			{/if}
		</div>
		<!-- <pre>{JSON.stringify(data, null, 4)}</pre> -->
	</PageContent>
</Page>
