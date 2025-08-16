import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Navigation from '../components/shared/Navigation';
import SpaceBackground from '../components/shared/SpaceBackground';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-space overflow-x-clip">
      {/* Space Background Effects */}
      <SpaceBackground />

      {/* Dynamic Navigation */}
      <Navigation />

      {/* Hero Section - Outside Main Container */}
      <Hero />

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4">
        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Haytam Beniazza. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage; 