"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

interface FloatingNavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export function FloatingNavbar({ darkMode, toggleDarkMode }: FloatingNavbarProps) {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true) // Always show navbar initially

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(true)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call immediately to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div
        className={`${darkMode ? "bg-black/80" : "bg-white/80"} backdrop-blur-md border ${darkMode ? "border-white/10" : "border-black/10"} rounded-full px-6 py-3`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-all duration-300 hover:text-teal-500 ${
                activeSection === item.href.substring(1)
                  ? "text-teal-500"
                  : darkMode
                    ? "text-white/70"
                    : "text-black/70"
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${darkMode ? "text-white/70 hover:text-teal-500" : "text-black/70 hover:text-teal-500"}`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${darkMode ? "text-white/70 hover:text-teal-500" : "text-black/70 hover:text-teal-500"}`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors ${darkMode ? "text-white/70 hover:text-teal-500" : "text-black/70 hover:text-teal-500"}`}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {isMenuOpen && (
            <div
              className={`absolute top-full left-0 right-0 mt-2 ${darkMode ? "bg-black/90" : "bg-white/90"} backdrop-blur-md border ${darkMode ? "border-white/10" : "border-black/10"} rounded-lg py-2`}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-teal-500 ${
                    activeSection === item.href.substring(1)
                      ? "text-teal-500"
                      : darkMode
                        ? "text-white/70"
                        : "text-black/70"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
