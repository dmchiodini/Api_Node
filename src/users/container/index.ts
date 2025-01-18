import { IUsersRepository } from '@users/repositories/IUserRepository';
import { UsersRepository } from '@users/repositories/UsersRepository';
import { CreateLoginrController } from '@users/useCases/createLogin/CreateLoginController';
import { CreateUserController } from '@users/useCases/createUser/CreateUserController';
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController';
import { ShowProfileController } from '@users/useCases/showProfile/ShowProfileController';
import { UpdateAvatarController } from '@users/useCases/updateAvatar/UpdateAvatarController';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);
container.registerSingleton('CreateLoginrController', CreateLoginrController);
container.registerSingleton('UpdateAvatarController', UpdateAvatarController);
container.registerSingleton('ShowProfileController', ShowProfileController);
