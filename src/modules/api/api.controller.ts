import { Controller, Get, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiService } from './api.service';
import { JwtGuard } from '@/core/guards/jwt.guard';
import { AdminGuard } from '@/core/guards/admin.guard';
import { Throttle } from '@nestjs/throttler';

@Throttle({ default: { limit: 7, ttl: 25 * 3600 } })
@UseGuards(JwtGuard)
@Controller('api')
export class ApiController {
  constructor(private readonly ApiService: ApiService) {}

  @Get()
  async get() {
    return this.ApiService.get();
  }

  @UseGuards(AdminGuard)
  @Get('/admin')
  async getAdmin() {
    return this.ApiService.getAdmin();
  }
}
