import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: RegisterDto) {
    const isUsernameExists = await this.authService.findUserByUsername(
      userData['username'],
    );

    const isEmailExists = await this.authService.findUserByEmail(
      userData['email'],
    );

    console.log(isUsernameExists);
    console.log(isEmailExists);

    if (isUsernameExists || isEmailExists) {
      return 'The entered data is incorrect. Please choose a different password or username.';
    }
    const user = await this.authService.createUser(userData);

    console.log(user);
    return user;
  }
}
