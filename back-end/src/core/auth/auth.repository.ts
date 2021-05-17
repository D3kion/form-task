import { Repository, EntityRepository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { AUTH_ERROR } from './enum/auth-error.enum';
import {
  ConflictException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { UserSignUpDto } from './dto/user-sign-up.dto';

@EntityRepository(UserEntity)
export class AuthRepository extends Repository<UserEntity> {
  async signUp(userSignUpDto: UserSignUpDto): Promise<UserEntity> {
    const { login, password } = userSignUpDto;

    const user: UserEntity = this.create();

    user.login = login;
    user.password = await UserEntity.hashPassword(password);

    try {
      await user.save();
      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(AUTH_ERROR.USERNAME_ALREADY_EXISTS);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(userLoginDto: UserLoginDto): Promise<UserEntity> {
    const { login, password } = userLoginDto;

    const user = await this.findOne({
      where: [{ login }],
    });
    if (user === undefined) {
      throw new BadRequestException(AUTH_ERROR.COULDNT_FOUND_USER);
    } else {
      const passwordCorrect = await user.validatePassword(password);

      if (passwordCorrect === false) {
        throw new BadRequestException(AUTH_ERROR.UNCORRECT_PASSWORD_OR_LOGIN);
      } else {
        return user;
      }
    }
  }
}
