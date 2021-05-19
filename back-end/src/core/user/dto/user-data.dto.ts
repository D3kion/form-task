import { USER_ROLE } from '../enum/user-role.enum';

export interface UserDataDto {
  id: number;
  login: string;
  createDate: string;
  role: USER_ROLE;
}
