import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class Bypass extends AuthGuard('jwt') {
  canActivate(): boolean {
    return true;
  }
}
