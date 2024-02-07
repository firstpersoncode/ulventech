import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Roles } from 'src/decorators/roles.decorator';
import { decodeToken } from 'src/utils/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request: Request = context.switchToHttp().getRequest();
    if (!request.cookies?.session)
      throw new ForbiddenException('Session not found');

    const session = request.cookies.session;

    const decodedSession = decodeToken(session);
    const user = decodedSession.payload;

    if (!roles.includes(user.role))
      throw new ForbiddenException('Unallowed role.');

    return true;
  }
}
