import styled from 'styled-components';

import { text } from '../../common/text';
import { THEME_COLOR, THEME_SIZE } from '../../theme';

/**
 * @param {object} props
 * @param {string} props.tid
 */
export function ButtonPrimary(props) {
  const { tid, ...rest } = props;

  return <Button {...rest}>{text(tid)}</Button>;
}

const Button = styled.button`
  background: ${THEME_COLOR.BUTTON_PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.BUTTON};
`;
