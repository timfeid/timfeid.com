<script lang="ts">
	import Right from '$lib/components/app/right.svg?component';
	import Page from '../lib/components/app/page.svelte';
	import { Badge } from '../lib/components/ui/badge';
	import Button from '../lib/components/ui/button/button.svelte';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from '../lib/components/ui/card';

	let { data } = $props();
</script>

<Page description="A full stack developer, not designer">
	<div class="flex w-full flex-col">
		<section id="about" class="flex min-h-screen w-full items-center">
			<div class="container mx-auto px-6 md:px-4">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-6">
						<h1
							class="text-3xl font-bold tracking-tight uppercase sm:text-4xl md:text-5xl lg:text-5xl/none"
						>
							Full Stack Developer.<br /><span class="text-neutral-500">Not a designer.</span>
						</h1>
						<p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
							Technically proficient, open minded web developer who is eager to improve the web
							browsing experience with faster load times and an interactive, user-centered design.
						</p>
						<div class="space-x-2">
							<Button href="#projects">View Projects <Right /></Button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section
			id="projects"
			class="container mx-auto flex min-h-screen w-full flex-col justify-center px-6 py-8 md:px-4"
		>
			<h1 class="mb-3 mb-6 text-center text-3xl font-bold uppercase">Projects</h1>
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
