import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  async get() {
    return {
      status: 'ok',
      message: 'Welcome to the API sir!',
    };
  }

  async getAdmin() {
    return {
      status: 'ok',
      message: 'Welcome to the API sir!',
    };
  }
}
