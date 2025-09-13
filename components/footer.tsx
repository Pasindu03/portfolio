"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  darkMode: boolean
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`py-12 px-4 md:px-8 lg:px-16 ${darkMode ? "bg-gray-900 border-t border-gray-800" : "bg-gray-100 border-t border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-teal-500">Pasindu Yapa</h3>
            <p className={`font-body text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Software Engineer passionate about creating innovative solutions and building exceptional user
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Journey", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`block font-body text-sm hover:text-teal-500 transition-colors duration-300 ${
                    darkMode ? "text-gray-400 hover:text-teal-400" : "text-gray-600 hover:text-teal-600"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://github.com/Pasindu03", "_blank")}
                className={`${darkMode ? "border-gray-700 hover:border-teal-500" : "border-gray-300 hover:border-teal-500"} hover:scale-110 transition-all duration-300`}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://www.linkedin.com/in/pasiyapa", "_blank")}
                className={`${darkMode ? "border-gray-700 hover:border-teal-500" : "border-gray-300 hover:border-teal-500"} hover:scale-110 transition-all duration-300`}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => (window.location.href = "mailto:akalanka.yapa03@gmail.com")}
                className={`${darkMode ? "border-gray-700 hover:border-teal-500" : "border-gray-300 hover:border-teal-500"} hover:scale-110 transition-all duration-300`}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t ${darkMode ? "border-gray-800" : "border-gray-200"} flex flex-col md:flex-row items-center justify-between gap-4`}
        >
          <p className={`font-body text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © 2025 Pasindu Yapa. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className={`font-body text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className={`font-body text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>by me</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
