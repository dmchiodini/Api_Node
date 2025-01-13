import { DataSource } from 'typeorm';
import { CreateRolesTable1736776129253 } from './migrations/1736776129253-CreateRolesTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1736776129253],
});
