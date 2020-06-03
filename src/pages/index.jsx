import React from 'react';
import { graphql } from 'gatsby';
import PageContext from '../context/PageContext';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';
import Heading from '../components/Heading';

const IndexPage = ({ data, location }) => (
  <PageContext.Provider value={location.pathname}>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <div
        className="container"
      >
        <Heading
          as="h2"
          underlined
          color="var(--white)"
          marginLeft="var(--md)"
          moreStyles={{ 'margin-bottom': 'var(--lg)' }}
        >
          Latest posts
        </Heading>
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

      </div>
    </Layout>
  </PageContext.Provider>

);


export const query = graphql`
query HomeLatestPosts {
  allMdx(limit: 4) {
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

export default IndexPage;
