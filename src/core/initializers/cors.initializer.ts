import { NestFastifyApplication } from '@nestjs/platform-fastify';

export function initializeCORS(app: NestFastifyApplication) {
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
}
