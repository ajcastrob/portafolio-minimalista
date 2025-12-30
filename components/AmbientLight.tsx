import React, { useEffect, useRef } from 'react';

interface LightOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

const AmbientLight: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbsRef = useRef<LightOrb[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Colores editorial (tonos cálidos y suaves)
    const colors = [
      'rgba(159, 18, 57, 0.15)',    // Rose editorial
      'rgba(180, 83, 9, 0.12)',     // Ámbar cálido
      'rgba(120, 113, 108, 0.1)',   // Gris cálido
      'rgba(217, 119, 6, 0.08)',    // Naranja suave
      'rgba(76, 29, 31, 0.1)',      // Tinta
    ];

    // Inicializar orbes de luz
    const initOrbs = () => {
      orbsRef.current = [];
      const orbCount = 5; // Pocas orbes para mantener elegancia

      for (let i = 0; i < orbCount; i++) {
        orbsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // Movimiento muy lento
          vy: (Math.random() - 0.5) * 0.2,
          radius: 150 + Math.random() * 200, // Orbes grandes y difusas
          color: colors[i % colors.length],
          opacity: 0.3 + Math.random() * 0.3,
        });
      }
    };
    initOrbs();

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbsRef.current.forEach((orb) => {
        // Actualizar posición
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Rebotar suavemente en los bordes
        if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) {
          orb.vx *= -1;
        }
        if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) {
          orb.vy *= -1;
        }

        // Dibujar orbe con gradiente radial
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );

        gradient.addColorStop(0, orb.color.replace(/[\d.]+\)$/g, `${orb.opacity})`));
        gradient.addColorStop(0.5, orb.color.replace(/[\d.]+\)$/g, `${orb.opacity * 0.3})`));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(
          orb.x - orb.radius,
          orb.y - orb.radius,
          orb.radius * 2,
          orb.radius * 2
        );

        // Pulso suave de opacidad
        orb.opacity += Math.sin(Date.now() * 0.0005 + orb.x) * 0.002;
        orb.opacity = Math.max(0.2, Math.min(0.6, orb.opacity));
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default AmbientLight;
