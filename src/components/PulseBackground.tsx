import { useMemo } from 'react';

interface Props {
  hashrate: number;
  network: 'btc' | 'eth';
}

export default function PulseBackground({ hashrate, network }: Props) {
  // Animation speed reacts to real hashrate
  // Higher hashrate = faster pulse = more visual feedback
  const speed = useMemo(() => {
    if (hashrate === 0) return 5;
    if (hashrate < 1000) return 4;
    if (hashrate < 10000) return 2.5;
    if (hashrate < 50000) return 1.5;
    return 1;
  }, [hashrate]);

  // Use explicit rgba colors instead of CSS variable hsl() syntax
  // which requires the variable to be defined as raw HSL components
  const isBtc = network === 'btc';

  // BTC = Neon Mint (#00ff88), ETH = Electric Blue (#3d7fff)
  const ringColors = isBtc
    ? ['rgba(0,255,136,0.07)', 'rgba(0,255,136,0.05)', 'rgba(0,255,136,0.03)']
    : ['rgba(61,127,255,0.07)', 'rgba(61,127,255,0.05)', 'rgba(61,127,255,0.03)'];

  const glowColor = isBtc ? 'rgba(0,255,136,0.04)' : 'rgba(61,127,255,0.04)';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient center glow */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          left: '50%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 65%)`,
          transition: 'background 0.8s ease',
        }}
      />

      {/* Expanding pulse rings — speed tied to hashrate */}
      {([0.6, 1.0, 1.5] as const).map((scale, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${scale * 700}px`,
            height: `${scale * 700}px`,
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${ringColors[i]} 0%, transparent 70%)`,
            animation: `pulse-ring ${(speed + i * 0.6).toFixed(2)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.4).toFixed(1)}s`,
          }}
        />
      ))}

      {/* Subtle grid overlay for the "cyber" aesthetic */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 100%)',
        }}
      />
    </div>
  );
}
