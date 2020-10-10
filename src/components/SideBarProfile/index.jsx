import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { mq } from '../../utils/presets';

const SideBarProfileStyles = styled.div`
  display: none;
  font-family: var(--mainFont);

  ${mq.tablet} {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: var(--md);
  }
`;

const RoundImage = styled(Img)`
  border-radius: 50%;
  margin: 0 var(--sm);
  width: 80px;
`;

const SideBarProfile = () => {
  const data = useStaticQuery(graphql`
    query ProfileImageQuery {
      file(relativePath: { eq: "richard-new-portfolio-square.jpg" }) {
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
      <Link
        to="/"
        aria-label="Go to home page"
      >
        <RoundImage
          alt="Richard Yarwood - Full Stack Javacript Developer"
          fluid={data.file.childImageSharp.fluid}
        />
        <p
          css={`
          font-size: var(--md);
          padding-top: var(--sm);
          text-align: center;
        `}
        >
          Richard Yarwood
        </p>
      </Link>
    </SideBarProfileStyles>
  );
};

export default SideBarProfile;
