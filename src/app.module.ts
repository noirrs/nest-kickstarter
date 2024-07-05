import { CONSTANTS } from '@lib/index';
import { UserModule } from '@modules/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ApiModule } from './modules/api/api.module';

@Module({
  imports: [
    UserModule,
    ApiModule,
    ThrottlerModule.forRoot([
      {
        ttl: CONSTANTS.throttle.ttl,
        limit: CONSTANTS.throttle.limit,
      },
    ]),
    MongooseModule.forRoot(CONSTANTS.database.connURL, {
      dbName: CONSTANTS.database.dbName,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
