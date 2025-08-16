import { useState, useEffect, useRef } from 'react'

interface SkillCategory {
  title: string
  items: string[]
  icon: () => JSX.Element
}

const skillCategories: SkillCategory[] = [
  { 
    title: 'Languages', 
    items: ['PHP', 'JavaScript', 'Python', 'TypeScript', 'SQL'], 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.5 2H1.5C1.22 2 1 2.22 1 2.5V21.5C1 21.78 1.22 22 1.5 22H8.5C8.78 22 9 21.78 9 21.5V2.5C9 2.22 8.78 2 8.5 2ZM7 20H3V4H7V20Z"/>
        <path d="M15.5 2H22.5C22.78 2 23 2.22 23 2.5V21.5C23 21.78 22.78 22 22.5 22H15.5C15.22 22 15 21.78 15 21.5V2.5C15 2.22 15.22 2 15.5 2ZM21 20H17V4H21V20Z"/>
        <path d="M12 7L14 9H10L12 7Z"/>
        <path d="M12 17L10 15H14L12 17Z"/>
      </svg>
    )
  },
  { 
    title: 'Frameworks', 
    items: ['Laravel', 'Web2py', 'Spring Boot', 'Angular', 'Vue 3', 'Node'], 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46 6C21.69 6 21.04 6.52 20.83 7.26L19 14.5V22H20.5V15H21.5V22H23V14.5L21.17 7.26C20.96 6.52 20.31 6 19.54 6H22.46Z"/>
        <path d="M14 7H10C9.45 7 9 7.45 9 8V16C9 16.55 9.45 17 10 17H14C14.55 17 15 16.55 15 16V8C15 7.45 14.55 7 14 7ZM13 15H11V9H13V15Z"/>
        <path d="M6 4H2C1.45 4 1 4.45 1 5V19C1 19.55 1.45 20 2 20H6C6.55 20 7 19.55 7 19V5C7 4.45 6.55 4 6 4ZM5 18H3V6H5V18Z"/>
      </svg>
    )
  },
  { 
    title: 'Markup', 
    items: ['HTML5', 'CSS', 'SASS'], 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l10 18H2L12 2zm0 3.84L4.84 18h14.32L12 5.84z"/>
        <path d="M12 8l5 8H7l5-8z"/>
      </svg>
    )
  },
  { 
    title: 'Operating Systems', 
    items: ['Windows', 'Linux', 'macOS'], 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2ZM21 20H3V6H21V20Z"/>
        <path d="M5 8H19V10H5V8Z"/>
        <path d="M5 11H19V13H5V11Z"/>
        <path d="M5 14H14V16H5V14Z"/>
      </svg>
    )
  },
  { 
    title: 'Databases', 
    items: ['MySQL', 'PostgreSQL'], 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6V18L12 22L20 18V6L12 2L4 6ZM12 4.15L17.6 6.9L12 9.65L6.4 6.9L12 4.15ZM6 8.35L11 10.85V19.85L6 17.35V8.35ZM13 19.85V10.85L18 8.35V17.35L13 19.85Z"/>
        <path d="M12 10L8 8L12 6L16 8L12 10Z"/>
      </svg>
    )
  },
  { 
    title: 'Version Control', 
    items: ['GitHub', 'GitLab', 'Bitbucket'], 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  { 
    title: 'Methodologies', 
    items: ['Kanban', 'Agile'], 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    )
  },
  { 
    title: 'Project Management', 
    items: ['Jira', 'Trello', 'ClickUp'], 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
]

const genieMessages = [
  "He masters PHP and Laravel like a wizard! ✨",
  "JavaScript and TypeScript flow through his fingers! 💫",
  "Python and AI are his magical companions! 🐍",
  "Spring Boot and Angular bend to his will! 🌟",
  "Database queries dance at his command! 🗄️",
  "Git repositories obey his every wish! 📂",
  "Agile methodologies are his secret spells! ⚡",
  "Project management tools serve his vision! 📋"
]

