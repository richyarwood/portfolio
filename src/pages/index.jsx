import React from 'react';
import { graphql } from 'gatsby';
import PageContext from '../context/PageContext';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';
import Heading from '../components/Heading';

const IndexPage = ({ data, location }) => (
  <PageContext.Provider value={location.pathname}>
    <Layout noPaddingTop>
      <SEO
        title="Full Stack JavaScript Developer"
        relativeUrl={location.pathname}
        description="I'm a front end developer based in London, working on large scale React tech stacks. Have a look at some of my work and read some top tips."
      />
      <Hero />
      <div className="container">
        <Heading
          as="h2"
          underlined
          marginLeft="var(--md)"
          moreStyles={{ 'margin-bottom': 'var(--lg)' }}
        >
          Latest posts and projects
        </Heading>
        {data && (
          <CardGrid>
            {data.allMdx.nodes.map((post) => (
              <Card
                key={post.id}
                title={post.frontmatter?.title}
                alt={post.frontmatter?.title}
                tags={post.frontmatter?.tags}
                image={post.frontmatter?.image?.childImageSharp?.fluid}
                description={post.frontmatter?.excerpt}
                cardUrl={`/posts/${post.frontmatter?.slug}`}
                date={post.frontmatter?.date}
                type={post.frontmatter?.type}
              />
            ))}
          </CardGrid>
        )}
      </div>
    </Layout>
  </PageContext.Provider>
);

export const query = graphql`
  query HomeLatestPosts {
    allMdx(
      filter: { fields: { collection: { regex: "/posts|projects/" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          type
          slug
          tags
          title
          excerpt
          date
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`;

export default IndexPage;
