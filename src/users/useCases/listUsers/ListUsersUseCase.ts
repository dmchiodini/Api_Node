import { inject, injectable } from 'tsyringe';
import {
  IUsersRepository,
  UsersPaginationProperties,
} from '@users/repositories/IUserRepository';

type ListUsersUseCaseParams = {
  page: number;
  limit: number;
};

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    page,
    limit,
  }: ListUsersUseCaseParams): Promise<UsersPaginationProperties> {
    const take = limit;
    const skip = Number(page - 1) * take;
    const users = await this.usersRepository.findAll({ page, skip, take });

    return users;
  }
}
