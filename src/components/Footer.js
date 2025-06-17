import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.8);
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  transition: color ${({ theme }) => theme.transition.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© {currentYear} Davis Schwenke. All Rights Reserved.</Copyright>
        <SocialLinks>
          <SocialLink href="mailto:schwenkedavis@gmail.com" aria-label="Email">📧</SocialLink>
          <SocialLink href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</SocialLink>
          {/* Add more social links as needed */}
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
