import { IsString, isString, Length, Validate } from 'class-validator';
import { Unique } from 'src/lib/custom-validations/UniqueConstraint';

export class RegisterDto {
  @Length(4, 30)
  @IsString()
  @Unique('users', 'username')
  readonly username: string;

  @IsString()
  @Unique('users', 'email')
  readonly email: string;

  @Length(8, 50)
  @IsString()
  readonly password: string;
}
