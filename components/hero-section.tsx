"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { TypewriterText } from "./typewriter-text"

const specialties = [
  "Building Scalable Apps",
  "Engineering for Humans",
  "Automating the Future",
  "Crafting Digital Experiences",
]

interface HeroSectionProps {
  darkMode: boolean
  isVisible: boolean
  onEmailClick: () => void
}

export function HeroSection({ darkMode, isVisible, onEmailClick }: HeroSectionProps) {
  return (
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Typography */}
          <div
              className={`space-y-8 transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <div className="space-y-4">
              <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight animate-fade-in-up">
                Pasindu Yapa
              </h1>
              <div className="h-16 md:h-20">
                <TypewriterText
                    texts={specialties}
                    className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-teal-500"
                />
              </div>
              <p
                  className={`font-body text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-lg leading-relaxed transition-all duration-1000 delay-300 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
              >
                Full-stack software engineer with 1+ years of experience building scalable web applications that solve
                real-world problems and delight users.
              </p>
            </div>

            <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <Button
                  size="lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-teal-500 hover:bg-teal-600 text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Let's Build Something
              </Button>
              <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent hover:scale-105"
              >
                View My Work
              </Button>
            </div>

            <div
                className={`flex gap-6 pt-4 transition-all duration-1000 delay-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <a
                  href="https://github.com/Pasindu03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? "text-gray-400 hover:text-teal-500" : "text-gray-600 hover:text-teal-500"} transition-all duration-300 hover:scale-110`}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                  href="https://www.linkedin.com/in/pasiyapa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? "text-gray-400 hover:text-teal-500" : "text-gray-600 hover:text-teal-500"} transition-all duration-300 hover:scale-110`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <button
                  onClick={onEmailClick}
                  className={`${darkMode ? "text-gray-400 hover:text-teal-500" : "text-gray-600 hover:text-teal-500"} transition-all duration-300 hover:scale-110`}
              >
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right: Profile Picture */}
          <div
              className={`flex justify-center items-center transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full float-animation"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-teal-500/30 hover:border-teal-500/60 transition-all duration-300">
                <img
                    src="/pp.jpg"
                    alt="Pasindu Yapa - Software Engineer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                  className="absolute -inset-2 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full float-animation opacity-50"
                  style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
  )
}
