import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { CONSTANTS } from '@lib/index';

export function initializeSwagger(app: NestFastifyApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle(CONSTANTS.name)
    .setDescription(CONSTANTS.description)
    .setVersion(CONSTANTS.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, document, {
    explorer: true,
  });
}
