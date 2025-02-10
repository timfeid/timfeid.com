<script lang="ts">
	import '../app.css';
	import Home from '$lib/components/app/home.svg?component';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

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

<div class="flex min-h-screen w-full flex-col">
	<header class="flex h-12 items-center bg-zinc-900">
		<div class="container mx-auto flex px-4 lg:px-2">
			<a
				class="flex h-full items-center px-2 text-gray-600 underline-offset-[3px] hover:text-gray-800 hover:underline dark:text-gray-300 dark:hover:text-gray-100"
				href="/"
			>
				<Home class="mr-2 h-4 w-4" />
				<div>timfeid</div>
			</a>
		</div>
	</header>

	<main class="flex w-full flex-grow">
		{@render children()}
	</main>

	<footer
		class="sticky bottom-0 flex min-h-[3rem] w-full items-center justify-center bg-neutral-800 font-mono"
	>
		&copy; {new Date().getFullYear()} timfeid.com
	</footer>
</div>
