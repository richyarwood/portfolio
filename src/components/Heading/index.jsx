import React from 'react';
import styled, { css } from 'styled-components';
import { mq } from '../../utils/presets';

const headingSizes = {
  h1: 4,
  h2: 2.5,
  h3: 2,
  h4: 1.5,
};

const HeadingStyles = styled.h1`
  border-bottom: ${({ underlined }) => underlined && '2px solid var(--jsxBlue)'};
  color: ${({ color }) => (color && color ? color : 'var(--white)')};
  display: ${({ underlined }) => (underlined ? 'inline-block' : '')};
  font-size: ${headingSizes.h1}rem;
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  line-height: initial;
  margin: 0;
  padding-bottom: ${({ underlined }) => (underlined ? 'var(--xxs)' : '')};
  position: relative;
  text-align: ${({ center }) => center && 'center'};
  ${({ moreStyles }) => moreStyles && moreStyles};

  ${mq.tablet} {
    margin-left: ${({ marginLeft }) => marginLeft && 'var(--md)'};
  }
`;

const Heading = ({
  as,
  center,
  children,
  color,
  marginLeft,
  moreStyles,
  underlined,
}) => (
  <HeadingStyles
    as={as}
    color={color}
    center={center}
    marginLeft={marginLeft}
    moreStyles={moreStyles}
    underlined={underlined}
  >
    {children}
  </HeadingStyles>
);

export default Heading;
