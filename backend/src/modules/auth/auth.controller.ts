import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { SignInDto, SignUpDto, TokenDto } from './auth.dtos';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('api/app/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('v1/sign-up')
  async signUp(
    @Body() body: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<TokenDto> {
    const token = await this.authService.signUp(body, res);
    return { token };
  }

  @Post('v1/sign-in')
  async signIn(
    @Body() body: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<TokenDto> {
    const token = await this.authService.signIn(body, res);
    return { token };
  }

  @Get('v1/sign-out')
  async signOut(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('session');
    return { message: 'Logged out successfully' };
  }
}
