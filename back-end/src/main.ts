import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as helmet from 'helmet';

import { API_SERVER_PORT } from './config/server.config';

export async function bootstrap() {
  const port = process.env.PORT || API_SERVER_PORT;

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());
  await app.listen(port);

  const logger = new Logger('Bootstrap Api Server');
  logger.log(`Api Server listening on port ${port}`);
  logger.log(`Api Server URL is http://localhost:${port}`);
}
bootstrap();
