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
  background-color: rgba(255, 243, 204, 0.6);
  border-radius: 50%;
  opacity: ${props => props.opacity};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: twinkle ${props => props.duration}s ease-in-out infinite;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  box-shadow: 0 0 ${props => props.size}px rgba(255, 243, 204, 0.3);
  
  @keyframes twinkle {
    0% { 
      opacity: ${props => props.opacity * 0.7};
      transform: scale(1);
    }
    50% { 
      opacity: ${props => props.opacity};
      transform: scale(1.05);
    }
    100% { 
      opacity: ${props => props.opacity * 0.7};
      transform: scale(1);
    }
  }
`;

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 2 + 0.5; // Size between 0.5 and 2.5px
    stars.push({
      id: i,
      size: size,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.3 + 0.6, // Opacity between 0.6 and 0.9
      duration: Math.random() * 15 + 10, // Animation duration between 10 and 25 seconds - much slower
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
  position: absolute;
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
const AnimatedStarryNight = memo(({ count = 400, isHeader = false }) => {
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
      canvas.height = isHeader ? 80 : window.innerHeight; // Fixed height for header
      initStars(); // Recreate stars on resize
    };
    
    // Star properties
    const initStars = () => {
      const stars = [];
      const areaHeight = isHeader ? 80 : canvas.height;
      
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * areaHeight,
          radius: Math.random() * 1.5 + 0.5,
          vx: Math.floor(Math.random() * 20) - 10,
          vy: Math.floor(Math.random() * 20) - 10,
          brightness: Math.random() * 0.3 + 0.6
        });
      }
      starsRef.current = stars;
    };
    
    // Draw individual star
    const drawStar = (star) => {
      ctx.save();
      
      // Main star
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 2);
      gradient.addColorStop(0, `rgba(255, 243, 204, ${star.brightness})`);
      gradient.addColorStop(0.5, `rgba(255, 243, 204, ${star.brightness * 0.5})`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Smaller, subtler inner core
      ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness * 0.7})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };
    
    // Update star position
    const updateStar = (star) => {
      // Much slower, subtle movement
      star.x += star.vx / 800; 
      star.y += star.vy / 800;
      
      // Subtle brightness variation
      star.brightness = 0.6 + Math.sin(Date.now() * 0.0005 * star.vx * 0.1) * 0.1;
      
      // Bounce from edges with slight randomness
      if (star.x - star.radius < 0 || star.x + star.radius > canvas.width) {
        star.vx = -star.vx * (0.8 + Math.random() * 0.4);
      }
      
      const maxHeight = isHeader ? 80 : canvas.height;
      if (star.y - star.radius < 0 || star.y + star.radius > maxHeight) {
        star.vy = -star.vy * (0.8 + Math.random() * 0.4);
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
  }, [count, isHeader]);
  
  return (
    <AnimatedStarryNightContainer>
      <Canvas ref={canvasRef} />
    </AnimatedStarryNightContainer>
  );
});

// Default export for backward compatibility
export default AnimatedStarryNight;