import React, { useEffect, useRef, memo } from 'react';
import styled from 'styled-components';

// Container for the static (non-animated) starry night background
const StaticStarryNightContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -5;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  background-color: #FFFFFF;
  border-radius: 50%;
  opacity: ${props => props.opacity};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: twinkle ${props => props.duration}s ease-in-out infinite;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  
  @keyframes twinkle {
    0% { opacity: ${props => props.opacity * 0.4}; }
    50% { opacity: ${props => props.opacity}; }
    100% { opacity: ${props => props.opacity * 0.4}; }
  }
`;

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      size: Math.random() * 2 + 0.5, // Size between 0.5 and 2.5px
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.3, // Opacity between 0.3 and 0.9
      duration: Math.random() * 10 + 5, // Animation duration between 5 and 15 seconds
    });
  }
  return stars;
};

// Static Starry Night Component (for Work History page)
export const StaticStarryNight = memo(({ starCount = 200 }) => {
  const stars = useRef(generateStars(starCount)).current;
  
  return (
    <StaticStarryNightContainer>
      {stars.map(star => (
        <Star
          key={star.id}
          size={star.size}
          top={star.top}
          left={star.left}
          opacity={star.opacity}
          duration={star.duration}
        />
      ))}
    </StaticStarryNightContainer>
  );
});

// Container for the animated starry night background
const AnimatedStarryNightContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -5;
  pointer-events: none;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// Animated Starry Night Component based on GitHub repo
const AnimatedStarryNight = memo(({ count = 400 }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const requestIdRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Recreate stars on resize
    };
    
    // Star properties
    const initStars = () => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: Math.floor(Math.random() * 20) - 10, // Reduced from (-25,25) to (-10,10)
          vy: Math.floor(Math.random() * 20) - 10  // Reduced from (-25,25) to (-10,10)
        });
      }
      starsRef.current = stars;
    };
    
    // Draw individual star
    const drawStar = (star) => {
      ctx.save();
      ctx.fillStyle = '#FFF';
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    
    // Update star position
    const updateStar = (star) => {
    star.x += star.vx / 300; // Slowed down from 100 to 300
    star.y += star.vy / 300; // Slowed down from 100 to 300
      
      // Bounce from edges
      if (star.x - star.radius < 0 || star.x + star.radius > canvas.width) {
        star.vx = -star.vx;
      }
      
      if (star.y - star.radius < 0 || star.y + star.radius > canvas.height) {
        star.vy = -star.vy;
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach(star => {
        drawStar(star);
        updateStar(star);
      });
      
      requestIdRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [count]);
  
  return (
    <AnimatedStarryNightContainer>
      <Canvas ref={canvasRef} />
    </AnimatedStarryNightContainer>
  );
});

// Default export for backward compatibility
export default AnimatedStarryNight;