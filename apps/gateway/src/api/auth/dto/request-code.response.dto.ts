import { ApiProperty } from '@nestjs/swagger';

export class RequestCodeResponseDto {
  @ApiProperty({
    description:
      'Present only in the local environment, so as not to send an SMS.',
  })
  code?: string;

  constructor(code?: string) {
    this.code = code;
  }
}
