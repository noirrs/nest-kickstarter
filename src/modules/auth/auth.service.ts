import { UserService } from '@modules/user/user.service';
import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
type IValidateUser = {
  username: string;
  sub: string;
};

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ username, sub }: IValidateUser): Promise<any> {
    let user = await this.userService.findUser(username, sub);
    if (!user) throw new UnauthorizedException();

    return user;
  }

  async createSession({ username, sub }: IValidateUser) {
    let token = this.jwtService.sign({ username, sub });

    return token;
  }
}
