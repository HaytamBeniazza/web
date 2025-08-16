import SkillWheel from '../SkillWheel';

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 border-t border-white/10">
      <div className="flex items-center justify-center gap-3 mb-12">
        <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.4 6.9L22 10l-6 4.3L17.6 22 12 18.2 6.4 22 8 14.3 2 10l7.6-1.1L12 2z"/>
        </svg>
        <h2 className="text-3xl font-bold text-center">Skills That Stand Out</h2>
      </div>
      
      <div className="flex justify-center">
        <SkillWheel />
      </div>
      
      {/* Friendly gradient icon in the corner */}
      <span className="pointer-events-none select-none absolute -bottom-2 right-2 md:right-6 text-sky-400">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 6.9L22 10l-6 4.3L17.6 22 12 18.2 6.4 22 8 14.3 2 10l7.6-1.1L12 2z"/>
        </svg>
      </span>
    </section>
  );
};

export default Skills; 