import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { mq } from '../../utils/presets';

import Heading from '../Heading';

const HeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--lg);
  min-height: auto;
  max-height: auto;

  ${mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: var(--xxl);
  }

  ${mq.xl} {
    max-height: 550px;
  }
`;

const HeroImage = styled(Img)`
  width: 100%;

  ${mq.desktop} {
    width: 50%;
  }
`;

const HeroTextWrapper = styled.div`
  background-color: var(--lightGrey);
  padding: 0 5%;
  width: 100%;

  ${mq.desktop} {
    width: 50%;
  }
`;

const HeroTextContent = styled.div`
  padding: var(--lg) 0;
`;

const HeroText = styled.div`
  color: var(--white);
  font-size: 2rem;
  font-weight: var(--lightFont);
  line-height: 2.5rem;
  margin-top: var(--md);

  > p {
    padding-bottom: var(--xs);
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      file(relativePath: {eq: "richard-new-portfolio.jpg"}) {
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
        <HeroTextContent>
          <Heading
            color="var(--white)"
          >
            Richard Yarwood
          </Heading>
          <Heading
            as="h2"
            color="var(--jsxBlue)"
          >
            Full Stack JavaScript Developer
          </Heading>
          <HeroText>
            <p>
              My lifelong interest in computing and technology started as a child
              when I was the proud owner of a Sinclair ZX81, one of the first home
              computers on general sale.
            </p>
            <p>
              Working in the tech and education industry for more than 10 years,
              I discovered that coding excited me and I wanted
              to learn more. This soon turned in to a desire to pursue this as a new
              career and I completed an immersive software engineering course with
              General Assembly.
            </p>
            <p>
              I use HTML, CSS and JavaScript with a focus on React and Node.
            </p>
            <p>
              I now work in London for a large media company and part of
              large digital team which manage more than 20 websites, with brands
              such as BBC Good Food, Radio Times and Bike Radar.
            </p>
          </HeroText>
        </HeroTextContent>
      </HeroTextWrapper>
    </HeroStyles>
  );
};

export default Hero;
