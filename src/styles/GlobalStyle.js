import { createGlobalStyle } from 'styled-components';
import { memo } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    /* Remove the gradient background since we're using an animated one */
    background-color: #111111;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    font-weight: ${props => props.theme.fontWeights.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: color ${props => props.theme.transition.default};

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.bold};
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: ${props => props.theme.fontWeights.bold};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: ${props => props.theme.fontWeights.semibold};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: ${props => props.theme.fontWeights.medium};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    letter-spacing: 0.01em;
    line-height: 1.7;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: ${props => props.theme.borderRadius.sm};
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: 1rem;
    letter-spacing: 0.02em;
    transition: all ${props => props.theme.transition.default};
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
      transform: translateY(-2px);
    }
  }

  main {
    flex: 1;
    position: relative;
    z-index: 1;
  }
  
  code, pre {
    font-family: ${props => props.theme.fonts.monospace};
  }
`;

export default memo(GlobalStyle);
