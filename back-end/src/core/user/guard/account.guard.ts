import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserEntity } from '../user.entity';
import { USER_ROLE } from '../enum/user-role.enum';

@Injectable()
export class AccountGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { user = null }: { user: UserEntity } = request;

    if (user === null) {
      return false;
    }

    const { role = null }: { role: USER_ROLE } = user;

    if (role === null) {
      return false;
    }

    if (String(role) === String(USER_ROLE.BLOCKED)) {
      return false;
    }

    const roles: number[] = this.reflector.get<number[]>(
      'roles',
      context.getHandler(),
    );

    if (roles) {
      const index = roles.indexOf(role);
      return index !== -1;
    }

    return true;
  }
}
