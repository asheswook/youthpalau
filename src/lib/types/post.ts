import { Document, type ObjectId } from 'mongoose';

export interface IPost extends Document {
	_id: ObjectId;
	title: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
}
