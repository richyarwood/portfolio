import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { mq } from '../../utils/presets';

const size = 20;

const HamburgerStyles = styled.button`
  background-color: var(--darkGrey);
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 3px 1px 4px -1px rgba(0, 0, 0, 0.7);
  left: ${({ left }) => left && left};
  padding: var(--xs);
  position: absolute;
  top: ${({ top }) => top && top};
  z-index: 300;

  ${mq.tablet} {
    display: none;
  }
`;

const Hamburger = ({ top, left, onClick }) => (
  <IconContext.Provider value={{ color: 'var(--bodyColor)', size: `${size}px` }}>
    <HamburgerStyles
      top={top}
      left={left}
      onClick={onClick}
    >
      <AiOutlineMenu />
    </HamburgerStyles>
  </IconContext.Provider>
);

export default Hamburger;
