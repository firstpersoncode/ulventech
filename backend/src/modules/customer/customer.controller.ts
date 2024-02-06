import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { Roles } from 'src/decorators/roles.decorator';
import { SessionGuard } from 'src/guards/session.guard';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Controller('api/customer')
@UseGuards(new SessionGuard())
export class CustomerController {
  constructor(private readonly userService: UserService) {}

  @Get('v1')
  @Roles(['customer'])
  async getHello() {
    return { message: 'Hello World!' };
  }

  @Get('v1/me')
  @Roles(['customer'])
  async me(@Req() req: Request): Promise<User> {
    return this.userService.getUser(req);
  }
}
