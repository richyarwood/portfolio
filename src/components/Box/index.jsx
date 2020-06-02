import React from 'react';
import styled from 'styled-components';

const BoxStyles = styled.div`
  background-color: var(--lightGrey);
  border-radius: 5px;
  padding: var(--lg);

  &:not(:last-child) {
    margin-bottom: var(--md);
  }
`;

const Box = ({ children }) => (
  <BoxStyles>
    {children}
  </BoxStyles>
);

export default Box;
