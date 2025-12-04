import express from 'express';
import { connectToDatabase } from './database/connection';
import { setEventRoutes } from './events/routes';
import { setPosterRoutes } from './posters/routes';
import { authenticate } from './auth/middleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(authenticate);

// Database connection
connectToDatabase();

// Routes
setEventRoutes(app);
setPosterRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});