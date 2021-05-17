import styled from 'styled-components';

import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export const ButtonPrimary = styled.button`
  background: ${THEME_COLOR.BUTTON_PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.BUTTON};
`;
