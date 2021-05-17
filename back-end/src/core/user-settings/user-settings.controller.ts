import {
  Controller,
  Patch,
  UseGuards,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { UserSettingsService } from './user-settings.service';
import { AuthGuard } from '@nestjs/passport';
import { AccountGuard } from '../user/guard/account.guard';
import { GetAccount } from '../user/decorator/get-account.decorator';
import { UserEntity } from '../user/user.entity';
import { UserSettingsUpdatePasswordDto } from './dto/user-settings-update-password.dto';

@Controller('user-setting')
export class UserSettingsController {
  constructor(private userSettingsService: UserSettingsService) {}

  @Patch('/password/:adminId')
  @UseGuards(AuthGuard(), AccountGuard)
  updatePassword(
    @Body(ValidationPipe)
    userSettingsUpdatePasswordDto: UserSettingsUpdatePasswordDto,
    @GetAccount() user: UserEntity,
  ): Promise<void> {
    return this.userSettingsService.updatePassword(
      user,
      userSettingsUpdatePasswordDto,
    );
  }
}
