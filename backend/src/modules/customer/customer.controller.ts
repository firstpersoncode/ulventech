import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Roles } from 'src/decorators/roles.decorator';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import {
  ApiForbiddenResponse,
  ApiHeader,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { MessageDto } from 'src/dtos/response.dtos';

@ApiTags('customer')
@ApiHeader({
  name: 'X-Authentication',
  description: 'Header to access this route',
  allowEmptyValue: false,
})
@ApiUnauthorizedResponse({
  description: 'Authentication header not found',
  type: MessageDto,
})
@ApiForbiddenResponse({
  description: 'Session not found or unallowed role',
  type: MessageDto,
})
@Controller('api/app/v1/customer')
export class CustomerController {
  constructor(private readonly userService: UserService) {}

  @Get('v1')
  @Roles(['customer'])
  async getHello(): Promise<MessageDto> {
    return { message: 'Hello World!' };
  }

  @Get('v1/me')
  @Roles(['customer'])
  async me(@Req() req: Request): Promise<User> {
    return this.userService.getUser(req);
  }
}
