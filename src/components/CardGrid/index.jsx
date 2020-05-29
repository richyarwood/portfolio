import React from 'react';
import styled from 'styled-components';

const CardGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 3%;
`;

const CardGrid = ({ children }) => (
  <CardGridWrapper>
    {children}
  </CardGridWrapper>
);

export default CardGrid;
