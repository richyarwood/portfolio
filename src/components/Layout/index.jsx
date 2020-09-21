import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalStyles from '../../utils/GlobalStyles';
import { mq } from '../../utils/presets';
import VerticalNav from '../VerticalNav';
import SideBarProfile from '../SideBarProfile';
import IconBlock from '../IconBlock';
import MobileHeader from '../MobileHeader';
import Footer from '../Footer';

const sideBarWidth = 150;
const mobileBarHeight = 60;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
`;

const SideBar = styled.div`
  background-color: var(--darkGrey);
  height: 100%;
  left: -${sideBarWidth}px;
  position: fixed;
  top: ${mobileBarHeight}px;
  transition: all 0.2s ease-in-out;
  width: ${sideBarWidth}px;
  z-index: 300;

  &.menu--active {
    left: 0;
    box-shadow: 3px 1px 4px -1px rgba(0, 0, 0, 0.7);
  }

  ${mq.tablet} {
    left: auto;
    top: 0;
  }
`;

const MainStyles = styled.div`
  background-color: var(--darkGrey);
  height: 100%;
  padding-top: calc(${mobileBarHeight}px + 10px);
  overflow-y: auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${mq.tablet} {
    padding-top: ${({ noPaddingTop }) => (noPaddingTop && noPaddingTop ? '0' : '4rem')};
    margin-left: calc(${sideBarWidth}px + 10px);
  }
`;

const Layout = ({ children, noPaddingTop }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          menuItems {
            link
            name
          }
          title
        }
      }
    }
  `);

  // TODO need to add in keydown functions and tabbing
  // TODO add in tab indexing:
  // TODO see this: https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html
  return (
    <>
      <GlobalStyles backgroundColor="#000000" />
      <MobileHeader
        onClick={() => setToggleMenu(!toggleMenu)}
        height={mobileBarHeight}
      />
      <Wrapper>
        <SideBar className={`${!toggleMenu ? '' : 'menu--active'}`}>
          <SideBarProfile />
          <nav>
            <VerticalNav menuItems={data.site.siteMetadata.menuItems} />
          </nav>
          <IconBlock />
        </SideBar>
        <MainStyles noPaddingTop={noPaddingTop}>
          {children}
          <Footer />
        </MainStyles>
      </Wrapper>
    </>
  );
};

export default Layout;
