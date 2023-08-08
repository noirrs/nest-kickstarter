import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CONSTANTS } from '@lib/index';
import { AuthService } from '@modules/auth/auth.service';
import { Inject } from '@nestjs/common';
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: CONSTANTS.encoding.jwtSecret,
    });
  }

  async validate(payload: any) {
    return this.authService.validateUser(payload);
  }
}
