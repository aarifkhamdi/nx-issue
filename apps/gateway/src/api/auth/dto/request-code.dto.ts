import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsPhoneNumber } from 'class-validator';

export class RequestCodeDto {
  @ApiProperty()
  @IsPhoneNumber()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      // заменяем все не 0-9 символы на пустоту
      return `+${value.replaceAll(/[^0-9]/g, '')}`;
    }
    return value;
  })
  phone!: string;
}
