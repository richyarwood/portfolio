import React from 'react';
import styled from 'styled-components';
import MenuItem from '../MenuItem';

const VerticalNavStyles = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  margin: 0;
`;

const VerticalNav = ({ menuItems }) => (
  <VerticalNavStyles role="menubar">
    {menuItems.map((item) => (
      <MenuItem
        text={item.name}
        url={item.link}
        key={item.name}
      />
    ))}
  </VerticalNavStyles>
);

export default VerticalNav;
