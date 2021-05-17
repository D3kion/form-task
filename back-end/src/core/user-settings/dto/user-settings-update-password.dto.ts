import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class UserSettingsUpdatePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(100)
  password: string;
}
