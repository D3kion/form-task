import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { UserEntity } from '../core/user/user.entity';

const DATABASE_CONFIG = config.get('DATABASE');

export const ApiEntities = [UserEntity];

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: DATABASE_CONFIG.TYPE,
  url: process.env.DATABASE_URL || DATABASE_CONFIG.URL,
  entities: ApiEntities,
  ssl: { rejectUnauthorized: false },
  logging: ['query', 'error'],
  synchronize: process.env.TYPEORM_SYNC || DATABASE_CONFIG.SYNCHRONIZE,
};
