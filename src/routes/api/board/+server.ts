import { json } from '@sveltejs/kit';
import { Post } from '$lib/server/models/post';
import type { IPost } from '$lib/types/post';

export const GET = async ({ request }) => {
	const post: IPost | null = await Post.findOne({ title: 'Hello from the server!' });
	if (!post) {
		return json({ error: 'Post not found' });
	}

	return json(post);
};
