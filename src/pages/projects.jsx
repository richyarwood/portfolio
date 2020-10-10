import React from 'react';
import { graphql } from 'gatsby';
import PageContext from '../context/PageContext';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';
import Heading from '../components/Heading';

const Projects = ({ data, location }) => (
  <PageContext.Provider value={location.pathname}>
    <Layout>
      <SEO
        title="Work and private projects"
        relativeUrl={location.pathname}
        description="Details of my work and some of my private projects."
      />
      <div className="container">
        <Heading
          as="h1"
          underlined
          marginLeft
          moreStyles={{ 'margin-bottom': 'var(--lg)' }}
        >
          Work and private projects
        </Heading>
        <CardGrid>
          {data.allMdx.nodes.map(({ frontmatter: post, excerpt }) => (
            <Card
              key={post.id}
              title={post.title}
              tags={post.tags}
              image={post.image.childImageSharp.fluid}
              description={excerpt}
              date={post.date}
              cardUrl={`/posts/${post.slug}`}
              type={post.type}
            />
          ))}
        </CardGrid>
      </div>
    </Layout>
  </PageContext.Provider>
);

export const query = graphql`
  query ProjectsPageQuery {
    allMdx(filter: { fields: { collection: { eq: "projects" } } }
    sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          type
          slug
          tags
          title
          date
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

export default Projects;
