import React from 'react';
import { graphql } from 'gatsby';
import PageContext from '../context/PageContext';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';
import Heading from '../components/Heading';

const Posts = ({ data, location }) => (
  <PageContext.Provider value={location.pathname}>
    <Layout>
      <SEO
        title="Latest posts"
      />
      <div
        className="container"
      >
        <Heading
          as="h1"
          underlined
          color="var(--white)"
          marginLeft
          moreStyles={{ 'margin-bottom': 'var(--lg)' }}
        >
          Posts
        </Heading>
        <CardGrid>
          {data.allMdx.nodes.map((post) => (
            <Card
              key={post.frontmatter.id}
              title={post.frontmatter.title}
              tags={post.frontmatter.tags}
              image={post.frontmatter.image.childImageSharp.fluid}
              description={post.excerpt}
              cardUrl={`/posts/${post.frontmatter.slug}`}
            />
          ))}
        </CardGrid>
      </div>
    </Layout>
  </PageContext.Provider>
);


export const query = graphql`
query PostsPageQuery {
  allMdx(filter: {fields: {collection: {ne: "experience"}}}) {
    nodes {
      frontmatter {
        slug
        tags
        title
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt(truncate: true, pruneLength: 150)
    }
  }
}
`;

export default Posts;
