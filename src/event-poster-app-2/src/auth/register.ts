import { User } from '../types';
import { connectToDatabase } from '../database/connection';

export const registerUser = async (userData: User): Promise<string> => {
    const db = await connectToDatabase();
    
    // Input validation
    if (!userData.username || !userData.password) {
        throw new Error('Username and password are required');
    }

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ username: userData.username });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Save user details to the database
    const result = await db.collection('users').insertOne(userData);
    if (result.insertedId) {
        return 'User registered successfully';
    } else {
        throw new Error('User registration failed');
    }
};