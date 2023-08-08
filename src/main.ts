import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import { CONSTANTS } from '@lib/index';

import helmet from '@fastify/helmet';
import fmp from '@fastify/multipart';

import { initializeSwagger } from '@initializers/swagger.initializer';
import { initializeMorgan } from '@initializers/morgan.initializer';
import { initializeCORS } from '@initializers/cors.initializer';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );

  app.register(helmet);
  app.register(fmp);

  initializeCORS(app);
  initializeSwagger(app);
  initializeMorgan(app);

  app.listen(CONSTANTS.port);
}

bootstrap();
