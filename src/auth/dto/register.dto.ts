import { IsString, isString, Length } from 'class-validator';

export class RegisterDto {
  @Length(4, 30)
  @IsString()
  readonly username: string;

  @IsString()
  readonly email: string;

  @Length(8, 50)
  @IsString()
  readonly password: string;
}
