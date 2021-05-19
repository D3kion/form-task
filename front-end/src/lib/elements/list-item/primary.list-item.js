import styled from 'styled-components';

import { TextPrimary, TextSecondary } from '../text';
import { spacing } from '../../theme';

export function ListItemPrimary(props) {
  const { titleTid, titleTvalue, valueTid, valueTvalue } = props;

  return (
    <Item>
      <TextSecondary tid={titleTid} tvalue={titleTvalue} />
      <TextPrimary tid={valueTid} tvalue={valueTvalue} />
    </Item>
  );
}

const Item = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;
