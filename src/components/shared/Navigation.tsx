import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? 'side-position' : 'top-position'}`}>
      <div className="mx-auto max-w-6xl px-4">
        <nav className="navbar-wave navbar-glow mx-auto flex w-full md:w-max items-center justify-center gap-6 rounded-full bg-white/90 text-slate-900 px-6 py-3 shadow-lg">
          <a href="#about" className="text-sm font-medium hover:text-sky-600 transition-colors" data-full="About">
            <span className="short-text">AB</span>
            <span>About</span>
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-sky-600 transition-colors" data-full="Skills">
            <span className="short-text">SK</span>
            <span>Skills</span>
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-sky-600 transition-colors" data-full="Experience">
            <span className="short-text">EX</span>
            <span>Experience</span>
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-sky-600 transition-colors" data-full="Projects">
            <span className="short-text">PR</span>
            <span>Projects</span>
          </a>
          <a href="#links" className="text-sm font-medium hover:text-sky-600 transition-colors" data-full="Links">
            <span className="short-text">LI</span>
            <span>Links</span>
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-sky-600 transition-colors" data-full="Contact">
            <span className="short-text">CO</span>
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navigation; 