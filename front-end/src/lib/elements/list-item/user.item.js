import styled from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';

/**
 * @param {object} props
 * @param {object} props.user
 * @param {number} props.user.id
 * @param {string} props.user.login
 */
export function ItemUser(props) {
  const { user } = props;

  return (
    <Item>
      <IDField>
        {text('USER.USER_LIST.USER_ITEM.ID')}: {user.id}
      </IDField>
      <LoginField>{user.login}</LoginField>
    </Item>
  );
}

const Item = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;

const IDField = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_SECONDARY};
`;

const LoginField = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_PRIMARY};
`;
