import { Controller, Get } from '@nestjs/common';
import { ApiHeader, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { MessageDto } from './dtos/response.dtos';

@ApiTags('app')
@ApiHeader({
  name: 'X-Authentication',
  description: 'Header to access this route',
  allowEmptyValue: false,
})
@ApiUnauthorizedResponse({
  description: 'Authentication header not found',
  type: MessageDto,
})
@Controller('api/app')
export class AppController {
  @Get('v1')
  async getAppName(): Promise<MessageDto> {
    return { message: process.env.APP_NAME, statusCode: 200 };
  }
}
