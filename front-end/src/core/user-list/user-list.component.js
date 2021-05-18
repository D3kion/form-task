import React from 'react';
import styled from 'styled-components';

import { text } from '../../lib/common/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { LoaderForm } from '../../lib/elements/loader/form.loader';

import { ListContainer } from './frames/list';

export function UserListComponent(props) {
  const { isPending, isSuccess, users } = props;

  const isUsersEmpty = () => {
    return isSuccess && !users.length;
  };

  return (
    <Container>
      <SectionName>Users list</SectionName>
      {isPending && <LoaderForm tid="USER.USER_LIST.LOADING" />}
      {isUsersEmpty() && <span>{text('USER.USER_LIST.EMPTY_USERS')}</span>}
      {!isUsersEmpty() && <ListContainer {...props} />}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(4)};
  padding-top: ${spacing(9)};
`;

const SectionName = styled.span`
  font-weight: 700;
  font-size: ${THEME_SIZE.FONT.LARGE};
  color: ${THEME_COLOR.TEXT_PRIMARY};
`;
