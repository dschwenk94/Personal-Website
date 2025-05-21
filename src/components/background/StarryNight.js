import React, { useState, useEffect, useRef, memo } from 'react';
import styled from 'styled-components';

// Container for the static starry night background
const StaticStarryNightContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
`;

const Star = styled.div`
  position: absolute;
  background-color: rgba(255, 243, 204, 0.5); /* Reduced opacity from 0.9 to 0.5 */
  border-radius: 50%;
  opacity: ${props => props.opacity};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  box-shadow: 0 0 ${props => props.size * 3}px ${props => props.size}px rgba(255, 255, 255, 0.8);
  animation: ${props => (props.twinkle ? 'twinkle' : 'none')} ${props => props.duration}s ease-in-out infinite;
  
  @keyframes twinkle {
    0% { opacity: ${props => props.opacity}; }
    50% { opacity: ${props => props.opacity * 0.1}; }
    100% { opacity: ${props => props.opacity}; }
  }
`;

// Static Starry Night Component based on pre-rendered CSS stars
export const StaticStarryNight = memo(({ starCount = 200 }) => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Generate random stars on mount
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 1.8 + 0.2, // 0.2 to 2.0 pixels
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1.0 opacity
        twinkle: Math.random() > 0.7, // 30% of stars twinkle
        duration: Math.random() * 10 + 5 // 5-15 second twinkle duration
      });
    }
    setStars(newStars);
  }, [starCount]);
  
  return (
    <StaticStarryNightContainer>
      {stars.map(star => (
        <Star
          key={star.id}
          size={star.size}
          top={star.top}
          left={star.left}
          opacity={star.opacity}
          twinkle={star.twinkle}
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
  pointer-events: none;
  z-index: -1;
`;

const Canvas = styled.canvas`
  display: block;
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
          vx: Math.floor(Math.random() * 10) - 5, // Reduced velocity for header
          vy: Math.floor(Math.random() * 10) - 5  // Reduced velocity for header
        });
      }
      starsRef.current = stars;
    };
    
    // Draw individual star
    const drawStar = (star) => {
      ctx.save();
      ctx.fillStyle = 'rgba(255, 243, 204, ' + (0.4 + Math.random() * 0.2) + ')'; // Reduced opacity
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    
    // Update star position
    const updateStar = (star) => {
      // Slower movement for all stars
      star.x += star.vx / 600; 
      star.y += star.vy / 600;
      
      // Bounce from edges
      if (star.x - star.radius < 0 || star.x + star.radius > canvas.width) {
        star.vx = -star.vx;
      }
      
      const maxHeight = isHeader ? 80 : canvas.height;
      if (star.y - star.radius < 0 || star.y + star.radius > maxHeight) {
        star.vy = -star.vy;
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update all stars
      starsRef.current.forEach(star => {
        drawStar(star);
        updateStar(star);
      });
      
      requestIdRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize everything
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing
    animate(); // Start animation loop
    
    // Cleanup on unmount
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