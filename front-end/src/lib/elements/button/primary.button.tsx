import styled from 'styled-components';

import { text } from '../../common/text';
import { THEME_COLOR, THEME_SIZE } from '../../theme';

import { ButtonPropsType } from './button.type';

export function ButtonPrimary(props: ButtonPropsType) {
  const { tid, tvalue, ...rest } = props;

  return <Button {...rest}>{text(tid, tvalue)}</Button>;
}

const Button = styled.button`
  background: ${THEME_COLOR.BUTTON_PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.BUTTON};
`;
