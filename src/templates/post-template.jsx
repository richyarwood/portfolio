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
import OverlayIcon from '../components/OverlayIcon';

const PostBody = styled.div`
  font-size: var(--md);
  margin: var(--sm);
  transform: translateY(-100px);

  & p {
  }

  ${mq.desktop} {
    margin: var(--lg);
  }
`;

const PostImage = styled(Img)`
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 350px;
`;

const PostTagsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: var(--lg);
`;

const PostTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div:not(:last-child) {
    margin-right: var(--xxs);
  }
`;

const PostTemplate = ({ data, location }) => {
  const {
    title, tags, type, image,
  } = data.mdx.frontmatter;
  const pagePath = location.pathname.replace(/^.*\//, '');

  const filterItems = (items) => items
    .filter((item) => item.node.frontmatter.slug !== pagePath)
    .map((item) => ({ id: item.node.id, ...item.node.frontmatter }));

  return (
    <Layout>
      <SEO
        title={title}
        relativeUrl={location.pathname}
        description={data.mdx.excerpt}
      />
      <PageWrapper>
        <div>
          {data.mdx.frontmatter.image && (
            <PostImage
              fluid={image.childImageSharp.fluid}
              alt={title}
            />
          )}
          <PostBody>
            <Box dark>
              <PostTagsWrapper>
                {tags && (
                  <PostTags>
                    {tags.map((tag) => (
                      <Tag key={tag} choice={tag} />
                    ))}
                  </PostTags>
                )}
                <OverlayIcon type={type} />
              </PostTagsWrapper>
              <Heading
                moreStyles={{ 'padding-bottom': '20px' }}
              >
                {title}
              </Heading>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Box>
          </PostBody>
        </div>
        <RightSideWrapper>
          {data.posts.edges.length
          && (
            <SideBarWidget
              heading="More posts"
              items={filterItems(data.posts.edges)}
            />
          )}
          {data.projects.edges.length
          && (
            <SideBarWidget
              heading="Projects"
              items={filterItems(data.projects.edges)}
            />
          )}
        </RightSideWrapper>
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      frontmatter {
        type
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
          id
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
          id
        }
      }
    }
  }
`;

export default PostTemplate;
