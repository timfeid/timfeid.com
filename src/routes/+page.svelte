<script lang="ts">
	import Github from '$lib/components/app/project/github.svg?component';
	import Linkedin from '$lib/components/app/linkedin.svg?component';
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
	import * as Tooltip from '../lib/components/ui/tooltip';
	import { Portal } from 'bits-ui';

	let { data } = $props();
</script>

<Page>
	<div class="flex w-full flex-col">
		<section id="about" class="flex w-full bg-zinc-800 py-12 md:py-24 lg:py-32">
			<div class="container mx-auto px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h1
							class="text-3xl leading-none font-bold tracking-tighter uppercase sm:text-4xl md:text-5xl lg:text-5xl/none"
						>
							Full Stack Developer
						</h1>
						<p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
							Technically proficient, open minded web developer who is eager to improve the web
							browsing experience with faster load times and an interactive, user-centered design.
						</p>
					</div>
					<div class="space-x-4">
						<Tooltip.Provider disableHoverableContent delayDuration={350}>
							<Tooltip.Root>
								<Tooltip.Trigger>
									<Button
										class="bg-zinc-900/50 hover:bg-zinc-950"
										href="https://github.com/timfeid"
										variant="outline"
										size="icon"
									>
										<Github fill="currentColor" class="h-4 w-4" />
										<span class="sr-only">GitHub</span>
									</Button>
								</Tooltip.Trigger>
								<Portal>
									<Tooltip.Content>GitHub</Tooltip.Content>
								</Portal>
							</Tooltip.Root>
						</Tooltip.Provider>
						<Tooltip.Provider disableHoverableContent delayDuration={350}>
							<Tooltip.Root>
								<Tooltip.Trigger>
									<Button
										class="bg-zinc-900/50 hover:bg-zinc-950"
										href="https://www.linkedin.com/in/tim-feid-38000327/"
										variant="outline"
										size="icon"
									>
										<Linkedin fill="currentColor" class="h-4 w-4" />
										<span class="sr-only">Linkedin</span>
									</Button>
								</Tooltip.Trigger>
								<Portal>
									<Tooltip.Content>Linkedin</Tooltip.Content>
								</Portal>
							</Tooltip.Root>
						</Tooltip.Provider>
					</div>
				</div>
			</div>
		</section>

		<section class="container mx-auto flex w-full flex-col py-8">
			<h1 class="mb-3 text-xl">Projects</h1>
			<div class="xmd:grid-cols-2 grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
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
								<CardDescription
									class="text-neutral-400 transition group-hover/post:text-neutral-300"
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
		</section>
	</div>
</Page>
