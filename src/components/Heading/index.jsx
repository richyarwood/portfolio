import React from 'react';
import styled from 'styled-components';

const headingSizes = {
  h1: 4,
  h2: 2.5,
  h3: 1.5,
  h4: 1,
};

const HeadingStyles = styled.h1`
  font-size: ${headingSizes.h1}rem;
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  font-family: var(--condensedFont);
  color: ${({ color }) => color && color};
  margin: 0;
  text-align: ${({ center }) => center && 'center'};
  ${(props) => props.moreStyles && props.moreStyles};
`;

const Heading = ({
  as,
  center,
  children,
  color,
  moreStyles,
}) => (
  <HeadingStyles
    as={as}
    color={color}
    center={center}
    moreStyles={moreStyles}
  >
    {children}
  </HeadingStyles>
);

export default Heading;
