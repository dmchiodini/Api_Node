import { IRefreshTokenRepository } from '@users/repositories/IRefreshTokenRepository copy';
import { IUsersRepository } from '@users/repositories/IUserRepository';
import { RefreshTokenRepository } from '@users/repositories/RefreshTokenRepository';
import { UsersRepository } from '@users/repositories/UsersRepository';
import { CreateAccessAndRefreshTokenController } from '@users/useCases/createAccessAndRefreshToken/CreateAccessAndRefreshTokenController';
import { CreateLoginrController } from '@users/useCases/createLogin/CreateLoginController';
import { CreateUserController } from '@users/useCases/createUser/CreateUserController';
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController';
import { ShowProfileController } from '@users/useCases/showProfile/ShowProfileController';
import { UpdateAvatarController } from '@users/useCases/updateAvatar/UpdateAvatarController';
import { UpdateProfileController } from '@users/useCases/updateProfile/UpdateProfileController';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<IRefreshTokenRepository>(
  'RefreshTokenRepository',
  RefreshTokenRepository,
);
container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);
container.registerSingleton('CreateLoginrController', CreateLoginrController);
container.registerSingleton('UpdateAvatarController', UpdateAvatarController);
container.registerSingleton('ShowProfileController', ShowProfileController);
container.registerSingleton('UpdateProfileController', UpdateProfileController);
container.registerSingleton(
  'CreateAccessAndRefreshTokenController',
  CreateAccessAndRefreshTokenController,
);
