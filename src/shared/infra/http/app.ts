import Express from 'express';
import cors from 'cors';

import { Routes } from './routes';

const App = Express();

App.use(Express.json());
App.use(cors());
App.use(Routes);

export { App };
