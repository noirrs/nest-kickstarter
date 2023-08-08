import { RegisterDTO } from './etc/register.dto';
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './etc/user.schema';
import { Encode } from '@core/utils/encode';
import { IDGenerator } from '@core/utils/idGenerator';
import { AuthService } from '@modules/auth/auth.service';

type ILogin = {
  username: string;
  password: string;
};

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async create(UserDto: RegisterDTO): Promise<User> {
    let { username, mail } = UserDto;

    let check = await this.checkPresence(username, mail);
    if (check)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);

    const createdUser = new this.userModel(UserDto);

    createdUser.uid = await IDGenerator(this);
    createdUser.password = Encode(createdUser.password);

    return createdUser.save();
  }

  async findUser(username: string, uid: string): Promise<User> {
    const user = await this.userModel.findOne({ username, uid });
    return user;
  }

  async login({ username, password }: ILogin) {
    let encodedPassword = Encode(password);

    let user = await this.userModel.findOne({
      username,
      password: encodedPassword,
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    let token = await this.authService.createSession({
      username,
      sub: user.uid,
    });

    return { token };
  }

  // checks if user exists by username or mail
  async checkPresence(username: string, mail: string) {
    let user = await this.userModel.findOne({ username });

    if (!user) {
      user = await this.userModel.findOne({ mail });

      return user ? true : false;
    }

    return true;
  }

  async checkID(uid: string) {
    let user = await this.userModel.findOne({ uid });

    return user ? true : false;
  }
}
