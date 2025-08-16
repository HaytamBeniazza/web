const SpaceBackground = () => {
  return (
    <>
      {/* Enhanced Space Background System */}
      <div className="space-background"></div>
      <div className="nebula-bg"></div>
      <div className="galaxy-spiral"></div>
      
      {/* Enhanced Stars Background */}
      <div className="enhanced-starfield"></div>
      
      {/* Moon - Natural and subtle */}
      <img 
        src="/moon.jpg" 
        alt="Moon"
        className="moon-img"
        style={{
          position: 'fixed',
          top: '5%',
          right: '3%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          opacity: 0.25,
          filter: 'brightness(1.1) contrast(1.1)',
          animation: 'moon-gentle-glow 12s ease-in-out infinite',
          zIndex: 2,
          pointerEvents: 'none',
          border: 'none',
          boxShadow: 'none',
          objectFit: 'cover'
        }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
        onLoad={() => console.log('Moon loaded')}
      />
      
      {/* CSS Meteors (Fallback for shooting stars) */}
      
      {/* Cosmic Particles */}
      <div className="cosmic-particles">
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
      </div>
      
      {/* Space Dust */}
      <div className="space-dust"></div>
      
      {/* Constellation Lines */}
      <div className="constellation-lines">
        <div className="constellation-line"></div>
        <div className="constellation-line"></div>
        <div className="constellation-line"></div>
      </div>
      
      {/* Space Wormholes */}
      <div className="space-wormhole"></div>
      
      {/* Asteroid Field */}
      <div className="asteroid-field">
        <div className="asteroid"></div>
        <div className="asteroid"></div>
        <div className="asteroid"></div>
      </div>

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 space-field" />
        <div className="absolute -right-40 -top-40 h-[50rem] w-[50rem] rounded-full structure-blur twinkle" />
        <div className="absolute left-[-20%] bottom-[-20%] h-[35rem] w-[35rem] rounded-full structure-blur" style={{opacity:0.35}} />
        <div className="absolute right-0 top-1/4 h-[28rem] w-[50rem] bg-gradient-to-l from-white/10 to-transparent rounded-l-[4rem]" />
      </div>
    </>
  );
};

export default SpaceBackground; 