import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalStyles from '../../utils/GlobalStyles';
import { mq } from '../../utils/presets';
import VerticalNav from '../VerticalNav';
import SideBarProfile from '../SideBarProfile';
import IconBlock from '../IconBlock';
import MobileHeader from '../MobileHeader';

const sideBarWidth = 150;
const mobileBarHeight = 30;

const WrapperStyles = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarStyles = styled.div`
  background-color: var(--darkGrey);
  height: 100vh;
  left: -${sideBarWidth}px;
  position: fixed;
  top: ${mobileBarHeight}px;
  transition: all 0.2s ease-in-out;
  width: ${sideBarWidth}px;
  z-index: 300;

  &.menu--active {
    left: 0;
    box-shadow: 3px 1px 4px -1px rgba(0,0,0,0.7);
  }

  ${mq.tablet} {
    left: 0;
    top: 0;
  }
`;

const MainStyles = styled.div`
  background-color: var(--darkGrey);
  height: 100vh;
  padding-top: var(--xxl);
  overflow-y: auto;
  width: 100%;

  ${mq.tablet}{
    margin-left: calc(${sideBarWidth}px + 10px);
  }
`;

const Layout = ({ children }) => {
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
      <WrapperStyles>
        <SidebarStyles
          className={`${!toggleMenu ? '' : 'menu--active'}`}
        >
          <SideBarProfile />
          <nav>
            <VerticalNav menuItems={data.site.siteMetadata.menuItems} />
          </nav>
          <IconBlock />
        </SidebarStyles>
        <MainStyles>
          {children}
        </MainStyles>
      </WrapperStyles>
    </>
  );
};

export default Layout;
