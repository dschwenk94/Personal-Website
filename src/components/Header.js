import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(0, 0, 0, 0.6);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transition.default};
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xs};
    font-size: 0.9rem;
  }
`;

const Header = React.memo(() => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/work-history', label: 'Work History' },
    { path: '/services', label: 'Services' }
  ];
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to="/">Davis Schwenke</Link>
        </Logo>
        
        <Nav>
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              isActive={location.pathname === link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
});

export default Header;