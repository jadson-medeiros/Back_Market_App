import { DataSource, DataSourceOptions } from 'typeorm';

export const options: DataSourceOptions = {
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

const dataSource = new DataSource(options);

export default dataSource;
