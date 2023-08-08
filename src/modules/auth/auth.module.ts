import { JwtModule } from '@nestjs/jwt';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from '@strategies/jwt.strategy';
import { CONSTANTS } from '@lib/index';
import { UserModule } from '@modules/user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, JwtStrategy],
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: CONSTANTS.encoding.jwtSecret,
      signOptions: { expiresIn: CONSTANTS.encoding.jwtExpiresIn },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
