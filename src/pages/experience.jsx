import React from 'react';
import { graphql } from 'gatsby';
import PageContext from '../context/PageContext';
import { mq } from '../utils/presets';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PageWrapper, RightSideWrapper } from '../components/SectionWrappers';
import Heading from '../components/Heading';
import ExperienceBlock from '../components/ExperienceBlock';
import SkillsSideBar from '../components/SkillsSideBar';

const Experience = ({ data, location }) => (
  <PageContext.Provider value={location.pathname}>
    <Layout>
      <SEO
        title="Work and coding experience"
        relativeUrl={location.pathname}
        description="Read about my career, skills and experience in digital development."
      />
      <PageWrapper>
        <div
          css={`
            margin: 0 var(--md);

            ${mq.tablet} {
              margin: 0 var(--lg);
            }
          `}
        >
          <Heading
            as="h1"
            underlined
            color="var(--white)"
            marginLeft
            moreStyles={{ 'margin-bottom': 'var(--lg)' }}
          >
            Work Experience and Programming Skills
          </Heading>

          {data.allMdx.nodes.map((item) => (
            <ExperienceBlock
              key={item.frontmatter.employment_period}
              company={item.frontmatter.company}
              date={item.frontmatter.employment_period}
              title={item.frontmatter.job_title}
              summary={item.body}
            />
          ))}
        </div>
        <RightSideWrapper>
          <SkillsSideBar />
        </RightSideWrapper>
      </PageWrapper>
    </Layout>
  </PageContext.Provider>
);

export const query = graphql`
  query ExperienceQuery {
    allMdx(
      filter: { fields: { collection: { eq: "experience" } } }
      sort: { fields: frontmatter___start, order: DESC }
    ) {
      nodes {
        frontmatter {
          company
          employment_period
          job_title
        }
        body
      }
    }
  }
`;

export default Experience;
