import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, Length } from 'class-validator';
import { RequestCodeDto } from './request-code.dto';

export class VerifyCodeDto extends RequestCodeDto {
  @ApiProperty({ minLength: 6, maxLength: 6 })
  @IsNumberString(
    { no_symbols: true },
    { message: 'Code should contain 6 digits' },
  )
  @Length(6, 6, { message: 'Code should contain 6 digits' })
  verificationCode!: string;
}
