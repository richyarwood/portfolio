import React from 'react';
import styled from 'styled-components';

const tagChoice = (choice) => {
  switch (choice) {
  case 'react':
    return {
      color: 'var(--reactBlue)',
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
  case 'postgresql':
    return {
      color: 'var(--postgresqlBlue)',
    };
  case 'python':
    return {
      color: 'var(--pythonBlue)',
    };
  default:
    return {};
  }
};

const TagStyles = styled.div`
  height: 2rem;
  min-width: 40px;
  text-align: center;
  background-color: ${({ choice }) => choice && choice.color};
  color: var(--white);
  border-radius: 3px;
  padding: 3px 5px;
  margin-bottom: 5px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const Tag = ({ choice }) => (
  <TagStyles choice={tagChoice(choice)}>
    <span>{choice}</span>
  </TagStyles>
);

export default Tag;
