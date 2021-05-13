import React from 'react';
import styled from 'styled-components';

import { text } from '../../common/text';
import { spacing } from '../../theme';
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
  background: #f3f3f3;
  border-radius: 5px;
  padding: 5px 10px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
`;
