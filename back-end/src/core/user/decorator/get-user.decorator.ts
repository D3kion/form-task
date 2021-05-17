import { createParamDecorator } from '@nestjs/common';
import { UserEntity } from '../user.entity';

interface RequestData extends Request {
  userParam: UserEntity;
}

export const GetUser = createParamDecorator(
  (data: string, request: RequestData) => {
    const user: UserEntity = request.userParam;

    return data ? user && user[data] : user;
  },
);
