import React from 'react';
import styled, { css } from 'styled-components';
import { mq } from '../../utils/presets';

const headingSizes = {
  h1: 4,
  h2: 2.5,
  h3: 2,
  h4: 1.5,
};

const horizontalLine = css`
  content: '';
    background-color: var(--jsxBlue);
    bottom: -6px;
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
`;

const HeadingStyles = styled.h1`
  color: ${({ color }) => color && color};
  display: inline-block;
  font-size: ${headingSizes.h1}rem;
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  font-family: var(--condensedFont);
  line-height: initial;
  margin: 0;
  position: relative;
  text-align: ${({ center }) => center && 'center'};
  ${({ moreStyles }) => moreStyles && moreStyles};

  & :after {
    ${({ underlined }) => underlined && horizontalLine};
  }

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
