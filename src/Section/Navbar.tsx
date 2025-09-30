import { Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when at the top of the page
      if (currentScrollY === 0) {
        setIsVisible(true)
      }
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <div>
        <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 bg-black/80 backdrop-blur-md border-b border-gray-800/50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-semibold">Hinton AI</span>
          </div>
          <a
            href="https://zenaida-unintrusive-rumply.ngrok-free.dev/dev-ui/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-amber-400 transition-colors"
          >
            View Live Demo
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar