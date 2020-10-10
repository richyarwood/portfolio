import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Heading from '../Heading';
import Box from '../Box';

const PostLink = styled(Link)`
  color: var(--bodyColor);
  display: block;
  font-size: var(--sm);
  margin: var(--xs) 0;
`;

const SideBarWidget = ({ heading, items }) => (
  <Box>
    <Heading
      as="h3"
      moreStyles={{ 'margin-bottom': 'var(--sm)' }}
      underlined
    >
      {heading}
    </Heading>
    {items.map((item) => (
      <PostLink
        key={item.id}
        to={`/posts/${item.slug}`}
      >
        {item.title}
      </PostLink>
    ))}
  </Box>
);

export default SideBarWidget;
