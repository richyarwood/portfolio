import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
      <h1>Uh oh! This page doesn&#39;t exist</h1>
      <h3>Don&#39;t worry...</h3>
      <h3>
        <Link
          to="/"
        >
          Go to the home page
        </Link>
      </h3>
    </div>

  </Layout>
);

export default NotFoundPage;
