import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { UserSettingsUpdatePasswordDto } from './dto/user-settings-update-password.dto';

@Injectable()
export class UserSettingsService {
  constructor() {}
  async updatePassword(
    user: UserEntity,
    userSettingsUpdatePasswordDto: UserSettingsUpdatePasswordDto,
  ): Promise<void> {
    const { password } = userSettingsUpdatePasswordDto;

    user.password = await UserEntity.hashPassword(password);
    await user.save();
  }
}
