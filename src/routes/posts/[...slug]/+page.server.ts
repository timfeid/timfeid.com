import { posts } from '$lib/posts/posts.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
	const { slug } = params;
	const post = posts.get(slug);
	if (!post) {
		throw error(404);
	}
	const { metadata } = post;
	return {
		metadata,
		slug,
	};
}

export async function entries() {
	return Array.from(posts.keys()).map((slug) => ({ slug }));
}
