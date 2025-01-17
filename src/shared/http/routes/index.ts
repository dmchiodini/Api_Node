import { rolesRouter } from '@roles/http/routes/roules.routes';
import { usersRouter } from '@users/http/routes/users.routes';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'Olá Dev',
  });
});

routes.use('/roles', rolesRouter);
routes.use('/users', usersRouter);

export { routes };
