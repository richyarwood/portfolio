import React from 'react';
import styled from 'styled-components';

const DateStyles = styled.time`
  color: var(--bodyColor);
  font-size: ${({ size }) => (size ? `${size}rem` : '1.4rem')};
  margin-bottom: var(--xxs);
`;

const Date = ({
  date,
  size,
}) => (
  <DateStyles
    dateTime={date}
    size={size}
  >
    {date}
  </DateStyles>
);

export default Date;
