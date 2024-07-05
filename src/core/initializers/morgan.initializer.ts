import { NestFastifyApplication } from '@nestjs/platform-fastify';
import * as morgan from 'morgan';

export function initializeMorgan(app: NestFastifyApplication) {
  app.use(
    morgan(':remote-addr :url :method :req[origin] :status :response-time ms'),
  );
}
