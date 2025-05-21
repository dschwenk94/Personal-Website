// Theme configuration for styled-components
const theme = {
  colors: {
    backgroundGradientStart: '#111111', // Black start of gradient
    backgroundGradientEnd: '#333333',   // Dark grey end of gradient
    text: '#FAFAFA',                    // Nearly white grey for optimal readability
    primary: '#FF5722',                 // Orange/rust accent color
    secondary: '#E64A19',               // Darker orange/rust for hover states
    accent: '#FFCCBC',                  // Light orange for subtle accents
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '2rem',       // 32px
    xl: '3rem',       // 48px
    xxl: '4rem',      // 64px
  },
  breakpoints: {
    xs: '480px',      // Mobile phones
    sm: '768px',      // Tablets
    md: '992px',      // Small desktops
    lg: '1200px',     // Large desktops
  },
  transition: {
    default: '0.3s ease',
    slow: '0.5s ease',
    fast: '0.15s ease',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
    large: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
};

export default theme;