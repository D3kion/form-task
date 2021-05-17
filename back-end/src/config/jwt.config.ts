import { JwtModuleOptions } from '@nestjs/jwt';
import * as config from 'config';

const JWT_CONFIG = config.get('JWT');

export const JwtConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET || JWT_CONFIG.SECRET,
  signOptions: {
    expiresIn: JWT_CONFIG.EXPIRES_IN || process.env.JWT_EXPIRES_IN,
  },
};
