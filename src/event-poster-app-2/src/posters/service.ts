import { Poster } from '../types';
import { db } from '../database/connection';

export const savePoster = async (poster: Poster): Promise<Poster> => {
    const result = await db.collection('posters').insertOne(poster);
    return { ...poster, id: result.insertedId };
};

export const findPoster = async (id: string): Promise<Poster | null> => {
    return await db.collection('posters').findOne({ id });
};

export const removePoster = async (id: string): Promise<boolean> => {
    const result = await db.collection('posters').deleteOne({ id });
    return result.deletedCount === 1;
};