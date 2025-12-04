import { Router } from 'express';
import { EventController } from './controller';

const router = Router();
const eventController = new EventController();

export function setEventRoutes(app) {
    app.use('/events', router);
    
    router.post('/', eventController.createEvent.bind(eventController));
    router.get('/:id', eventController.getEvent.bind(eventController));
    router.put('/:id', eventController.updateEvent.bind(eventController));
    router.delete('/:id', eventController.deleteEvent.bind(eventController));
}