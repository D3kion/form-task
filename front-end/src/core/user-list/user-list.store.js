import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { USER_LIST_ACTION_TYPE } from './user-list.type';

const initialState = {
  userList: { ...initRequestState(), users: [] },
};

export function userListStore(state = initialState, action) {
  switch (action.type) {
    case USER_LIST_ACTION_TYPE.USER_LIST_LOAD_PENDING:
      return {
        ...state,
        userList: setRequestPending(state.userList),
      };

    case USER_LIST_ACTION_TYPE.USER_LIST_LOAD_SUCCESS:
      return {
        ...state,
        userList: setRequestSuccess(state.userList),
      };

    case USER_LIST_ACTION_TYPE.USER_LIST_LOAD_ERROR:
      return {
        ...state,
        userList: setRequestError(state.userList, action.errorMessage),
      };
    case USER_LIST_ACTION_TYPE.USER_LIST_SET_DATA:
      return {
        ...state,
        userList: { users: action.users },
      };

    default:
      return state;
  }
}
