// src/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from './task/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // or your database host
  port: 5432, // or your database port
  username: 'your_db_user', // replace with your database username
  password: 'your_db_password', // replace with your database password
  database: 'task_manager', // replace with your database name
  entities: [Task],
  synchronize: true,
};
