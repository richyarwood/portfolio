import React from 'react';
import styled from 'styled-components';
import { mq } from '../../utils/presets';

const PageWrapperStyles = styled.div`
  display: flex;
  flex-direction: row;

  > div:first-child {
    max-width: 800px;
    width: auto;
  }
`;

const RightSideWrapperStyles = styled.div`
  display: none;

  ${mq.desktop} {
    display: block;
    min-width: 250px;
    margin: 0 var(--md);
    max-width: 300px;
    width: 100%;
  }
`;

export const PageWrapper = ({ children }) => (
  <PageWrapperStyles>
    {children}
  </PageWrapperStyles>
);

export const RightSideWrapper = ({ children }) => (
  <RightSideWrapperStyles>
    {children}
  </RightSideWrapperStyles>
);
