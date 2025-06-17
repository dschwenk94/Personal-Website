// Updated theme with modern, sleek fonts and refined color scheme
const theme = {
  colors: {
    backgroundGradientStart: '#111111', // Black start of gradient
    backgroundGradientEnd: '#333333',   // Dark grey end of gradient
    text: '#FAFAFA',                    // Nearly white grey for optimal readability
    primary: '#FF5722',                 // Orange/rust accent color
    secondary: '#E64A19',               // Darker orange/rust for hover states
    accent: '#FFCCBC',                  // Light orange for subtle accents
    darkText: '#212121',                // Near black for contrast text
    cardBackground: 'rgba(51, 51, 51, 0.7)', // Semi-transparent dark grey for cards
  },
  fonts: {
    main: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Clash Display', 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    monospace: "'JetBrains Mono', monospace",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  transition: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },
  gradients: {
    main: 'linear-gradient(to right, #111111, #333333)',
  }
};

export default theme;
