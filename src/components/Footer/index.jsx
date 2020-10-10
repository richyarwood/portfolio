import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const FooterStyles = styled.footer`
  align-items: center;
  border-top: 1px solid var(--lightGrey);
  display: flex;
  font-size: var(--md);
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: var(--md);
  margin-top: auto;
`;

const FooterText = styled.p`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 5px 0;
  text-align: center;

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
