'use client';

interface StarFieldProps {
  density?: number;
  subtle?: boolean;
}

export default function StarField({ density = 12, subtle = true }: StarFieldProps) {
  const stars = Array.from({ length: density }, (_, i) => ({
    id: i,
    // More scattered distribution
    left: `${(i * 73 + 17) % 100}%`,
    top: `${(i * 89 + 31) % 100}%`,
    // All 1px - barely visible points
    size: 1,
    // Very slow, gentle pulse - 12-18 seconds
    duration: 12 + (i % 7),
    delay: (i % 8) * 1.5,
  }));

  if (subtle) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'rgba(232, 228, 220, 0.08)',
              animation: `twinkle-subtle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
    );
  }

  // Original brighter version (pass subtle={false} to use)
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.15,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
