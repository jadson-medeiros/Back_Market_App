import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { DataSource } from 'typeorm';

// export const AppDataSource = new DataSource({
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'user',
//   password: 'user',
//   database: 'marketapp',
//   logging: true,
//   synchronize: true,
//   entities: ['src/db/models/*.{js,ts}'],
//   migrations: ['src/db/migrations/*.{js,ts}'],
// });

const options: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'user',
  database: 'marketapp',
  logging: true,
  synchronize: true,
  entities: ['dist/db/models/**/*.{js,ts}'],
  migrations: ['dist/db/migrations/**/*.{js,ts}'],
};

module.exports = options;
