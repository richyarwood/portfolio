import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Box from '../components/Box';
import SideBarWidget from '../components/SideBarWidget';
import Tag from '../components/Tag';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 2300px;
`;

const PostBody = styled.div`
  font-size: var(--sm);
  color: var(--white);
  font-family: var(--mainFont);
  font-weight: var(--regularFont);
  line-height: 30px;
  margin: var(--lg);
  transform: translateY(-100px);

  & p {
    margin-bottom: var(--md);
  }
`;

const PostImage = styled(Img)`
  height: 350px;
  border-bottom-right-radius: 5px;
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

const RightSideWrapper = styled.div`
  min-width: 300px;
  height: 100vh;
  margin: var(--md);
`;

const PostTemplate = ({ data, location }) => {
  const { title, tags } = data.mdx.frontmatter;
  const pagePath = location.pathname.replace(/^.*\//, '');

  const filterItems = (items) => items
    .filter((item) => item.node.frontmatter.slug !== pagePath)
    .map((item) => item.node.frontmatter);

  return (
    <Layout>
      <PostWrapper>
        <div>
          {data.mdx.frontmatter.image && (
            <PostImage
              fluid={data.mdx.frontmatter.image.childImageSharp.fluid}
            />
          )}
          <PostBody>
            <Box>
              <PostTags>
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    choice={tag}
                  />
                ))}
              </PostTags>
              <Heading
                color="var(--white)"
                moreStyles={{ 'padding-bottom': '20px' }}
              >
                {title}
              </Heading>
              <MDXRenderer>
                {data.mdx.body}
              </MDXRenderer>
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
      </PostWrapper>
    </Layout>
  );
};

export const query = graphql`
query MyQuery($id: String!) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      id
      title
      tags
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  posts: allMdx(limit: 10, filter: {fields: {collection: {eq: "posts"}}}) {
    edges {
      node {
        frontmatter {
          id
          slug
          title
          tags
        }
      }
    }
  }
  projects: allMdx(limit: 10, filter: {fields: {collection: {eq: "projects"}}}) {
    edges {
      node {
        frontmatter {
          id
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
