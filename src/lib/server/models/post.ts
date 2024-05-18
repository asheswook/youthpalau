import { model, type Model, Schema } from 'mongoose';
import type { IPost } from '$lib/types/post';

const PostSchema = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true }
	},
	{
		versionKey: false,
		timestamps: true
	}
);

export const Post: Model<IPost> = model('post', PostSchema, 'posts');
