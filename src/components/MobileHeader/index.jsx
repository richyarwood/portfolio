import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { mq } from '../../utils/presets';

const MobileHeaderStyles = styled.div`
  align-items: center;
  background-color: var(--darkGrey);
  box-shadow: 3px 1px 4px -1px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: row;
  height: ${({ height }) => height && `${height}px`};
  justify-content: space-between;
  left: 0;
  padding: 0.5rem 1.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 300;

  ${mq.tablet} {
    display: none;
  }
`;

const RoundImage = styled(Img)`
  border-radius: 50%;
`;

const MobileHeader = ({ onClick, height }) => {
  const data = useStaticQuery(graphql`
    query MobileHeaderQuery {
      file(relativePath: { eq: "richard-new-portfolio.jpg" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <IconContext.Provider value={{ color: 'var(--bodyColor)', size: '30px' }}>
      <MobileHeaderStyles height={height}>
        <div
          css={`
            align-items: center;
            display: flex;
          `}
        >
          <Link
            to="/"
            aria-label="Go to home page"
            css={`
            display: inline-flex;
          `}
          >
            <RoundImage
              fixed={data.file.childImageSharp.fixed}
              alt="Richard Yarwood - Full Stack Javacript Developer"
              objectFit="cover"
              objectPosition="50% 50%"
            />
            <p
              css={`
              font-weight: var(--regularFont);
              font-family: var(--mainFont);
              font-size: var(--md);
              margin-left: var(--xs);
              margin-bottom: 0;
            `}
            >
              Richard Yarwood
            </p>
          </Link>
        </div>
        <AiOutlineMenu onClick={onClick} />
      </MobileHeaderStyles>
    </IconContext.Provider>
  );
};

export default MobileHeader;
