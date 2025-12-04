import { Router } from 'express';
import { PosterController } from './controller';

const router = Router();
const posterController = new PosterController();

export function setPosterRoutes(app: Router) {
    app.post('/posters/upload', posterController.uploadPoster.bind(posterController));
    app.get('/posters/:id', posterController.getPoster.bind(posterController));
    app.delete('/posters/:id', posterController.deletePoster.bind(posterController));
}