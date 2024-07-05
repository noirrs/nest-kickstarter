import { FindDTO } from './etc/find.dto';
import { RegisterDTO } from './etc/register.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Throttle } from '@nestjs/throttler';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Throttle({ default: {limit: 7, ttl: 10 * 60}})
  @Post('/create')
  async create(@Body() body: RegisterDTO) {
    return await this.service.create(body);
  }

  @Post('/login')
  async login(@Body() body: FindDTO) {
    let user = await this.service.login(body);

    return user;
  }
}
