import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import DeveloperBackground from './components/DeveloperBackground'
import ParticleSystem from './components/ParticleSystem'
import CustomCursor from './components/CustomCursor'
import MorphingBlob from './components/MorphingBlob'
import LoadingScreen from './components/LoadingScreen'
import './components/ResponsiveOptimizations.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'hobbies', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="app">
      <DeveloperBackground />
      <ParticleSystem />
      <MorphingBlob />
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Hobbies />
        <Contact />
      </main>
    </div>
  )
}

export default App

