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
  case 'sass':
    return {
      color: 'var(--sassPink)',
    };
  case 'jest':
    return {
      color: 'var(--jestGreen)',
    };
  case 'node':
    return {
      color: 'var(--nodeGreen)',
    };
  case 'mongodb':
    return {
      color: 'var(--mongoGreen)',
    };
  default:
    return {};
  }
};

const TagStyles = styled.div`
  background-color: ${({ choice }) => choice && choice.color};
  border-radius: 3px;
  color: var(--white);
  font-size: 1rem;
  height: 2rem;
  font-weight: 500;
  margin-bottom: 5px;
  min-width: 40px;
  padding: 3px 5px;
  text-align: center;
  text-transform: uppercase;
`;

const Tag = ({ choice }) => (
  <TagStyles choice={tagChoice(choice)}>
    <span>{choice}</span>
  </TagStyles>
);

export default Tag;
