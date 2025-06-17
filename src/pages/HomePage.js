import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopSection = styled.div`
  text-align: center;
  width: 100%;
`;

// Neon Logo Animations - Scalable for future enhancements
const neonFlicker = keyframes`
  0%, 100% { 
    opacity: 1;
    text-shadow: 
      0 0 20px rgba(255, 87, 34, 0.8),
      0 0 40px rgba(255, 87, 34, 0.6),
      0 0 60px rgba(255, 87, 34, 0.4),
      0 0 80px rgba(255, 87, 34, 0.2);
  }
  50% { 
    opacity: 0.95;
    text-shadow: 
      0 0 25px rgba(255, 87, 34, 0.9),
      0 0 45px rgba(255, 87, 34, 0.7),
      0 0 65px rgba(255, 87, 34, 0.5),
      0 0 85px rgba(255, 87, 34, 0.3);
  }
`;

const neonGlow = keyframes`
  0%, 100% { 
    filter: drop-shadow(0 0 20px rgba(255, 87, 34, 0.5));
  }
  50% { 
    filter: drop-shadow(0 0 30px rgba(255, 87, 34, 0.7));
  }
`;



// Neon Logo Components
const NeonLogoWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// Main logo text - using text-fill and stroke properly to avoid double lines
const NeonLogo = styled.div`
  font-size: 200px;
  font-weight: 800;
  letter-spacing: 0px; /* Increased spacing to prevent overlap */
  color: #FF5722; /* Base color for the fill */
  position: relative;
  padding-bottom: 40px;
  line-height: 0.9;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.heading};
  
  /* Main neon effect */
  text-shadow: 
    0 0 20px rgba(255, 87, 34, 0.8),
    0 0 40px rgba(255, 87, 34, 0.6),
    0 0 60px rgba(255, 87, 34, 0.4),
    0 0 80px rgba(255, 87, 34, 0.2);
  
  /* Subtle animation */
  animation: ${neonFlicker} 4s ease-in-out infinite;
  
  /* Responsive sizing */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 140px;
    letter-spacing: 0px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 100px;
    letter-spacing: 0px;
  }
`;

// Separate glow layer to avoid stroke conflicts
const NeonGlowLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 200px;
  font-weight: 800;
  letter-spacing: 0px;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
  text-stroke: 1px rgba(255, 255, 255, 0.6);
  z-index: 2;
  pointer-events: none;
  line-height: 0.9;
  font-family: ${({ theme }) => theme.fonts.heading};
  animation: ${neonGlow} 3s ease-in-out infinite;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 140px;
    letter-spacing: 0px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 100px;
    letter-spacing: 0px;
  }
`;

const NeonUnderline = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%); /* Center the underline */
  width: 80%; /* Reduced width for better proportion */
  height: 6px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.8),
    0 0 40px rgba(255, 255, 255, 0.6),
    0 0 60px rgba(255, 87, 34, 0.4);
  border-radius: 3px;
`;

const MainHeading = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SubHeading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: 0.02em;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.2rem;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.01em;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 1rem;
  letter-spacing: 0.02em;
  transition: all ${({ theme }) => theme.transition.default};
  text-decoration: none;
  text-align: center;
  min-width: 150px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.text};
  }
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <HomeContainer>
        <TopSection>
          <NeonLogoWrapper>
            <NeonLogo>DS</NeonLogo>
            <NeonGlowLayer aria-hidden="true">DS</NeonGlowLayer>
            <NeonUnderline />
          </NeonLogoWrapper>
          
          <MainHeading>
            <SubHeading>Davis Schwenke</SubHeading>
            <SubText>This website is an ongoing project to build with AI tools, show some of the work I have done professionally, and share the personal projects I've been working on.</SubText>
            
            <ButtonContainer>
              <NavButton to="/projects">View Projects</NavButton>
              <NavButton to="/work-history">Work History</NavButton>
              <NavButton to="/services">Get in Touch</NavButton>
            </ButtonContainer>
          </MainHeading>
        </TopSection>
      </HomeContainer>
    </PageWrapper>
  );
};

export default HomePage;