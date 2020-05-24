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
  width: 80px;
  color: var(--white);
  font-family: var(--condensedFont);
  font-size: 1.8rem;
  position: relative;
  transition: background-color ease-in-out 0.2s;
  border-top: 1px solid var(--lightGrey);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-bottom: 1px solid var(--lightGrey);
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
