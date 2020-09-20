import React from 'react';
import styled from 'styled-components';
import { mq } from '../../utils/presets';

const HeadingStyles = styled.h1`
  border-bottom: ${({ underlined }) => underlined && '2px solid var(--reactBlue)'};
  color: ${({ color }) => (color && color ? color : 'var(--white)')};
  display: ${({ underlined }) => (underlined ? 'inline-block' : '')};
  font-family: var(--mainFont);
  font-size: ${({ styledAs }) => styledAs && `${styledAs}rem`};
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
  styledAs,
  underlined,
}) => (
  <HeadingStyles
    as={as}
    center={center}
    color={color}
    marginLeft={marginLeft}
    moreStyles={moreStyles}
    styledAs={styledAs}
    underlined={underlined}
  >
    {children}
  </HeadingStyles>
);

export default Heading;
