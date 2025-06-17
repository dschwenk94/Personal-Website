import React from 'react';
import styled from 'styled-components';
import AnimatedStarryNight from './background/StarryNight';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to right, #0e0e0e, #252525); /* Slightly darker background */
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const PageWrapper = React.memo(({ children }) => {
  return (
    <Wrapper>
      <BackgroundContainer>
        <AnimatedStarryNight count={300} />
      </BackgroundContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Wrapper>
  );
});

export default PageWrapper;