export default function SkillWheel() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showGenie, setShowGenie] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showSpeech, setShowSpeech] = useState(false)
  const [isSequenceActive, setIsSequenceActive] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  
  const timersRef = useRef<{
    genieTimer?: NodeJS.Timeout
    messageTimer?: NodeJS.Timeout
    speechTimer?: NodeJS.Timeout
    resetTimer?: NodeJS.Timeout
    typingTimer?: NodeJS.Timeout
  }>({})
  
  const messageIndexRef = useRef(0)

  const handleStarHover = () => {
    // Prevent multiple triggers
    if (isSequenceActive) {
      console.log('Sequence already active, ignoring hover')
      return
    }
    
    console.log('🌟 Starting magical sequence')
    setIsSequenceActive(true)
    setIsSpinning(true)
    messageIndexRef.current = 0 // Reset message index
    
    // After 3 seconds of spinning, show the genie
    timersRef.current.genieTimer = setTimeout(() => {
      console.log('🧞‍♂️ Showing genie')
      setShowGenie(true)
      
      // Show speech bubble after genie appears
      timersRef.current.speechTimer = setTimeout(() => {
        console.log('💬 Showing first speech bubble')
        setShowSpeech(true)
        setCurrentMessage(0)
        setTypingComplete(false)
        showCurrentMessage()
      }, 800)
    }, 3000)
  }

  const handleStarLeave = () => {
    // Allow mouse leave but don't interrupt active sequences
    console.log('Mouse left star')
  }

  const clearAllTimers = () => {
    Object.values(timersRef.current).forEach(timer => {
      if (timer) clearTimeout(timer)
    })
    timersRef.current = {}
  }

  const resetEverything = () => {
    console.log('🔄 Resetting everything')
    clearAllTimers()
    setIsSpinning(false)
    setShowGenie(false)
    setShowSpeech(false)
    setCurrentMessage(0)
    setTypingComplete(false)
    messageIndexRef.current = 0
    
    // Allow time for animations to complete before re-enabling
    setTimeout(() => {
      setIsSequenceActive(false)
      console.log('✅ Ready for next sequence')
    }, 1000)
  }

  const showCurrentMessage = () => {
    const messageIndex = messageIndexRef.current
    console.log(`📝 Showing message ${messageIndex}: "${genieMessages[messageIndex]}"`)
    
    setCurrentMessage(messageIndex)
    setTypingComplete(false)
    
    // Mark typing as complete after animation
    timersRef.current.typingTimer = setTimeout(() => {
      setTypingComplete(true)
      console.log(`✅ Typing complete for message ${messageIndex}`)
    }, 3000)
    
    // Move to next message after display time
    timersRef.current.messageTimer = setTimeout(() => {
      messageIndexRef.current++
      
      if (messageIndexRef.current >= genieMessages.length) {
        // Completed all messages
        console.log('🎉 All messages completed')
        timersRef.current.resetTimer = setTimeout(() => {
          resetEverything()
        }, 2000)
      } else {
        // Continue to next message
        console.log(`➡️ Moving to next message (${messageIndexRef.current})`)
        showCurrentMessage()
      }
    }, 4500) // 4.5 seconds per message (3s typing + 1.5s reading)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => clearAllTimers()
  }, [])

  const getPositionStyle = (index: number, total: number) => {
    const angle = (index * 360) / total
    const radius = 180
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius
    
    return {
      transform: `translate(${x}px, ${y}px)`,
    }
  }

  return (
    <div className="skill-wheel-container">
      <div className="skill-wheel">
        {/* Enhanced Central hub with magical effects */}
        <div 
          className={`skill-wheel-center ${isSpinning ? 'spinning' : ''}`}
          onMouseEnter={handleStarHover}
          onMouseLeave={handleStarLeave}
          style={{ 
            cursor: isSequenceActive ? 'default' : 'pointer',
            opacity: isSequenceActive ? 0.7 : 1,
            pointerEvents: isSequenceActive ? 'none' : 'auto'
          }}
        >
          <div className="skill-wheel-center-icon">⭐</div>
        </div>

        {/* Magical particles */}
        <div className="magical-particles"></div>

        {/* Genie Character */}
        <div className={`genie-character ${showGenie ? 'active' : ''}`}>
          🧞‍♂️
          
          {/* Speech Bubble */}
          <div className={`genie-speech ${showSpeech ? 'active' : ''}`}>
            {showSpeech && (
              <div 
                className={`typing-text ${typingComplete ? 'typing-complete' : ''}`}
                key={`message-${currentMessage}-${messageIndexRef.current}`}
              >
                {genieMessages[currentMessage]}
              </div>
            )}
          </div>
        </div>

        {/* Skill categories positioned in circle */}
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className={`skill-category ${selectedCategory === index ? 'active' : ''}`}
            style={getPositionStyle(index, skillCategories.length)}
            onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
          >
            <div className="skill-category-button">
              <span className="mr-2">{category.icon()}</span>
              {category.title}
            </div>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <div className={`skills-detail-panel ${selectedCategory !== null ? 'active' : ''}`}>
        {selectedCategory !== null && (
          <>
            <div className="skills-detail-title">
              <span className="mr-2">{skillCategories[selectedCategory].icon()}</span>
              {skillCategories[selectedCategory].title}
            </div>
            <div className="skills-detail-grid">
              {skillCategories[selectedCategory].items.map((skill) => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
} 