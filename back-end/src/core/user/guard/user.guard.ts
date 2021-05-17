import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { USER_ROLE } from '../enum/user-role.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { USER_ERROR } from '../enum/user-error.enum';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    @InjectRepository(UserEntity)
    private productRepository: Repository<UserEntity>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;

    if (isNaN(params.userId)) {
      throw new BadRequestException();
    }

    const user = await this.productRepository.findOne({
      where: { id: params.userId },
    });

    if (!user) {
      throw new BadRequestException(USER_ERROR.USER_WITH_THIS_ID_NOT_FOUND);
    }

    if (String(user.role) === String(USER_ROLE.BLOCKED)) {
      return false;
    }

    request.userParam = user;

    return true;
  }
}
