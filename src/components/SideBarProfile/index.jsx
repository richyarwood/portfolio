import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { mq } from '../../utils/presets';
import Heading from '../Heading';

const SideBarProfileStyles = styled.div`
  display: none;

  ${mq.tablet}{
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: var(--md);
  }
`;

const RoundImage = styled(Img)`
  border-radius: 50%;
  width: 80px;
  margin: 0 var(--sm);
`;

const SideBarProfile = () => {
  const data = useStaticQuery(graphql`
    query ProfileImageQuery {
      file(relativePath: {eq: "richard-new-portfolio-square.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <SideBarProfileStyles>
      <RoundImage
        fluid={data.file.childImageSharp.fluid}
        alt="Richard Yarwood - Full Stack Javacript Developer"
      />
      <Heading
        as="h2"
        center
        color="var(--white)"
        moreStyles={{ 'padding-top': 'var(--sm)' }}
      >
        Richard Yarwood
      </Heading>
    </SideBarProfileStyles>
  );
};

export default SideBarProfile;
