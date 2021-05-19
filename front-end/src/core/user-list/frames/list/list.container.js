import React from 'react';

import { text } from '../../../../lib/common/text';

import { ListComponent } from './list.component';

export const ListContainer = (props) => {
  const { users } = props;

  if (!users.length) {
    return <span>{text('USER.USER_LIST.EMPTY_USERS')}</span>;
  }

  return <ListComponent users={users} />;
};
