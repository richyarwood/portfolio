import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const linearFill = (direction) => `linear-gradient(${direction}, rgba(255,0,0,1) 0%, rgba(255,54,54,1) 100%)`;

const size = '160px';

const BigRedButtonWrapperStyles = styled.div`
  background: ${linearFill('to bottom')};
  border-radius: 50%;
  cursor: pointer;
  height: ${size};
  margin-top: 30px;
  position: relative;
  width: ${size};

  &:before {
    background: ${linearFill('to top')};
    border-radius: 50%;
    bottom: 50%;
    content: '';
    height: calc(${size} * 0.8);
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(${size} * 0.8);
  }

  & p {
    align-items: center;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-color: #c9c9c9;
    color: transparent;
    display: flex;
    font-size: var(--xxl);
    font-weight: var(--boldFont);
    height: 100%;
    justify-content: center;
    position: absolute;
    text-shadow: 0px 2px 3px rgba(255,255,255,0.5);
    top: 0;
    width: 100%;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      css={`
        margin: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h1>Don&#39;t panic. But this route doesn&#39;t exist!!</h1>
      <h3>Click the big red button if you dare</h3>
      <Link
        to="/"
      >
        <BigRedButtonWrapperStyles>
          <p>GO</p>
        </BigRedButtonWrapperStyles>
      </Link>
    </div>

  </Layout>
);

export default NotFoundPage;
