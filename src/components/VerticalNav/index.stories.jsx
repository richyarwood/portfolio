import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import VerticalNav from '.';

export default {
  title: 'Vertical Nav',
  component: VerticalNav,
  decorators: [withKnobs],
};

const menuData = [
  {
    name: 'Home',
    link: 'https://www.example.com',
  },
  {
    name: 'Posts',
    link: 'https://www.example.com',
  },
  {
    name: 'Resources',
    link: 'https://www.example.com',
  },
];

export const VerticalNavigation = () => (
  <>
    <VerticalNav
      menuItems={object('Menu Items', menuData)}
    />
  </>
);
