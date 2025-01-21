import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { CreateLoginUseCase } from './CreateLoginUseCase';

export class CreateLoginrController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createLoginUseCase = container.resolve(CreateLoginUseCase);
    const { email, password } = request.body;
    const { user, accessToken, refreshToken } =
      await createLoginUseCase.execute({
        email,
        password,
      });

    return response
      .status(201)
      .json(instanceToInstance({ user, accessToken, refreshToken }));
  }
}
