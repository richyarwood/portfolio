import React from 'react';
import styled from 'styled-components';
import MenuItem from '../MenuItem';

const VerticalNavStyles = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const VerticalNav = ({ menuItems }) => (
  <VerticalNavStyles>
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
