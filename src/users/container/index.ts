import { IUsersRepository } from '@users/repositories/IUserRepository';
import { UsersRepository } from '@users/repositories/UsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
