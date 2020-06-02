import React from 'react';
import styled from 'styled-components';

const tagChoice = (choice) => {
  switch (choice) {
  case 'jsx':
    return {
      color: 'var(--jsxBlue)',
    };
  case 'html':
    return {
      color: 'var(--htmlGreen)',
    };
  case 'css':
    return {
      color: 'var(--cssOrange)',
    };
  case 'js':
    return {
      color: 'var(--jsYellow)',
    };
  default:
    return {};
  }
};

const TagStyles = styled.div`
  height:1.8rem;
  width: 40px;
  text-align: center;
  background-color: ${({ choice }) => choice && choice.color};
  color: var(--black);
  border-radius: 3px;
  position: relative;

  & > p {
    left: 50%;
    font-family: var(--mainFont);
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Tag = ({ choice }) => (
  <TagStyles
    choice={tagChoice(choice)}
  >
    <p>
      {choice}
    </p>
  </TagStyles>
);

export default Tag;
