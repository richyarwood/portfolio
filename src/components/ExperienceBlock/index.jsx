import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Heading from '../Heading';

const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: var(--lg);
  position: relative;
`;

const ExperienceLeftSide = styled.div`
  padding-right: var(--md);
  text-align: right;
  width: 30%;
`;

const ExperienceDivider = styled.div`
  background-color: var(--lightGrey);
  bottom: 0;
  left: 30%;
  position: absolute;
  top: 0;
  width: 1px;

  :after {
    background-color: var(--darkGrey);
    border: 2px solid var(--reactBlue);
    border-radius: 10px;
    content: '';
    display: block;
    height: 11px;
    margin-left: -7px;
    margin-top: 5px;
    width: 11px;
  }
`;

const ExperienceRightSide = styled.div`
  padding-left: var(--md);
  width: 70%;
`;

const ExperienceBlock = ({
  title,
  date,
  summary,
  company,
}) => (
  <ExperienceItemWrapper>
    <ExperienceLeftSide>
      <Heading
        as="h2"
        styledAs="2"
        color="var(--reactBlue)"
      >
        {date}
      </Heading>
      <p
        css={`
          font-size: var(--sm);
          margin-top: var(--xs);
          font-weight: var(--regularFont);
        `}
      >
        {company}
      </p>
    </ExperienceLeftSide>
    <ExperienceDivider />
    <ExperienceRightSide>
      <Heading
        as="h2"
        styledAs="2"
        color="var(--reactBlue)"
      >
        {title}
      </Heading>
      <p
        css={`
          font-size: var(--sm);
          margin-top: var(--xs);
        `}
      >
        <MDXRenderer>
          {summary}
        </MDXRenderer>
      </p>
    </ExperienceRightSide>
  </ExperienceItemWrapper>
);

export default ExperienceBlock;
