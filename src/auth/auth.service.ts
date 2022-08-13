import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: RegisterDto) {
    const user = await this.prisma.users.create({
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
      },
    });

    return user;
  }
  async findUserByUsername(username) {
    const userExists = await this.prisma.users.findUnique({
      where: {
        username: username,
      },
    });
    return userExists;
  }
  async findUserByEmail(email) {
    const userExists = await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    return userExists;
  }
}
