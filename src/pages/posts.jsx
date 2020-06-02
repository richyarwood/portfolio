import React from 'react';
import { graphql } from 'gatsby';
import PageContext from '../context/PageContext';
import Layout from '../components/Layout';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';

const Posts = ({ data, location }) => (
  <PageContext.Provider value={location.pathname}>
    <Layout>
      <CardGrid>
        {data.allMdx.edges.map(({ node: post }) => (
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
    </Layout>
  </PageContext.Provider>
);


export const query = graphql`
query CardGridQuery {
  allMdx {
    edges {
      node {
        frontmatter {
          id
          slug
          tags
          title
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
}
`;

export default Posts;
