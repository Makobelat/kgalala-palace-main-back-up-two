export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    createdBy: string;
}

export interface Poster {
    id: string;
    eventId: string;
    imageUrl: string;
    uploadedAt: Date;
}