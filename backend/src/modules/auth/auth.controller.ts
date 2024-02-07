import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { SignInDto, SignUpDto, TokenDto } from './auth.dtos';
import { AuthService } from './auth.service';
import { Response } from 'express';
import {
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiHeader,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { MessageDto } from 'src/dtos/response.dtos';

@ApiTags('auth')
@ApiHeader({
  name: 'X-Authentication',
  description: 'Header to access this route',
  allowEmptyValue: false,
})
@ApiUnauthorizedResponse({
  description: 'Authentication header not found',
  type: MessageDto,
})
@Controller('api/app/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiForbiddenResponse({
    description:
      'Invalid "role" value / Invalid "username" format minimum of 6 characters / Invalid "password" format minimum of 6 characters',
    type: MessageDto,
  })
  @ApiConflictResponse({
    description: 'User already exists.',
    type: MessageDto,
  })
  @Post('v1/sign-up')
  async signUp(
    @Body() body: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<TokenDto> {
    const token = await this.authService.signUp(body, res);
    return { token };
  }

  @ApiForbiddenResponse({
    description:
      'Invalid "username" format minimum of 6 characters / Invalid "password" format minimum of 6 characters',
    type: MessageDto,
  })
  @ApiConflictResponse({
    description: 'Invalid password',
    type: MessageDto,
  })
  @Post('v1/sign-in')
  async signIn(
    @Body() body: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<TokenDto> {
    const token = await this.authService.signIn(body, res);
    return { token };
  }

  @Get('v1/sign-out')
  async signOut(
    @Res({ passthrough: true }) res: Response,
  ): Promise<MessageDto> {
    res.clearCookie('session');
    return { message: 'Logged out successfully' };
  }
}
