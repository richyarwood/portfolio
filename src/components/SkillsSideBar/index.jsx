import React from 'react';
import styled from 'styled-components';
import Box from '../Box';
import Heading from '../Heading';

const SkillsParagraph = styled.p`
  color: var(--white);
  font-size: var(--sm);
  font-family: var(--mainFont);
  line-height: 22px;
`;

const SkillsHeading = ({ children }) => (
  <Heading
    as="h4"
    moreStyles={{
      'margin-bottom': 'var(--xxs)',
      'margin-top': 'var(--sm)',
    }}
  >
    {children}
  </Heading>
);

const SkillsSideBar = () => (
  <>
    <Box>
      <Heading
        as="h3"
        underlined
        color="var(--white)"
      >
        Core skills
      </Heading>
      <Heading
        as="h4"
        moreStyles={{
          'margin-bottom': 'var(--xxs)',
          'margin-top': 'var(--sm)',
        }}
      >
        Technologies and frameworks
      </Heading>
      <SkillsParagraph>
        JavaScript | React | Nodejs | Express | Sass | Gatsbyjs | GraphQL
      </SkillsParagraph>
      <SkillsHeading>
        Testing
      </SkillsHeading>
      <SkillsParagraph>
        Jest | Enzyme | React Testing Library | ArtilleryIO
      </SkillsParagraph>
      <SkillsHeading>
        Supporting skills
      </SkillsHeading>
      <SkillsParagraph>
        BEM | Atomic Design | Git and GitHub | Sketch and Balsamiq wireframing
        | JIRA, Trello and Confluence | Google Analytics and Google Tag Manager
        | Domain Management
      </SkillsParagraph>
      <SkillsHeading>
        Workflow and soft skills
      </SkillsHeading>
      <SkillsParagraph>
        Code reviews | Pair programming | Agile development and Scrum |
        Excellent verbal and written communication | Collaborative
        working and used to working with multidisciplinary teams | Presentation skills
      </SkillsParagraph>
    </Box>
    <Box>
      <Heading
        as="h3"
        underlined
      >
        Working knowledge
      </Heading>
      <SkillsHeading>
        Technologies and frameworks
      </SkillsHeading>
      <SkillsParagraph>
        Python | Django | MongoDB | PostgreSQL | Flask
      </SkillsParagraph>
      <SkillsHeading>
        Testing
      </SkillsHeading>
      <SkillsParagraph>
        Cypress | WebDriverIO
      </SkillsParagraph>
    </Box>
  </>
);

export default SkillsSideBar;
