import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AboutTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 1px;
  font-weight: normal;
`;

const AboutSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.8rem;
  letter-spacing: 0.5px;
  font-weight: normal;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.md};
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
    }
  }
`;

const AboutPage = () => {
  return (
    <PageWrapper>
      <AboutContainer>
        <AboutTitle>About Me</AboutTitle>
        
        <AboutSection>
          <Text>
            With all the rage around AI these days, I wanted to try and build something for myself. 
            I figured it could be a good way to highlight my past work, showcase my growing technical 
            aptitude with AI, and all those types of things...
          </Text>
        </AboutSection>
        
        <AboutSection>
          <SectionTitle>A little about me:</SectionTitle>
          <List>
            <li>I live in Colorado, with my lovely wife and dog</li>
            <li>I love skiing, golfing, lifting, hunting, being outside, and all those generic things some guy who moved to Colorado likes doing.</li>
          </List>
        </AboutSection>
        
        <AboutSection>
          <Text>
            If you want to see stuff about my work and personal projects, check out the other pages!
          </Text>
        </AboutSection>
      </AboutContainer>
    </PageWrapper>
  );
};

export default AboutPage;