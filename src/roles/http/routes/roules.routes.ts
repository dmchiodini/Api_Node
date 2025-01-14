import { Router } from 'express';
import { createRolesController } from '@roles/useCases/createRole';
import { listRolesController } from '@roles/useCases/listRoles';
import { deleteRolesController } from '@roles/useCases/deleteRole';
import { updateRolesController } from '@roles/useCases/updateRole';
import { showRolesController } from '@roles/useCases/showRole';

const rolesRouter = Router();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response);
});

rolesRouter.get('/:id', (request, response) => {
  return showRolesController.handle(request, response);
});

rolesRouter.put('/:id', (request, response) => {
  return updateRolesController.handle(request, response);
});

rolesRouter.delete('/:id', (request, response) => {
  return deleteRolesController.handle(request, response);
});

export { rolesRouter };
