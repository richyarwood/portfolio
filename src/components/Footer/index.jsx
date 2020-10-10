import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const FooterStyles = styled.footer`
  height: 150px;
  font-size: var(--md);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--lightGrey);
  margin: var(--md);
  margin-top: auto;
`;

const FooterText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  margin: 0;

  & > span {
    margin-left: var(--xxs);
  }
`;

const Footer = () => (
  <IconContext.Provider value={{ color: 'var(--bodyColor)', size: '20px' }}>
    <FooterStyles>
      <FooterText>
        This site is created with Gatsby and Styled Components
      </FooterText>
      <a
        href="https://github.com/richyarwood/portfolio"
        title="Richard Yarwood Full Stack Javascript Developer - GitHub"
      >
        <FooterText>
          <AiFillGithub />
          <span>Source Repo</span>
        </FooterText>
      </a>
    </FooterStyles>
  </IconContext.Provider>
);

export default Footer;
