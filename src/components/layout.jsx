import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalStyles from '../utils/GlobalStyles';
import VerticalNav from './VerticalNav';

const WrapperStyles = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarStyles = styled.div`
  background-color: var(--darkGrey);
  height: 100vh;
  width: 220px;
  margin-right: var(--lg);
`;

const MainStyles = styled.div`
  background-color: var(--darkGrey);
  width: 100%;
  height: 100vh;
`;

const Layout = () => {
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

  return (
    <>
      <GlobalStyles />
      <WrapperStyles>
        <SidebarStyles>
          <nav>
            <VerticalNav menuItems={data.site.siteMetadata.menuItems} />
          </nav>
        </SidebarStyles>
        <div css={`
          background-color: #000000;
          height: 100vh;
          width: var(--lg);
          `}
        />
        <MainStyles />
      </WrapperStyles>
    </>
  );
};

export default Layout;
