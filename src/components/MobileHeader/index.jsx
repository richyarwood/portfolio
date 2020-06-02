import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { mq } from '../../utils/presets';

const MobileHeaderStyles = styled.div`
  height: ${({ height }) => height && `${height}px`};
  background-color: var(--darkGrey);
  box-shadow: 3px 1px 4px -1px rgba(0,0,0,0.7);
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
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
      file(relativePath: {eq: "richard-new-portfolio.jpg"}) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <IconContext.Provider value={{ color: 'var(--white)', size: '20px' }}>
      <MobileHeaderStyles
        height={height}
      >
        <RoundImage
          fixed={data.file.childImageSharp.fixed}
          alt="Richard Yarwood - Full Stack Javacript Developer"
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <AiOutlineMenu
          onClick={onClick}
        />
      </MobileHeaderStyles>
    </IconContext.Provider>
  );
};

export default MobileHeader;
