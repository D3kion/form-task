import { httpRequest } from '../../main/http';

import { USER_LIST_API } from './user-list.constant';
import { USER_LIST_ACTION_TYPE } from './user-list.type';

export function userListLoadAllUsers() {
  return async (dispatch) => {
    dispatch({
      type: USER_LIST_ACTION_TYPE.USER_LIST_LOAD_PENDING,
    });

    try {
      const { data } = await httpRequest({
        method: USER_LIST_API.GET_ALL_USERS.METHOD,
        url: USER_LIST_API.GET_ALL_USERS.ENDPOINT,
      });

      dispatch({
        type: USER_LIST_ACTION_TYPE.USER_LIST_LOAD_SUCCESS,
        data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: USER_LIST_ACTION_TYPE.USER_LIST_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
