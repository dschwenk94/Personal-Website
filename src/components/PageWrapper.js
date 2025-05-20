import React from 'react';
import styled from 'styled-components';
import AnimatedStarryNight from './background/StarryNight';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to right, #111111, #333333);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const PageWrapper = React.memo(({ children }) => {
  return (
    <Wrapper>
      <BackgroundContainer>
        <AnimatedStarryNight count={400} />
      </BackgroundContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Wrapper>
  );
});

export default PageWrapper;