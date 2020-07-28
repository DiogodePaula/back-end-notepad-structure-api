import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('NOTEPAD-API'));

export default routes;
