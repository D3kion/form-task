import React from 'react';
import styled from 'styled-components';

import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { ListItemPrimary } from '../../../../lib/elements/list-item/primary.list-item';

export function ListComponent(props) {
  const users = props.users;

  return (
    <Container>
      {users.map((user) => (
        <Container key={user.id}>
          <ListItemPrimary
            titleTid="USER.USER_LIST.USER_ITEM.ID"
            titleTvalue={{ userId: user.id }}
            valueTid="USER.USER_LIST.USER_ITEM.LOGIN"
            valueTvalue={{ login: user.login }}
          />
          <Divider />
        </Container>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const Divider = styled.hr`
  margin: 0;
  color: ${THEME_COLOR.GRAY};
`;
