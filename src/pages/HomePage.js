import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 200px);
`;

const TopSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const MainHeading = styled.div`
  max-width: 800px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const HeadingText = styled.h1`
  font-size: 2.8rem;
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.01em;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  opacity: 0.9;
  margin-top: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.01em;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.3rem;
  }
`;



const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContactLabel = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 0.85rem;
  text-align: center;
`;

const LinkedInLink = styled.a`
  color: #0077B5; /* LinkedIn blue color */
  text-decoration: underline;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.01em;
  text-align: center;
  
  &:hover {
    color: #0090da; /* Slightly lighter blue on hover */
  }
`;

const EmailLink = styled.a`
  color: #0077B5; /* Using LinkedIn blue to indicate it's a hyperlink */
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.01em;
  text-align: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <HomeContainer>
        <TopSection>
          <MainHeading>
            <HeadingText>
              Instead of buzzwords and AI fluff, here's some honesty:
            </HeadingText>
            <SubHeading style={{ fontStyle: 'normal', fontSize: '1.3rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '400' }}>
              This website is an ongoing attempt at using AI tools and some determination to build something of my own, while also highlighting some of the work I've done professionally.
              <br /><br />
              My name's Davis, and I'm a guy living in Colorado with my wife and dog, and a product manager who has spent his career solving customer problems and delivering results in streaming & media.
              <br /><br />
              While the coding was done by Claude (and assisted by MCP integrations), all the words are my own.
            </SubHeading>
          </MainHeading>
        </TopSection>
        
        
        <BottomSection>
          <ContactInfo>
            <div>
              <ContactLabel>LinkedIn</ContactLabel>
              <LinkedInLink 
                href="https://www.linkedin.com/in/davis-schwenke/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                linkedin.com/in/davis-schwenke
              </LinkedInLink>
            </div>
            <div>
              <ContactLabel>Email Address</ContactLabel>
              <EmailLink href="mailto:schwenkedavis@gmail.com">
                schwenkedavis@gmail.com
              </EmailLink>
            </div>
          </ContactInfo>
        </BottomSection>
      </HomeContainer>
    </PageWrapper>
  );
};

export default HomePage;