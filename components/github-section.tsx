"use client"

import { forwardRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, GitBranch, Star, Users } from "lucide-react"

interface GitHubSectionProps {
  darkMode: boolean
  isVisible: boolean
}

export const GitHubSection = forwardRef<HTMLElement, GitHubSectionProps>(({ darkMode, isVisible }, ref) => {
  return (
    <section ref={ref} id="github" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`font-heading font-bold text-3xl md:text-4xl text-center mb-16 uppercase tracking-wide transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          GitHub Activity
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* GitHub Stats */}
          <div
            className={`lg:col-span-1 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Card className={`p-6 h-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
              <div className="flex items-center gap-3 mb-6">
                <Github className="w-8 h-8 text-teal-500" />
                <h3 className="font-heading font-semibold text-xl">GitHub Stats</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-teal-500" />
                    <span className="font-body text-sm">Public Repos</span>
                  </div>
                  <span className="font-heading font-bold text-teal-500">25+</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-teal-500" />
                    <span className="font-body text-sm">Total Stars</span>
                  </div>
                  <span className="font-heading font-bold text-teal-500">50+</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-teal-500" />
                    <span className="font-body text-sm">Followers</span>
                  </div>
                  <span className="font-heading font-bold text-teal-500">15+</span>
                </div>
              </div>

              <Button
                className="w-full mt-6 bg-teal-500 hover:bg-teal-600"
                onClick={() => window.open("https://github.com/Pasindu03", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Profile
              </Button>
            </Card>
          </div>

          {/* GitHub Contribution Graph */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Card className={`p-6 h-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
              <h3 className="font-heading font-semibold text-xl mb-6">Contribution Activity</h3>

              {/* GitHub Contribution Graph Embed */}
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <img
                  src={`https://ghchart.rshah.org/${darkMode ? "238636" : "2dd4bf"}/Pasindu03`}
                  alt="GitHub Contribution Graph"
                  className="w-full h-full object-contain"
                  style={{
                    filter: darkMode ? "invert(1) hue-rotate(180deg)" : "none",
                    background: darkMode ? "#1f2937" : "#f9fafb",
                  }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-sm ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}></div>
                  <span className="font-body text-xs">Less</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-teal-200"></div>
                  <span className="font-body text-xs"></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-teal-400"></div>
                  <span className="font-body text-xs"></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-teal-600"></div>
                  <span className="font-body text-xs"></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-teal-800"></div>
                  <span className="font-body text-xs">More</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
})

GitHubSection.displayName = "GitHubSection"
