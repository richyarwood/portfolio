import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalStyles from '../../utils/GlobalStyles';
import { mq } from '../../utils/presets';
import VerticalNav from '../VerticalNav';
import SideBarProfile from '../SideBarProfile';
import IconBlock from '../IconBlock';
import Hamburger from '../Hamburger';

const sideBarWidth = 150;

const WrapperStyles = styled.div`
  display: flex;
  flex-direction: row;

  ${mq.tablet} {
    .sidebar__spacing {
      display: block;
      background-color: #000000;
      height: 100vh;
      width: var(--lg);
    }
  }
`;

const SidebarStyles = styled.div`
  background-color: var(--darkGrey);
  height: 100vh;
  left: -${sideBarWidth}px;
  position: fixed;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: ${sideBarWidth}px;
  z-index: 300;

  &.menu--active {
    left: 0;
  }

  ${mq.tablet} {
    left: 0;
  }
`;

const MainStyles = styled.div`
  background-color: var(--darkGrey);
  width: 100%;
  height: 100vh;
  margin-left: 0;
  overflow-y: auto;

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
      <GlobalStyles />
      <WrapperStyles>
        <SidebarStyles
          className={`${!toggleMenu ? '' : 'menu--active'}`}
        >
          <Hamburger
            top="var(--md)"
            left={`${sideBarWidth}px`}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
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
