import styled from 'styled-components';

import { text } from '../../common/text';
import { THEME_SIZE, THEME_COLOR } from '../../theme';

import { TextPropsType } from './text.type';

export function TextPrimary(props: TextPropsType) {
  return <Text>{text(props.tid, props.tvalue)}</Text>;
}

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_PRIMARY};
`;
