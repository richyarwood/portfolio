import React from 'react';
import styled from 'styled-components';

const MenuItemStyles = styled.div`
  background-color: ${(props) => (props.active ? 'var(--lightGrey)' : 'var(--darkGrey)')};
  padding: 1.5rem 3.5rem;
  color: var(--white);
  width: 150px;
  text-align: center;
  font-family: var(--condensedFont);
  font-size: var(--md);
  position: relative;
  transition: background-color ease-in-out 0.2s;

  &:hover, :active {
    background-color: var(--lightGrey);
  }

  &:hover, :active {
    :after {
      content: '';
      height: 100%;
      top: 0;
      right: 0;
      background-color: var(--jsxBlue);
      width: 5px;
      position: absolute;
    }
  }
`;

const MenuItem = ({
  text,
  active,
}) => (
  <MenuItemStyles active={active}>
    {text}
  </MenuItemStyles>
);

export default MenuItem;
