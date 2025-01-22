import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { CreateAccessAndRefreshTokenUseCase } from './CreateAccessAndRefreshTokenUseCase';

export class CreateAccessAndRefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createAccessAndRefreshTokenUseCase = container.resolve(
      CreateAccessAndRefreshTokenUseCase,
    );
    const user_id = request.user.id;
    const { refresh_token } = request.body;
    const { user, accessToken, refreshToken } =
      await createAccessAndRefreshTokenUseCase.execute({
        user_id,
        refresh_token,
      });

    return response
      .status(201)
      .json(instanceToInstance({ user, accessToken, refreshToken }));
  }
}
