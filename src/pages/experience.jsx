import React from 'react';
import { graphql } from 'gatsby';
import PageContext from '../context/PageContext';
import Layout from '../components/Layout';
import { PageWrapper, RightSideWrapper } from '../components/SectionWrappers';
import Heading from '../components/Heading';
import ExperienceBlock from '../components/ExperienceBlock';
import Box from '../components/Box';

const Experience = ({ data, location }) => (
  <PageContext.Provider value={location.pathname}>
    <Layout>
      <PageWrapper>
        <div
          css={`
            margin-left: var(--lg);
          `}
        >
          <Heading
            as="h1"
            underlined
            color="var(--white)"
            marginLeft
            moreStyles={{ 'margin-bottom': 'var(--lg)' }}
          >
            Experience
          </Heading>

          {data.allMdx.edges.map(({ node: experience }) => (
            <ExperienceBlock
              key={experience.frontmatter.employment_period}
              company={experience.frontmatter.company}
              date={experience.frontmatter.employment_period}
              title={experience.frontmatter.job_title}
              summary={experience.frontmatter.experience_summary}
            />
          ))}
        </div>
        <RightSideWrapper>
          <Box>
            Some text in here
          </Box>
        </RightSideWrapper>
      </PageWrapper>
    </Layout>
  </PageContext.Provider>
);


export const query = graphql`
query ExperienceQuery {
  allMdx(filter: {fields: {collection: {eq: "experience"}}}) {
    edges {
      node {
        frontmatter {
          company
          employment_period
          experience_summary
          job_title
        }
      }
    }
  }
}
`;

export default Experience;
