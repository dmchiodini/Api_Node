import { AppError } from '@shared/errors/AppError';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'Olá Dev',
  });
});

export { routes };
