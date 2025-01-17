import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import jwtConfig from '@config/auth';
import { AppError } from '@shared/errors/AppError';
import { User } from '@users/entities/User';
import { IUsersRepository } from '@users/repositories/IUserRepository';
import { sign } from 'jsonwebtoken';

type CreateLoginrDTO = {
  email: string;
  password: string;
};

type IResponse = {
  user: User;
  token: string;
};

@injectable()
export class CreateLoginUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: CreateLoginrDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const token = sign({}, jwtConfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
