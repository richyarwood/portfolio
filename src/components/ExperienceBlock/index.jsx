import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading';

const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: var(--lg);
  position: relative;
`;

const ExperienceLeftSide = styled.div`
  color: var(--white);
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
    border: 2px solid var(--jsxBlue);
    border-radius: 10px;
    content: "";
    display: block;
    height: 11px;
    margin-left: -7px;
    margin-top: 5px;
    width: 11px;
  }
`;

const ExperienceRightSide = styled.div`
  color: var(--white);
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
        color="var(--jsxBlue)"
      >
        {date}
      </Heading>
      <p css={`
      color: var(--white);
      font-size: var(--sm);
      margin-top: var(--xs);
    `}
      >
        {company}
      </p>
    </ExperienceLeftSide>
    <ExperienceDivider />
    <ExperienceRightSide>
      <Heading
        as="h2"
        color="var(--jsxBlue)"
        styledAs="2"
      >
        {title}
      </Heading>
      <p css={`
      color: var(--white);
      font-size: var(--sm);
      margin-top: var(--xs);
    `}
      >
        {summary}
      </p>
    </ExperienceRightSide>
  </ExperienceItemWrapper>
);

export default ExperienceBlock;
