"use client"

import { forwardRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

interface EducationSectionProps {
  darkMode: boolean
  isVisible: boolean
}

const educationData = [
  {
    year: "2023 - Present",
    title: "Bachelor of Software Engineering",
    institution: "University of Kelaniya",
    description: "Specialized in full-stack development, algorithms, and software architecture",
    type: "education",
    status: "In Progress",
  },
  {
    year: "2022",
    title: "Advanced Level - Physical Science",
    institution: "Ananda College Colombo",
    description: "Mathematics, Physics, Chemistry with distinction",
    type: "education",
    status: "Completed",
  },
]

const certifications = [
  {
    year: "2024",
    title: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    description: "Cloud computing fundamentals and AWS services",
    type: "certification",
    status: "Certified",
  },
  {
    year: "2024",
    title: "React Developer Certification",
    institution: "Meta",
    description: "Advanced React patterns and best practices",
    type: "certification",
    status: "Certified",
  },
  {
    year: "2023",
    title: "Full Stack Web Development",
    institution: "freeCodeCamp",
    description: "Complete web development bootcamp with projects",
    type: "certification",
    status: "Certified",
  },
]

export const EducationSection = forwardRef<HTMLElement, EducationSectionProps>(({ darkMode, isVisible }, ref) => {
  const allItems = [...educationData, ...certifications].sort((a, b) => {
    const yearA = Number.parseInt(a.year.split(" ")[0])
    const yearB = Number.parseInt(b.year.split(" ")[0])
    return yearB - yearA
  })

  return (
    <section
      ref={ref}
      id="education"
      className={`py-20 px-4 md:px-8 lg:px-16 ${darkMode ? "bg-gray-900/30" : "bg-gray-100/30"}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`font-heading font-bold text-3xl md:text-4xl text-center mb-16 uppercase tracking-wide transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Education & Certifications
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 ${darkMode ? "bg-gray-700" : "bg-gray-300"} hidden md:block`}
          ></div>

          <div className="space-y-8">
            {allItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:flex w-16 h-16 rounded-full ${item.type === "education" ? "bg-teal-500" : "bg-purple-500"} items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  {item.type === "education" ? (
                    <GraduationCap className="w-8 h-8 text-white" />
                  ) : (
                    <Award className="w-8 h-8 text-white" />
                  )}
                </div>

                <Card
                  className={`flex-1 p-6 ${darkMode ? "bg-gray-800 border-gray-700 hover:border-teal-500" : "bg-white border-gray-200 hover:border-teal-500"} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <div
                        className={`md:hidden p-2 rounded-lg ${item.type === "education" ? "bg-teal-500/10 text-teal-500" : "bg-purple-500/10 text-purple-500"}`}
                      >
                        {item.type === "education" ? (
                          <GraduationCap className="w-5 h-5" />
                        ) : (
                          <Award className="w-5 h-5" />
                        )}
                      </div>
                      <h3 className="font-heading font-semibold text-xl">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-500" />
                      <span className="font-body text-sm text-teal-500 font-medium">{item.year}</span>
                    </div>
                  </div>

                  <p className="font-heading font-medium text-lg mb-2 text-teal-500">{item.institution}</p>
                  <p
                    className={`font-body ${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-4 leading-relaxed`}
                  >
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        item.status === "Completed" || item.status === "Certified"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                      }`}
                    >
                      {item.status}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`${
                        item.type === "education"
                          ? "border-teal-500/50 text-teal-500"
                          : "border-purple-500/50 text-purple-500"
                      }`}
                    >
                      {item.type === "education" ? "Education" : "Certification"}
                    </Badge>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

EducationSection.displayName = "EducationSection"
