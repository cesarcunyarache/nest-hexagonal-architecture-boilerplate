import { SeederOptions } from 'typeorm-extension';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export enum DatabaseSSLMode {
  require = 'require',
  disable = 'disable',
}

export type DatabaseConfig = MysqlConnectionOptions & SeederOptions;
