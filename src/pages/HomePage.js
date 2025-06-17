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
const neonPulse = keyframes`
  0%, 100% { 
    filter: brightness(1) contrast(1);
  }
  50% { 
    filter: brightness(1.1) contrast(1.1);
  }
`;

const neonFlicker = keyframes`
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.8; }
  94% { opacity: 1; }
  95% { opacity: 0.9; }
  96% { opacity: 1; }
`;

const glowPulse = keyframes`
  0%, 100% { 
    filter: drop-shadow(0 0 20px rgba(255, 87, 34, 0.8)) 
            drop-shadow(0 0 40px rgba(255, 87, 34, 0.6))
            drop-shadow(0 0 60px rgba(255, 87, 34, 0.4));
  }
  50% { 
    filter: drop-shadow(0 0 25px rgba(255, 87, 34, 0.9)) 
            drop-shadow(0 0 50px rgba(255, 87, 34, 0.7))
            drop-shadow(0 0 70px rgba(255, 87, 34, 0.5));
  }
`;



// Neon Logo Components
const NeonLogoWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  animation: ${glowPulse} 4s ease-in-out infinite;
`;

// SVG Neon Logo Component
const NeonLogoSVG = styled.svg`
  width: 400px;
  height: 220px;
  animation: ${neonPulse} 4s ease-in-out infinite,
             ${neonFlicker} 10s ease-in-out infinite;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 280px;
    height: 154px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
    height: 110px;
  }
`;

// Neon text effect styles
const neonTextStyle = {
  fill: 'none',
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// Component for the SVG Logo
const NeonLogo = () => (
  <NeonLogoSVG viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
    <defs>
      {/* Glow filter for the neon effect */}
      <filter id="neonGlow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      {/* Gradient for the stroke */}
      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF5722" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="#FF7043" stopOpacity="1"/>
        <stop offset="100%" stopColor="#FF5722" stopOpacity="0.8"/>
      </linearGradient>
    </defs>
    
    {/* Background glow layers */}
    <g filter="url(#neonGlow)">
      {/* Outer glow */}
      <text
        x="200"
        y="150"
        fontSize="180"
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        textAnchor="middle"
        {...neonTextStyle}
        stroke="#FF5722"
        strokeWidth="1"
        opacity="0.5"
      >
        DS
      </text>
      
      {/* Middle glow */}
      <text
        x="200"
        y="150"
        fontSize="180"
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        textAnchor="middle"
        {...neonTextStyle}
        stroke="#FF7043"
        strokeWidth="2"
        opacity="0.7"
      >
        DS
      </text>
      
      {/* Main neon tube */}
      <text
        x="200"
        y="150"
        fontSize="180"
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        textAnchor="middle"
        {...neonTextStyle}
        stroke="rgba(255, 255, 255, 0.9)"
        strokeWidth="2.5"
      >
        DS
      </text>
      
      {/* Inner bright line */}
      <text
        x="200"
        y="150"
        fontSize="180"
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        textAnchor="middle"
        {...neonTextStyle}
        stroke="rgba(255, 255, 255, 1)"
        strokeWidth="1"
        opacity="0.8"
      >
        DS
      </text>
    </g>
  </NeonLogoSVG>
);

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
            <NeonLogo />
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