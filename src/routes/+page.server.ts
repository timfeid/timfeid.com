import { posts } from '../lib/posts/posts';

export const prerender = true;

export async function load() {
	const sorted = Array.from(posts.values()).sort((a, b) =>
		a.metadata.date > b.metadata.date ? -1 : 1,
	);

	return { posts: sorted };
}
