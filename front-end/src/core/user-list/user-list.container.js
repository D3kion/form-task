import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestData,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { userListLoadAllUsers } from './user-list.action';
import { UserListComponent } from './user-list.component';
import { USER_LIST_STORE_NAME } from './user-list.constant';

export function UserListContainer() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state[USER_LIST_STORE_NAME]);

  useEffect(() => {
    dispatch(userListLoadAllUsers());
  }, []);

  return (
    <UserListComponent
      users={getRequestData(userList, [])}
      isPending={isRequestPending(userList)}
      isSuccess={isRequestSuccess(userList)}
    />
  );
}
