import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 10;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterRight = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    align-items: center;
  }
`;

const FooterNav = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  transition: color ${({ theme }) => theme.transition.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ContactLabel = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0;
  font-size: 0.7rem;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color ${({ theme }) => theme.transition.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <Copyright>© {currentYear} Davis Schwenke. All rights reserved.</Copyright>
        </FooterLeft>
        
        <FooterNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/work-history">Work History</NavLink>
          <NavLink to="/services">Services</NavLink>
        </FooterNav>
        
        <FooterRight>
          <ContactInfo>
            <ContactLabel>Email</ContactLabel>
            <ContactLink href="mailto:schwenkedavis@gmail.com">
              schwenkedavis@gmail.com
            </ContactLink>
          </ContactInfo>
          
          <ContactInfo>
            <ContactLabel>LinkedIn</ContactLabel>
            <ContactLink 
              href="https://www.linkedin.com/in/davis-schwenke/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/davis-schwenke
            </ContactLink>
          </ContactInfo>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;