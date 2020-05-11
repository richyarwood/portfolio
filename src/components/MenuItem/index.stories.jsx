import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import MenuItem from '.';

export default {
  title: 'MenuItem',
  component: MenuItem,
  decorators: [withKnobs],
};

export const MenuItems = () => (
  <>
    <MenuItem
      text={text('Button text', 'Hello World')}
      active={boolean('Active', false)}
    />
  </>
);
