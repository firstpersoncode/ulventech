import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers?.['x-authentication'];
    if (!authHeader || authHeader !== process.env.HEADER_AUTHENTICATION_SECRET)
      throw new UnauthorizedException('Authentication header not found');

    next();
  }
}
