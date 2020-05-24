import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

const PostTemplate = ({ data }) => {
  const { title } = data.mdx.frontmatter;

  return (
    <Layout>
      <div>
        {title}
      </div>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
query MyQuery($id: String!) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      title
    }
  }
}
`;

export default PostTemplate;
