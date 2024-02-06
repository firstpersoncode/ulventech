export class SignUpDto {
  username: string;
  password: string;
  role: string;
}

export class SignInDto {
  username: string;
  password: string;
}

export class TokenDto {
  token: string;
}
