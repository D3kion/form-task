import { USER_LIST_DATA_NAME, USER_LIST_FIELD_NAME } from './user-list.type';

export function performUserData(data) {
  return {
    [USER_LIST_FIELD_NAME.ID]: data[USER_LIST_DATA_NAME.ID],
    [USER_LIST_FIELD_NAME.LOGIN]: data[USER_LIST_DATA_NAME.LOGIN],
    [USER_LIST_FIELD_NAME.CREATE_DATE]: data[USER_LIST_DATA_NAME.CREATE_DATE],
    [USER_LIST_FIELD_NAME.ROLE]: data[USER_LIST_DATA_NAME.ROLE],
  };
}

export function performUserListData(data) {
  return data.map(performUserData);
}
