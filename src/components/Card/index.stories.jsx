import React from 'react';
import Card from '.';

export default {
  title: 'Card',
  component: Card,
};

const data = {
  imageUrl: 'https://images.unsplash.com/photo-1565279427445-10c13a1d1f82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  title: 'This is a title',
  description: 'This is some text which will be truncated when the data is passed through...',
  tags: [
    'css',
    'html',
    'jsx',
    'js',
  ],
};

export const CardDefault = () => (
  <>
    <Card
      imageUrl={data.imageUrl}
      title={data.title}
      description={data.description}
      tags={data.tags}
    />
  </>
);
