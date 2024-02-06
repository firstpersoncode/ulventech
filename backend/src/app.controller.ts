import { Controller, Get } from '@nestjs/common';

@Controller('api/app')
export class AppController {
  @Get('v1')
  async getAppName() {
    return { message: process.env.APP_NAME };
  }
}
