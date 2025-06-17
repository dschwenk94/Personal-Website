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
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 2.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const AboutCard = styled.div`
  background-color: rgba(25, 25, 25, 0.7);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const AboutContent = styled.div`
  line-height: 1.8;
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SkillsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SkillsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SkillTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 0.9rem;
`;

const AboutPage = () => {
  return (
    <PageWrapper>
      <AboutContainer>
        <AboutTitle>About Me</AboutTitle>
        <AboutCard>
          <AboutContent>
            <p>
              I'm a <strong>product and operations leader</strong> with a passion for developing high-value
              products and features that drive subscription growth and user engagement.
            </p>
            <p>
              With experience across web browsers, mobile devices, and connected TVs,
              I specialize in <strong>product discovery, development, and monetization strategies</strong>.
            </p>
            <p>
              Throughout my career, I've been consistently recognized for outstanding results,
              clear communication, and strong leadership skills, leading to promotions ahead of my peers.
            </p>
            <p>
              When I'm not working on product strategy, you might find me tinkering with new technologies,
              exploring data visualization, or brainstorming the next great digital experience.
            </p>
          </AboutContent>
          
          <SkillsContainer>
            <SkillsTitle>Skills & Expertise</SkillsTitle>
            <SkillsList>
              <SkillTag>Product Management</SkillTag>
              <SkillTag>Monetization Strategies</SkillTag>
              <SkillTag>Subscription Growth</SkillTag>
              <SkillTag>User Experience</SkillTag>
              <SkillTag>A/B Testing</SkillTag>
              <SkillTag>Product Discovery</SkillTag>
              <SkillTag>Mobile Development</SkillTag>
              <SkillTag>Web Development</SkillTag>
              <SkillTag>TV Platforms</SkillTag>
              <SkillTag>Agile Methodologies</SkillTag>
              <SkillTag>Data Analysis</SkillTag>
            </SkillsList>
          </SkillsContainer>
        </AboutCard>
      </AboutContainer>
    </PageWrapper>
  );
};

export default AboutPage;
