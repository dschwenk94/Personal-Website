import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  min-height: 60vh;
`;

const TopSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const MainHeading = styled.div`
  max-width: 800px;
`;

const HeadingText = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.01em;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7); /* Stronger shadow */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.01em;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.3rem;
  }
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <HomeContainer>
        <TopSection>
          <MainHeading>
            <HeadingText>
              Product leader with proven expertise in driving subscription
              growth and monetization across web, mobile, and TV platforms.
            </HeadingText>
            <SubHeading>
              Hi, I'm Davis - a product manager specializing in in-app purchases, 
              subscription optimization, and cross-platform product development. 
              I occasionally try to build things too.
            </SubHeading>
          </MainHeading>
        </TopSection>
      </HomeContainer>
    </PageWrapper>
  );
};

export default HomePage;