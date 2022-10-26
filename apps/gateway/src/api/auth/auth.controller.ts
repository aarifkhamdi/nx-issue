import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RequestCodeDto } from './dto/request-code.dto';
import { RequestCodeResponseDto } from './dto/request-code.response.dto';

@Controller({ path: 'auth', version: '2' })
@ApiTags('Auth')
export class AuthController {
  @Post('code')
  @ApiCreatedResponse({
    description:
      'Returns the code in the response, otherwise in SMS to the specified number.',
    type: RequestCodeResponseDto,
  })
  @ApiBody({ type: RequestCodeDto })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  code(@Body() _dto: RequestCodeDto): RequestCodeResponseDto {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new RequestCodeResponseDto(null as any);
  }
}
