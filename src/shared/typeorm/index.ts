import { DataSource } from 'typeorm';
import { CreateRolesTable1736776129253 } from './migrations/1736776129253-CreateRolesTable';
import { Role } from '@roles/entities/Role';
import { CreateUsersTable1737049571364 } from './migrations/1737049571364-CreateUsersTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1736776129253, CreateUsersTable1737049571364],
});
