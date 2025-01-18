import { instanceToInstance } from 'class-transformer';
import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { UpdateAvatarUseCase } from './UpdateAvatarUseCase';

export class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase);
    const user = updateAvatarUseCase.execute({
      userId: request.user.id,
      avatarFileName: request.file.filename,
    });
    return response.status(200).json(instanceToInstance(user));
  }
}
