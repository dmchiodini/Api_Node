import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { ShowProfileUseCase } from './ShowProfileUseCase';
import { instanceToInstance } from 'class-transformer';

export class ShowProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showProfileUseCase = container.resolve(ShowProfileUseCase);
    const userId = request.user.id;
    const user = await showProfileUseCase.execute({
      userId,
    });

    return response.status(200).json(instanceToInstance(user));
  }
}
