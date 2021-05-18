import React from 'react';
import styled from 'styled-components';

import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { ItemUser } from '../../../../lib/elements/list-item/user.item';

export function ListComponent(props) {
  const users = props.users;

  return (
    <Container>
      {users.map((user) => (
        <div key={user.id}>
          <ItemUser user={user} />
          <Divider />
        </div>
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
  margin-top: ${spacing(2)};
  color: ${THEME_COLOR.GRAY};
`;
