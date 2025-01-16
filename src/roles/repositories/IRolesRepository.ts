import { Role } from '@roles/entities/Role';
import { container } from 'tsyringe';

export type CreateRoleDTO = {
  name: string;
};

export type PaginateParams = {
  page: number;
  skip: number;
  take: number;
};

export type RolesPaginationProperties = {
  per_page: number;
  total: number;
  current_page: number;
  data: Role[];
};

export interface IRolesRepository {
  create({ name }: CreateRoleDTO): Promise<Role>;
  save(role: Role): Promise<Role>;
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginationProperties>;
  findById(id: string): Promise<Role | null>;
  findByName(name: string): Promise<Role | null>;
  delete(role: Role): Promise<void>;
}
