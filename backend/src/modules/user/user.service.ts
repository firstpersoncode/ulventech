import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dtos';
import { User } from './user.entity';
import { encodePassword } from 'src/utils/bcrypt';
import { decodeToken } from 'src/utils/jwt';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: UserDto): Promise<User> {
    const encryptedPassword = await encodePassword(user.password);

    return this.userRepository.save({
      username: user.username,
      password: encryptedPassword,
      role: user.role,
    });
  }

  async getUser(req: Request): Promise<User> {
    const token = req.cookies.session;
    const decodedToken = decodeToken(token);

    return this.userRepository.findOne({
      where: { id: decodedToken.payload.id },
      select: {
        id: true,
        username: true,
        role: true,
      },
    });
  }

  async getUserByName(username: string): Promise<User> {
    return this.userRepository.findOne({
      where: { username },
    });
  }
}
