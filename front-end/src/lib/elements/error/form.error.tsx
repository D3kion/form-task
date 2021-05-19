import styled from 'styled-components';

import { text } from '../../common/text';
import { THEME_COLOR } from '../../theme';

import { ErrorPropsType } from './error.type';

export function ErrorForm(props: ErrorPropsType) {
  const { errorTid } = props;

  return <ErrorMessage>{text(`ERROR.${errorTid}`)}</ErrorMessage>;
}

const ErrorMessage = styled.span`
  color: ${THEME_COLOR.TEXT_DANGER};
`;
