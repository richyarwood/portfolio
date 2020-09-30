import React from 'react';
import styled from 'styled-components';

const CardGridWrapper = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (20px 1fr)[auto-fill];
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px 30px;
`;

const CardGrid = ({ children }) => (
  <CardGridWrapper>
    {children}
  </CardGridWrapper>
);

export default CardGrid;
