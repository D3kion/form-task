import React from 'react';
import styled from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text';

import { FieldPrimaryPropsType } from './field.type';

export function FieldPrimary(props: FieldPrimaryPropsType) {
  const { titleTid, placeholderTid, onChange, onBlur, value, name, error } =
    props;

  return (
    <Container>
      <Title tid={titleTid} />
      <Input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(placeholderTid)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(TextSecondary)`
  margin-bottom: ${spacing(1)};
`;

const Input = styled.input`
  background: ${THEME_COLOR.INPUT_PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.FIELD};
  padding: ${spacing(1.25)} ${spacing(2.5)};
`;

const ErrorMessage = styled.span`
  color: ${THEME_COLOR.TEXT_DANGER};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
