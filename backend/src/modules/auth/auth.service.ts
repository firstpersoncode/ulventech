import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SignUpDto, SignInDto } from './auth.dtos';
import { comparePassword } from 'src/utils/bcrypt';
import { createToken } from 'src/utils/jwt';
import { Response } from 'express';
import { AVAILABLE_ROLES } from 'src/utils/const';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  async signUp(body: SignUpDto, res: Response): Promise<string> {
    if (!body.role || !AVAILABLE_ROLES.includes(body.role))
      throw new ForbiddenException('Unallowed role.');
    if (!body.username || body.username.length < 6)
      throw new ForbiddenException(
        'Invalid username format minimum of 6 characters.',
      );
    if (!body.password || body.password.length < 6)
      throw new ForbiddenException(
        'Invalid password format minimum of 6 characters.',
      );

    const currUser = await this.userService.getUserByName(body.username);

    if (currUser) throw new ForbiddenException('User already exists.');

    const newUser = await this.userService.createUser(body);

    const token = createToken({
      payload: {
        id: newUser.id,
        role: body.role,
      },
    });

    res.cookie('session', token, {
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 1000,
    });

    return token;
  }

  async signIn(body: SignInDto, res: Response): Promise<string> {
    if (!body.username) throw new ForbiddenException('Username is required.');
    if (!body.password) throw new ForbiddenException('Password is required.');

    const currUser = await this.userService.getUserByName(body.username);

    if (!currUser) throw new NotFoundException('User not found.');

    const isValidPassword = await comparePassword(
      body.password,
      currUser.password,
    );

    if (!isValidPassword) throw new ForbiddenException('Invalid password.');

    const token = createToken({
      payload: {
        id: currUser.id,
        role: currUser.role,
      },
    });

    res.cookie('session', token, {
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 1000,
    });

    return token;
  }
}
