import * as jwt from 'jsonwebtoken';

export function createToken(payload: any): string {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}

export function decodeToken(token: string): any {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}
