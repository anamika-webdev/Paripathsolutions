
import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Particle[] = [];
    const particleCount = 80;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    const createParticles = () => {
      const lightModeColors = ['rgba(59, 130, 246, 0.5)', 'rgba(99, 102, 241, 0.3)', 'rgba(139, 92, 246, 0.3)'];
      const darkModeColors = ['rgba(59, 130, 246, 0.3)', 'rgba(99, 102, 241, 0.2)', 'rgba(139, 92, 246, 0.2)'];
      
      const colors = theme === 'dark' ? darkModeColors : lightModeColors;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Connect particles with lines
        connectParticles(particle, index);
      });
    };
    
    // Connect particles with lines
    const connectParticles = (particle: Particle, index: number) => {
      const maxDistance = 120;
      
      for (let i = index + 1; i < particles.length; i++) {
        const dx = particle.x - particles[i].x;
        const dy = particle.y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance;
          ctx.strokeStyle = theme === 'dark' 
            ? `rgba(255, 255, 255, ${opacity * 0.15})` 
            : `rgba(0, 0, 0, ${opacity * 0.1})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };
    
    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};

export default Particles;
