import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_connection_string';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to database');
        return client.db('eventPosterDB'); // Replace with your database name
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};