import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';
import cresponse from 'src/lib/CustomResponse';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: RegisterDto) {
    const user = await this.authService.createUser(userData);

    return cresponse(HttpStatus.CREATED, 'User Created', user);
  }
}
