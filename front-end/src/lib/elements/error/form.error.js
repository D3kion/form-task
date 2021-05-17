import styled from 'styled-components';

import { text } from '../../common/text';
import { THEME_COLOR } from '../../theme';

export function ErrorForm(props) {
  const { errorTid } = props;

  return <ErrorMessage>{text(`ERROR.${errorTid}`)}</ErrorMessage>;
}

const ErrorMessage = styled.span`
  color: ${THEME_COLOR.TEXT_DANGER};
`;
