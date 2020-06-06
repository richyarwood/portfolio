import React from 'react';
import styled from 'styled-components';
import { mq } from '../../utils/presets';

const BoxStyles = styled.div`
  background-color: ${({ dark }) => (dark ? 'var(--darkGrey)' : 'var(--lightGrey)')};
  border-radius: 5px;
  padding: var(--sm);

  &:not(:last-child) {
    margin-bottom: var(--md);
  }

  ${mq.desktop} {
    padding: var(--lg);
  }
`;

const Box = ({ children, dark }) => (
  <BoxStyles
    dark={dark}
  >
    {children}
  </BoxStyles>
);

export default Box;
