import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { mq } from '../../utils/presets';

import Heading from '../Heading';

const HeroStyles = styled.div`
  margin-bottom: var(--lg);
  min-height: auto;
  height: 400px;
  position: relative;
  overflow: hidden;

  ${mq.desktop} {
    margin-bottom: var(--xxl);
  }
`;

const HeroImage = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

const HeroTextWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  height: 100%;
  left: 0;
  padding: 0 5%;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroStyles>
      <HeroImage
        fluid={data.file.childImageSharp.fluid}
        alt="Richard Yarwood - Full Stack Javascript Developer"
      />
      <HeroTextWrapper>
        <div>
          <Heading color="var(--white)" as="h1" styledAs="6">
            Richard Yarwood
          </Heading>
          <Heading as="h2" styledAs="4" color="var(--reactBlue)">
            Full Stack JavaScript Developer
          </Heading>
        </div>
      </HeroTextWrapper>
    </HeroStyles>
  );
};

export default Hero;
