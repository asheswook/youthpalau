import type { Handle } from '@sveltejs/kit';
import { connectMongoDB } from '$lib/server/utils/database';

await connectMongoDB();

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	return response;
};
