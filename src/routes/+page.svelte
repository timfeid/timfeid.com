<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '../lib/components/ui/badge';
	import {
		Card,
		CardHeader,
		CardContent,
		CardTitle,
		CardDescription,
		CardFooter
	} from '../lib/components/ui/card';

	const projects = [
		{
			title: 'Project Alpha',
			description: 'A cutting-edge web application built with React and Node.js',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['React', 'Node.js', 'MongoDB']
		},
		{
			title: 'Beta Mobile App',
			description: 'Cross-platform mobile app developed using React Native',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['React Native', 'Firebase', 'Redux']
		},
		{
			title: 'Gamma Dashboard',
			description: 'Responsive admin dashboard with real-time data visualization',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['Vue.js', 'D3.js', 'Express']
		},
		{
			title: 'Delta E-commerce',
			description: 'Full-stack e-commerce solution with secure payment integration',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['Next.js', 'Stripe', 'PostgreSQL']
		}
	];
</script>

<div class="bg-neutral-900 py-3">
	<main class="container mx-auto px-3">
		<h1 class="mb-8 text-center text-4xl font-bold">My Portfolio</h1>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each projects as project}
				<Card class="overflow-hidden">
					<CardHeader class="p-0">
						<img
							src={project.image || '/placeholder.svg'}
							alt={project.title}
							width={600}
							height={400}
							class="h-48 w-full object-cover"
						/>
					</CardHeader>
					<CardContent class="p-4">
						<CardTitle>{project.title}</CardTitle>
						<CardDescription>{project.description}</CardDescription>
					</CardContent>
					<CardFooter class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<Badge variant="secondary">
								{tag}
							</Badge>
						{/each}
					</CardFooter>
				</Card>
			{/each}
		</div>
	</main>
</div>
