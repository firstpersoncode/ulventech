import { ApiProperty } from '@nestjs/swagger';

export class MessageDto {
  @ApiProperty()
  message: string;
  @ApiProperty()
  error?: string;
  @ApiProperty()
  statusCode?: number;
}
