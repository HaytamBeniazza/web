import { RocketIcon } from '../shared/Icons';

const About = () => {
  return (
    <section id="about" className="relative py-24 border-t border-white/10 overflow-hidden">
      {/* Animated Section Title */}
      <h2 className="section-title text-3xl font-bold relative z-10">About</h2>
      
      {/* Enhanced Cards Grid */}
      <div className="mt-8 grid md:grid-cols-3 gap-6 relative z-10">
        <div className="about-card rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="about-particles"></div>
          <div className="text-sm text-white/60">
            <span className="about-icon">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </span> Bootcamp
          </div>
          <div className="about-title mt-1 font-semibold">Java / Spring Boot</div>
          <p className="mt-2 text-sm text-white/70">
            Solid foundations in backend development and service‑oriented architecture.
          </p>
        </div>

        <div className="about-card rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="about-particles"></div>
          <div className="text-sm text-white/60">
            <span className="about-icon">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
              </svg>
            </span> Experience
          </div>
          <div className="about-title mt-1 font-semibold">Laravel / Vue.js (1 year)</div>
          <p className="mt-2 text-sm text-white/70">
            Modern web apps with a focus on productivity and quality.
          </p>
        </div>

        <div className="about-card rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="about-particles"></div>
          <div className="text-sm text-white/60">
            <span className="about-icon">
              <RocketIcon />
            </span> Exploration
          </div>
          <div className="about-title mt-1 font-semibold">Python / AI (2 months)</div>
          <p className="mt-2 text-sm text-white/70">
            Automation and AI prototypes to accelerate workflows.
          </p>
        </div>
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default About; 