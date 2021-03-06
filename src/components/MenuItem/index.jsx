import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import PageContext from '../../context/PageContext';

const verticalLine = css`
  content: '';
  background-color: var(--reactBlue);
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 5px;
`;

const MenuItemStyles = styled(Link)`
  align-items: center;
  background-color: ${(props) => (props.active ? 'var(--lightGrey)' : 'var(--darkGrey)')};
  border-top: 1px solid var(--lightGrey);
  color: var(--bodyColor);
  display: flex;
  font-family: var(--mainFont);
  font-size: 1.8rem;
  justify-content: center;
  max-width: 150px;
  position: relative;
  padding: 1.5rem 3.5rem;
  text-decoration: none;
  transition: background-color ease-in-out 0.2s;
  width: auto;

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

const MenuItem = ({ text, url }) => {
  const isActive = ({ isCurrent }) => (isCurrent
    ? {
      'aria-current': 'page',
    }
    : {});
  const pagePath = useContext(PageContext);

  return (
    <MenuItemStyles
      activeStyle={{ color: 'red' }}
      className={
        pagePath.replace(/(\/$)/, '') === url.replace(/(\/$)/, '')
          ? 'active'
          : ''
      }
      getProps={isActive}
      to={url}
      role="menuitem"
    >
      {text}
    </MenuItemStyles>
  );
};

export default MenuItem;
