<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PageContent from '../lib/components/app/page-content.svelte';
	import Page from '../lib/components/app/page.svelte';
	import { Badge } from '../lib/components/ui/badge';
	import {
		Card,
		CardHeader,
		CardContent,
		CardTitle,
		CardDescription,
		CardFooter,
	} from '../lib/components/ui/card';

	let { data } = $props();
</script>

<Page>
	<PageContent class="h-min">
		<h1 class="mb-3 text-xl">Projects</h1>
		<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
			{#each data.posts as post}
				<a
					href="/posts/{post.slug}"
					class="group/post inline-block transition hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] dark:hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.05)]"
				>
					<Card class="flex h-full flex-col overflow-hidden group-hover/post:border-neutral-700">
						<CardHeader class="p-0">
							<img
								src={post.metadata.image || '/placeholder.svg'}
								alt={post.metadata.title}
								class="aspect-video h-48 w-full object-cover"
							/>
						</CardHeader>
						<CardContent class="p-3">
							<CardTitle>{post.metadata.title}</CardTitle>
							<CardDescription class="text-neutral-400 transition group-hover/post:text-neutral-300"
								>{post.metadata.description}</CardDescription
							>
						</CardContent>
						<CardFooter class="mt-auto flex flex-wrap gap-2 p-3">
							{#each post.metadata.tags as tag}
								<Badge variant="default">
									{tag}
								</Badge>
							{/each}
						</CardFooter>
					</Card>
				</a>
			{/each}
		</div>
	</PageContent>
</Page>
