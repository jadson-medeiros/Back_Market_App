import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'user',
  database: 'marketapp',
  logging: true,
  synchronize: true,
  entities: ['dist/db/models/**/*.entity.{js,ts}'],
  migrations: ['dist/db/migrations/**/*.{js,ts}'],
};
