import { createParamDecorator } from '@nestjs/common';
import { UserEntity } from '../user.entity';

interface RequestData extends Request {
  user: UserEntity;
}

export const GetAccount = createParamDecorator(
  (data: string, request: RequestData) => {
    const user: UserEntity = request.user;

    return data ? user && user[data] : user;
  },
);
