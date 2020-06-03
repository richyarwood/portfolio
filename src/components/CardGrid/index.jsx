import React from 'react';
import styled from 'styled-components';
import { mq } from '../../utils/presets';

const CardGridWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

${mq.phablet} {
  flex-direction: row;
  flex-wrap: wrap;
}


`;

const CardGrid = ({ children }) => (
  <CardGridWrapper>
    {children}
  </CardGridWrapper>
);

export default CardGrid;

// const projectsArray = projects.reduce((acc, item) => {
//   const currentRow = acc[acc.length - 1];

//   if (currentRow.length < 3) {
//     currentRow.push(item);
//   } else {
//     acc.push([item]);
//   }

//   return acc;
// }, [[]]);
