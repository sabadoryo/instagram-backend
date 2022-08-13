import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: RegisterDto) {
    const hashedPassword = await bcrypt.hash(
      data.password,
      process.env.HASH_SALT,
    );
    const user = await this.prisma.users.create({
      data: {
        email: data.email,
        username: data.username,
        password: hashedPassword,
      },
      select: {
        password: false,
        username: true,
        id: true,
        email: true,
      },
    });

    return user;
  }
}
