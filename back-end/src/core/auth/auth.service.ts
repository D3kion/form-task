import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSignUpDto } from './dto/user-sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/jwt-payload.interface';
import { UserLoginDto } from './dto/user-login.dto';
import { UserEntity } from '../user/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AUTH_ERROR } from './enum/auth-error.enum';
import { LoginInfoDto } from './dto/login-info.dto';
import { AccountDataDto } from './dto/account-data.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private AuthRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(userSignUpDto: UserSignUpDto): Promise<LoginInfoDto> {
    const user: UserEntity = await this.AuthRepository.signUp(userSignUpDto);

    const accessToken = await this.createJwt(user);

    return { accessToken };
  }

  async login(userLoginDto: UserLoginDto): Promise<LoginInfoDto> {
    const userData = await this.AuthRepository.login(userLoginDto);

    const accessToken = await this.createJwt(userData);

    const loginInfo: LoginInfoDto = { accessToken };
    return loginInfo;
  }

  async createJwt(user: UserEntity): Promise<string> {
    const { id, role } = user;

    const payload: JwtPayload = {
      id,
      role,
    };

    return this.jwtService.sign(payload);
  }

  async updateLogin(user: UserEntity): Promise<LoginInfoDto> {
    const accessToken = await this.createJwt(user);

    return { accessToken };
  }

  async getAccountById(id: number): Promise<UserEntity> {
    const user = await this.AuthRepository.findOne({ id });

    if (!user) {
      throw new NotFoundException(AUTH_ERROR.USER_WITH_THIS_ID_NOT_FOUND);
    }

    return user;
  }

  async getAccountInfo(user: UserEntity): Promise<AccountDataDto> {
    const accountData: AccountDataDto = {
      id: user.id,
      login: user.login,
    };

    return accountData;
  }
}
