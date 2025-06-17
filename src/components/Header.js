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

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 1px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ active, theme }) => active ? theme.fontWeights.medium : theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  position: relative;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  letter-spacing: 0.02em;
  font-size: 0.95rem;
  text-transform: uppercase;
  transition: all ${({ theme }) => theme.transition.default};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ active }) => active ? 1 : 0});
    transition: transform ${({ theme }) => theme.transition.default};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
`;

const Header = React.memo(() => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/work-history', label: 'Work History' },
    { path: '/services', label: 'Contact' }
  ];
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">DAVIS SCHWENKE</Logo>
        <Nav>
          {navLinks.map(link => (
            <NavLink 
              key={link.path}
              to={link.path} 
              active={location.pathname === link.path ? 1 : 0}
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