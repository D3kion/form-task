import styled from 'styled-components';

import { THEME_COLOR } from '../../theme';

export function Error(props) {
  return <ErrorMessage>{props.children}</ErrorMessage>;
}

const ErrorMessage = styled.span`
  color: ${THEME_COLOR.TEXT_DANGER};
`;
