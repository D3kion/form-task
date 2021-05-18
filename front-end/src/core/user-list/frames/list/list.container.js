import React from 'react';

import { ListComponent } from './list.component';

export const ListContainer = (props) => {
  const { users } = props;

  return <ListComponent users={users} />;
};
