import mongoose from 'mongoose';
import { env } from '$env/dynamic/private';

export const connectMongoDB = async () => {
	const MONGO_URL = env.MONGO_URL as string;
	await mongoose.connect(MONGO_URL);
	console.log('mongoDB - CONNECTION ESTABLISHED');
};
