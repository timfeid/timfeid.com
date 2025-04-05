<script lang="ts">
	import Right from '$lib/components/app/right.svg?component';
	import Page from '../lib/components/app/page.svelte';
	import GithubRepo from '../lib/components/app/project/github-repo.svelte';
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

	const PROJECT_CATEGORY = 'Projects';

	let { data } = $props();
	let { projects, blogPosts } = $derived.by(() => {
		const projects = [];
		const blogPosts = [];

		for (const post of data.posts) {
			if (post.metadata.category === PROJECT_CATEGORY) {
				projects.push(post);
				continue;
			}
			blogPosts.push(post);
		}

		return { projects, blogPosts };
	});

	function formatDate(unixTimestamp: number): string {
		const now = Date.now();
		const diffMs = now - unixTimestamp * 1000;
		const msPerDay = 1000 * 60 * 60 * 24;
		const days = Math.floor(diffMs / msPerDay);

		if (days === 0) {
			return 'Today';
		}

		if (days < 30) {
			return `${days} day${days === 1 ? '' : 's'} ago`;
		}

		const months = Math.floor(days / 30);
		return `${months} month${months === 1 ? '' : 's'} ago`;
	}
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
				{#each projects as post}
					{@render postCard(post)}
				{/each}
			</div>
		</section>

		<section
			id="game"
			class="container mx-auto flex min-h-screen w-full flex-col justify-center px-6 py-8 md:px-4"
		>
			<h1 class="mb-1 text-center text-3xl font-bold uppercase">Updates</h1>
			<div class="my-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
				{#each blogPosts as post}
					{@render postCard(post)}
				{/each}
			</div>
			<GithubRepo
				class="mb-1 self-center"
				link="https://github.com/timfeid/hmmm"
				repo="timfeid/hmmm"
			/>
			<p class="text-center text-sm text-neutral-500 italic">name still in progress</p>
		</section>
	</div>
</Page>

{#snippet postCard(post: any)}
	<a
		href="/posts/{post.slug}"
		class="group/post inline-block transition hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] dark:hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.05)]"
	>
		<Card class="flex h-full flex-col overflow-hidden group-hover/post:border-neutral-700">
			<CardHeader class="relative p-0">
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
			<CardFooter class="mt-auto flex-col items-start p-3">
				<div class="text-xs font-light text-neutral-500">
					{formatDate(post.metadata.date)}
				</div>
				<div class="flex flex-wrap gap-2 pt-2">
					{#each post.metadata.tags as tag}
						<Badge variant="default">
							{tag}
						</Badge>
					{/each}
				</div>
			</CardFooter>
		</Card>
	</a>
{/snippet}
