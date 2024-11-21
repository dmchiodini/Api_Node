import { Router } from 'express';
import { createRolesController } from '@roles/useCases/createRole';
import { RolesRepository } from '@roles/repositories/RolesRepository';
import { listRolesController } from '@roles/useCases/listRoles';

const rolesRouter = Router();
const rolesRepository = new RolesRepository();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response);
});

export { rolesRouter };
