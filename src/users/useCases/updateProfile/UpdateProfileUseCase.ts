import { inject, injectable } from 'tsyringe';
import { compare, hash } from 'bcryptjs';
import { IRolesRepository } from '@roles/repositories/IRolesRepository';
import { AppError } from '@shared/errors/AppError';
import { User } from '@users/entities/User';
import { IUsersRepository } from '@users/repositories/IUserRepository';

type UpdateProfileDTO = {
  userId: string;
  name: string;
  email: string;
  password: string;
  old_password?: string;
};

@injectable()
export class UpdateProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    userId,
    name,
    email,
    password,
    old_password,
  }: UpdateProfileDTO): Promise<User> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const userUpdateEmail = await this.usersRepository.findByEmail(email);

    if (userUpdateEmail && userUpdateEmail.id !== userId) {
      throw new AppError('There is already one user with this email', 400);
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError('Old passowrd does not match', 400);
      }

      user.password = await hash(password, 10);
    }

    user.name = name;
    user.email = email;

    return this.usersRepository.save(user);
  }
}
