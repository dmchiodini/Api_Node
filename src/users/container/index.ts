import { IUsersRepository } from '@users/repositories/IUserRepository';
import { UsersRepository } from '@users/repositories/UsersRepository';
import { CreateLoginrController } from '@users/useCases/createLogin/CreateLoginController';
import { CreateUserController } from '@users/useCases/createUser/CreateUserController';
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);
container.registerSingleton('CreateLoginrController', CreateLoginrController);
