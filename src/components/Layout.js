import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Main = styled.main`
  min-height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  z-index: 1;
`;

// We're not using a separate Footer component since it's integrated into the HomePage
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;