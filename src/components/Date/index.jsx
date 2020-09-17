import React from 'react';
import styled from 'styled-components';

const TimeStyles = styled.time`
  color: var(--white);
  font-size: ${({ size }) => (size ? `${size}rem` : '1.2rem')};
  margin-bottom: var(--xxs);
`;

const Date = ({ date, size }) => (
  <TimeStyles dateTime={date} size={size}>
    {date}
  </TimeStyles>
);

export default Date;
