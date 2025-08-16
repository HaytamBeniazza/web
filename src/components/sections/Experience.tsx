import { experienceData, experienceMetrics, skillCategories } from '../../data/projects';

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/10">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <span className="text-white/80">Professional Journey</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold">PROFESSIONAL <span className="text-sky-400">EXPERIENCE</span></h2>
        <p className="mt-4 text-white/60 text-lg max-w-2xl">
          Building scalable web applications and leading technical initiatives across diverse industries
        </p>

        {/* Experience Metrics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {experienceMetrics.map((metric, index) => (
            <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className="text-xl font-bold text-sky-400">{metric.value}</div>
              <div className="text-sm text-white/60">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-purple-400 to-transparent opacity-30"></div>

          {experienceData.map((experience, index) => (
            <div key={experience.id} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-sky-400 rounded-full border-4 border-gray-900 shadow-lg shadow-sky-400/50"></div>

              {/* Experience Card */}
              <div className="ml-20 cool-card rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="card-particle"></div>
                <div className="card-particle"></div>
                <div className="card-particle"></div>
                <div className="wave-flow"></div>
                <div className="circuit-pattern"></div>
                
                <div className="card-content">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold holo-text">{experience.role}</h3>
                      <p className="text-lg text-white/80 font-semibold">{experience.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          📅 {experience.period}
                        </span>
                        <span className="flex items-center gap-1">
                          📍 {experience.location}
                        </span>
                        <span className="flex items-center gap-1">
                          💼 {experience.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {Object.entries(experience.highlights).map(([key, value]) => (
                      <div key={key} className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-sm font-semibold text-sky-400">{value}</div>
                        <div className="text-xs text-white/60 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Key Achievements</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="leading-relaxed">{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-medium backdrop-blur"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical <span className="text-sky-400">Expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="cool-card rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="card-particle"></div>
                <div className="wave-flow"></div>
                
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="font-semibold holo-text">{category.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 rounded text-xs border border-white/20 bg-white/10 backdrop-blur"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="cool-card rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur max-w-2xl mx-auto">
            <div className="wave-flow"></div>
            <div className="card-content">
              <h3 className="text-xl font-bold holo-text mb-4">Ready to Collaborate?</h3>
              <p className="text-white/70 mb-6">
                Let's discuss how my experience can contribute to your next project
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-400 to-purple-400 text-white font-semibold hover:scale-105 transition-transform"
              >
                Get In Touch
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 