import { Role } from '@roles/entities/Role';
import { User } from '@users/entities/User';

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  isAdmin: boolean;
  role: Role;
};

export type PaginateParams = {
  page: number;
  skip: number;
  take: number;
};

export type UsersPaginationProperties = {
  per_page: number;
  total: number;
  current_page: number;
  data: User[];
};

export interface IUsersRepository {
  create({
    name,
    email,
    password,
    isAdmin,
    avatar,
    role,
  }: CreateUserDTO): Promise<Role>;
  save(user: User): Promise<User>;
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsersPaginationProperties>;
  findById(id: string): Promise<User | null>;
  findByName(name: string): Promise<User | null>;
  delete(user: User): Promise<void>;
}
