import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import InscriptionController from './app/controllers/InscriptionController';

import auth from './app/middlewares/auth';
import OrganizerController from './app/controllers/OrganizerController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/auth', SessionController.store);
routes.post('/users', UserController.store);

routes.use(auth);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/meetups', MeetupController.index);
routes.post('/meetups', MeetupController.store);
routes.put('/meetups/:id', MeetupController.update);
routes.delete('/meetups/:id', MeetupController.delete);

routes.get('/organizing', OrganizerController.index);
routes.get('/inscriptions', InscriptionController.index);
routes.delete('/inscriptions/:meetupId', InscriptionController.delete);

routes.post('/meetups/:meetupId/inscription', InscriptionController.store);

export default routes;
