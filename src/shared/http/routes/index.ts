import { rolesRouter } from '@roles/http/routes/roules.routes';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'Olá Dev',
  });
});

routes.use('/roles', rolesRouter);

export { routes };
