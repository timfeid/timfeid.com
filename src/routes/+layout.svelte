<script lang="ts">
	import Linkedin from '$lib/components/app/linkedin.svg?component';
	import Github from '$lib/components/app/project/github.svg?component';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import hljs from 'highlight.js/lib/core';
	import rust from 'highlight.js/lib/languages/rust';
	import typescript from 'highlight.js/lib/languages/typescript';
	import '../app.css';
	import 'highlight.js/styles/github-dark.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { Portal } from 'bits-ui';
	import bash from 'highlight.js/lib/languages/bash';

	hljs.registerLanguage('ts', typescript);
	hljs.registerLanguage('rust', rust);
	// hljs.registerLanguage('svelte', svelte);
	hljs.registerLanguage('bash', bash);

	injectSpeedInsights();
	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="relative flex min-h-screen w-full flex-col">
	<header
		class="sticky top-0 z-40 flex h-12 items-center border-b border-neutral-100/10 bg-linear-to-r from-neutral-950/50 to-neutral-800/50 backdrop-blur"
	>
		<div class="container mx-auto flex px-4 lg:px-2">
			<Button
				size="sm"
				variant="ghost"
				href="/"
				class="text-base hover:bg-transparent hover:underline"
			>
				<img src="/favicon.png" alt="timfeid.com" class="h-6 w-6" />
				<!-- <Home class="mr-2 h-4 w-4" /> -->
				<div class="ml-2">timfeid.com</div>
			</Button>
			<div class="ml-auto">
				<Tooltip.Provider disableHoverableContent delayDuration={350}>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<Button
								class="bg-zinc-900/50 hover:bg-zinc-950"
								href="https://github.com/timfeid"
								variant="ghost"
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
								variant="ghost"
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
	</header>

	<main class="flex w-full flex-grow">
		{@render children()}
	</main>

	<footer class="flex min-h-[3rem] w-full items-center font-mono font-mono text-xs">
		<div class="container mx-auto px-4 text-center">
			&copy; {new Date().getFullYear()} timfeid.com
		</div>
	</footer>

	<div class="pointer-events-none fixed inset-0 -z-10">
		<div
			class="from-background via-background/90 to-background absolute inset-0 bg-gradient-to-b"
		></div>
		<div class="absolute top-0 right-0 h-[500px] w-[500px] bg-zinc-500/10 blur-[100px]"></div>
		<div class="absolute bottom-0 left-0 h-[500px] w-[500px] bg-sky-200/10 blur-[100px]"></div>
	</div>
</div>
