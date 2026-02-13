export default function FloatingHeartsBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-cream via-romantic-blush/30 to-romantic-pink/20" />
      
      <div 
        className="absolute inset-0 opacity-20 animate-float-slow"
        style={{
          backgroundImage: 'url(/assets/generated/floating-hearts-bg.dim_1600x900.png)',
          backgroundSize: '800px 450px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-romantic-rose/20 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            ❤
          </div>
        ))}
      </div>
    </div>
  );
}
