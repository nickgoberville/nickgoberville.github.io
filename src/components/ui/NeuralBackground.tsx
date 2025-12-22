import { useEffect, useRef } from "react";

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let neurons: Neuron[] = [];
    const connectionDistance = 150;
    const numNeurons = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNeurons();
    };

    const initNeurons = () => {
      neurons = [];
      for (let i = 0; i < numNeurons; i++) {
        neurons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      neurons.forEach((neuron) => {
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;

        // Bounce off walls
        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;
      });

      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance;
            // Use a faint primary-like color (slate-500 equivalent usually)
            // Adjust RGB to match your theme.
            // In dark mode: white/slate. In light mode: black/slate.
            // Let's use generic RGBA that works for both or check CSS variable later.
            // For now, hardcoded subtle slate/blue.
            // Increased opacity slightly to ensuring visibility
            ctx.strokeStyle = `rgba(100, 116, 139, ${opacity * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw neurons
      neurons.forEach((neuron) => {
        ctx.fillStyle = "rgba(100, 116, 139, 0.4)";
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none bg-background transition-colors duration-300"
    />
  );
}
