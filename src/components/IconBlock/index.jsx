import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillMail, AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const IconWrapper = styled.div`
  display: flex;
  color: var(--white);
  flex-direction: row;
  height: 40px;
  justify-content: space-evenly;
  padding-top: var(--md);
`;

const IconBlock = () => (
  <IconContext.Provider value={{ color: 'var(--white)', size: '20px' }}>
    <IconWrapper>
      <a
        href="https://www.linkedin.com/in/richyarwood/"
        title="Richard Yarwood Full Stack Javascript Developer - LinkedIn"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/richyarwood"
        title="Richard Yarwood Full Stack Javascript Developer - GitHub"
      >
        <AiFillGithub />
      </a>
      <a
        href="mailto:richyarwood@gmail.com"
        title="Richard Yarwood Full Stack Javascript Developer - Email"
      >
        <AiFillMail />
      </a>
    </IconWrapper>
  </IconContext.Provider>
);

export default IconBlock;
