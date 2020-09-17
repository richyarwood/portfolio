import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { mq } from '../utils/presets';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PageWrapper, RightSideWrapper } from '../components/SectionWrappers';
import Heading from '../components/Heading';
import Box from '../components/Box';
import SideBarWidget from '../components/SideBarWidget';
import Tag from '../components/Tag';

const PostBody = styled.div`
  font-size: var(--md);
  color: var(--white);
  font-weight: var(--lightFont);
  margin: var(--sm);
  transform: translateY(-100px);

  & p {
  }

  ${mq.desktop} {
    margin: var(--lg);
  }
`;

const PostImage = styled(Img)`
  height: 350px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

const PostTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: var(--lg);

  & > div:not(:last-child) {
    margin-right: var(--xxs);
  }
`;

const PostTemplate = ({ data, location }) => {
  const { title, tags } = data.mdx.frontmatter;
  const pagePath = location.pathname.replace(/^.*\//, '');

  const filterItems = (items) => items
    .filter((item) => item.node.frontmatter.slug !== pagePath)
    .map((item) => item.node.frontmatter);

  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} relativeUrl={location.pathname} />
      <PageWrapper>
        <div>
          {data.mdx.frontmatter.image && (
            <PostImage
              fluid={data.mdx.frontmatter.image.childImageSharp.fluid}
            />
          )}
          <PostBody>
            <Box dark>
              {tags && (
                <PostTags>
                  {tags.map((tag) => (
                    <Tag key={tag} choice={tag} />
                  ))}
                </PostTags>
              )}
              <Heading
                color="var(--white)"
                moreStyles={{ 'padding-bottom': '20px' }}
              >
                {title}
              </Heading>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Box>
          </PostBody>
        </div>
        <RightSideWrapper>
          <SideBarWidget
            heading="More posts"
            items={filterItems(data.posts.edges)}
          />
          <SideBarWidget
            heading="Projects"
            items={filterItems(data.projects.edges)}
          />
        </RightSideWrapper>
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        slug
        date
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    posts: allMdx(
      limit: 10
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            tags
          }
        }
      }
    }
    projects: allMdx(
      limit: 10
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            tags
          }
        }
      }
    }
  }
`;

export default PostTemplate;
