import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { mq } from '../../utils/presets';

import Heading from '../Heading';

const HeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
  padding-top: 20px;

  ${mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Image = styled(Img)`
  width: 100%;

  ${mq.desktop} {
    width: 50%;
  }
`;

const HeroTextWrapper = styled.div`
  width: 100%;
  background-color: var(--lightGrey);

  ${mq.desktop} {
    width: 50%;
  }
`;

const HeroTextContent = styled.div`
  padding: var(--lg);
`;

const HeroText = styled.p`
  color: var(--white);
  font-family: var(--mainFont);
  font-size: 1.6rem;
  margin-top: var(--md);
  line-height: 2.2rem;
  font-weight: var(--regular);
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
      <Image
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
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in feugiat libero, id vehicula orci. Suspendisse vitae mi nibh. Aenean fermentum vehicula sem tristique fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin lacinia faucibus neque id tristique.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin lacinia faucibus neque id tristique.`}
          </HeroText>
        </HeroTextContent>
      </HeroTextWrapper>
    </HeroStyles>
  );
};

export default Hero;
