import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation';
import { authSetData } from '../../lib/common/auth';

import {
  SIGNUP_API,
  SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH,
} from './signup.constant';
import { SIGNUP_ACTION_TYPE } from './signup.type';

export function signupFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: SIGNUP_API.SIGNUP_FORM_UPLOAD.METHOD,
        url: SIGNUP_API.SIGNUP_FORM_UPLOAD.ENDPOINT,
        data,
      });

      dispatch(authSetData(res.data.accessToken));

      dispatch({
        type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS,
      });

      redirect(SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
