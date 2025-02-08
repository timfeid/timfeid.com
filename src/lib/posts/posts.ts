import type { Snippet } from 'svelte';
import { z } from 'zod';

const postModules = import.meta.glob('./content/**/*.svx');
const postSchema = z.object({
	metadata: z.object({
		description: z.string(),
		category: z.string(),
		tags: z.array(z.string()),
		date: z.number(),
		image: z.string(),
		title: z.string(),
	}),
});

export type ValidPost = ReturnType<(typeof postSchema)['parse']>;

export type Post = ValidPost & { slug: string; title?: string };

function isValidPost(post: unknown): post is Post {
	try {
		postSchema.parse(post);
		return true;
	} catch (e) {
		console.error(e);
	}

	return false;
}

export const postComponents = new Map<string, Snippet>();
const posts = new Map<string, Post>();
for (const modulePath in postModules) {
	const post = await postModules[modulePath]();
	if (isValidPost(post)) {
		const slug = modulePath.substring(10, modulePath.length - 4);

		posts.set(slug, {
			metadata: post.metadata,
			// cannot pass round "post.default", but this is out component.
			slug,
		} as Post);
	}
}

export { posts };
