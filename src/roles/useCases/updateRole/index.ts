import { RolesRepository } from '@roles/repositories/RolesRepository';
import { UpdateRoleUseCase } from './UpdateRoleUseCase';
import { UpdateRoleControlle } from './UpdateRoleController';

const rolesRepository = RolesRepository.getInstance();
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository);
export const updateRolesController = new UpdateRoleControlle(updateRoleUseCase);
