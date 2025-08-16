import { SpacecraftIcon, LinkedInIcon, GitHubIcon, EmailIcon, PhoneIcon, RocketIcon } from '../shared/Icons';

const Contact = () => {
  return (
    <>
      {/* Contact Constellation */}
      <section id="links" className="py-24 border-t border-white/10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs backdrop-blur mb-4">
            <span className="text-white/80">Contact Constellation</span>
            <span className="rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-2 py-0.5 text-[10px] font-semibold text-slate-900">Interactive</span>
          </div>
          <h2 className="text-3xl font-bold">Let's Connect Across the Galaxy</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Hover over the planets to explore different ways to reach me. Each planet represents a different communication channel.
          </p>
        </div>

        <div className="contact-constellation">
          <div className="constellation-container">
            {/* Cosmic Background Stars */}
            <div className="constellation-stars">
              <div className="cosmic-star"></div>
              <div className="cosmic-star"></div>
              <div className="cosmic-star"></div>
              <div className="cosmic-star"></div>
              <div className="cosmic-star"></div>
              <div className="cosmic-star"></div>
            </div>

            {/* Orbital Rings */}
            <div className="orbital-ring"></div>
            <div className="orbital-ring"></div>
            <div className="orbital-ring"></div>

            {/* Central Hub */}
            <div className="constellation-hub">
              <SpacecraftIcon />
            </div>

            {/* Contact Planets */}
            <a 
              href="https://www.linkedin.com/in/haytam-beniazza/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-planet planet-linkedin"
            >
              <LinkedInIcon />
              <div className="planet-info">
                LinkedIn Profile<br/>
                <span className="text-blue-300">Professional Network</span>
              </div>
            </a>

            <a 
              href="https://github.com/HaytamBeniazza" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-planet planet-github"
            >
              <GitHubIcon />
              <div className="planet-info">
                GitHub Profile<br/>
                <span className="text-gray-300">55+ Repositories</span>
              </div>
            </a>

            <a 
              href="mailto:beniazza0@gmail.com"
              className="contact-planet planet-email"
            >
              <EmailIcon />
              <div className="planet-info">
                Email Direct<br/>
                <span className="text-red-300">beniazza0@gmail.com</span>
              </div>
            </a>

            <a 
              href="tel:+21282707710"
              className="contact-planet planet-phone"
            >
              <PhoneIcon />
              <div className="planet-info">
                Phone Call<br/>
                <span className="text-green-300">+212 82 707 710</span>
              </div>
            </a>

            {/* Contact Details Panel */}
            <div className="contact-details">
              <h3>
                <svg className="w-5 h-5 inline mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
                Based in Marrakesh, Morocco
              </h3>
              <div className="contact-method">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
                <span>Available for remote & on-site projects</span>
              </div>
              <div className="contact-method">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
                </svg>
                <span>Response within 24-48 hours</span>
              </div>
              <div className="contact-method">
                <RocketIcon />
                <span>Open to full-stack opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section id="contact" className="py-16 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-white/70 mb-8">Let's discuss your next project and bring your ideas to life with cutting-edge technology.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:beniazza0@gmail.com?subject=Project%20Collaboration&body=Hi%20Haytam,%0A%0AI'd%20like%20to%20discuss%20a%20project%20opportunity%20with%20you.%0A%0A"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-sky-900/30 hover:from-sky-300 hover:to-blue-500 transition-all hover:scale-105"
            >
              <RocketIcon />
              Start a Project
            </a>
            <a 
              href="https://www.linkedin.com/in/haytam-beniazza/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold hover:border-white/40 hover:bg-white/5 transition-all hover:scale-105"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 