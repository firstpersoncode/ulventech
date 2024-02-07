import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty({ description: 'admin | customer' })
  role: string;
}

export class SignInDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class TokenDto {
  @ApiProperty()
  token: string;
}
