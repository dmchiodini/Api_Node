import { RolesRepository } from '@roles/repositories/RolesRepository';
import { AppError } from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { UpdateRoleUseCase } from './UpdateRoleUseCase';

export class UpdateRoleControlle {
  constructor(private updateRoleUseCase: UpdateRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;
    const role = await this.updateRoleUseCase.execute({ id, name });

    return response.status(200).json(role);
  }
}
