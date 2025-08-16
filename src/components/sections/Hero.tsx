const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-1 text-xs">
              <span className="text-white/90">Meet the Developer</span>
              <span className="rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-2 py-0.5 text-[10px] font-semibold text-slate-900">Full Stack</span>
            </div>

            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-widest text-white">
              HAYTAM
              <br />
              <span className="text-transparent bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text">
                BENIAZZA
              </span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Full‑stack developer focused on building and maintaining integrated systems, experienced with
              PHP, JavaScript, Python, TypeScript, and SQL. Passionate about process optimization and solving
              complex technical problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-sky-900/30 hover:from-sky-300 hover:to-blue-500 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
              <img
                src="./ai-agi-hero.jpg"
                alt="AI and AGI concept illustration"
                className="w-full h-[500px] object-cover object-center"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  console.log('Image failed to load:', e);
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
              {/* Subtle overlay for integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              {/* Floating tech badges */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs text-white">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  Available for work
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 space-y-2">
                <div className="inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs text-white">
                  🚀 AI & Full-Stack
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 