import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { AUTH_ERROR } from '../enum/auth-error.enum';
import { UserEntity } from '../../user/user.entity';

@Injectable()
export class PasswordGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const {
      body,
      user,
    }: { body: { password: string }; user: UserEntity } = request;

    if (!body || !user) {
      return false;
    }

    const { password } = body;

    if (!password) {
      return false;
    }

    const passwordCorrect = await user.validatePassword(password);

    if (!passwordCorrect) {
      throw new BadRequestException(AUTH_ERROR.UNCORRECT_CURRENT_PASSWORD);
    } else {
      return true;
    }
  }
}
