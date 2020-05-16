import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const verticalLine = css`
      content: '';
      height: 100%;
      top: 0;
      right: 0;
      background-color: var(--jsxBlue);
      width: 5px;
      position: absolute;
      `;

const MenuItemStyles = styled(Link)`
  background-color: ${(props) => (props.active ? 'var(--lightGrey)' : 'var(--darkGrey)')};
  padding: 1.5rem 3.5rem;
  color: var(--white);
  width: 150px;
  color: var(--white);
  font-family: var(--condensedFont);
  font-size: var(--md);
  position: relative;
  transition: background-color ease-in-out 0.2s;
  border-top: 2px solid var(--jsxBlue);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-bottom: 2px solid var(--jsxBlue);
  }

  &.active,
  &:hover,
  &:active,
  &:focus {
    background-color: var(--lightGrey);
    :after {
      ${verticalLine};
    }
  }
`;

const MenuItem = ({
  text,
  url,
}) => {
  const isActive = ({ isCurrent }) => (
    isCurrent ? {
      'aria-current': 'page',
    } : {}
  );
  return (
    <MenuItemStyles
      activeClassName="active"
      to={url}
      role="menuitem"
      getProps={isActive}
    >
      {text}
    </MenuItemStyles>
  );
};

export default MenuItem;
