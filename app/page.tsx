"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Database, Globe, Smartphone, Award, Users, Briefcase } from "lucide-react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const milestones = [
    {
        year: "2025",
        title: "Director - Alva Tech",
        description:
            "Overseeing product strategy and leading cross-functional teams to deliver innovative software solutions at scale",
        icon: <Code className="w-5 h-5" />,
    },
    {
        year: "2024",
        title: "Software Engineering Intern - Rumex",
        description:
            "Contributed to frontend services and optimized database performance with guidance of senior engineers team",
        icon: <Database className="w-5 h-5" />,
    },
    {
        year: "2023",
        title: "Student - Software Engineering",
        description:
            "Gained hands-on experience building full-stack applications with modern frameworks and cloud platforms",
        icon: <Globe className="w-5 h-5" />,
    },
    {
        year: "2022",
        title: "Student - A/Ls",
        description: "Began exploring programming fundamentals and creating simple mobile and web interfaces",
        icon: <Smartphone className="w-5 h-5" />,
    },
]

const projects = [
    {
        title: "Wishkah Prints - Frontend",
        description:
            "E-commerce platform for custom print products with responsive UI, product catalog, and seamless checkout flow.",
        image: "/wishkah.png",
        tech: ["React", "Tailwind CSS", "Redux Toolkit", "Stripe API", "Firebase"],
        github: "https://github.com/Pasindu03",
        live: "https://wishkahprints.ca/",
    },
    {
        title: "Lanka Shop - Frontend",
        description:
            "Modern online shopping platform with product filtering, cart management, and smooth client-side navigation.",
        image: "/lankashop.jpg",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
        github: "https://github.com/Pasindu03",
    },
    {
        title: "Backend Content Management System",
        description: "CMS backend for managing products, categories, and users with role-based access and secure APIs.",
        image: "/ls-be.png",
        tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
        github: "https://github.com/Pasindu03/LankaShop-CMS",
        live: "https://v0-admin-cms-requirements.vercel.app/",
    },
    {
        title: "Carfera Motors - Frontend",
        description:
            "Car dealership website with vehicle listings, booking requests, and an admin panel for inventory updates.",
        image: "/carfera.png",
        tech: ["React", "Tailwind CSS", "Axios", "Node.js", "MongoDB"],
        github: "https://github.com/Pasindu03/Carfera-Motors",
    },
    {
        title: "Weather Prediction AI Model",
        description:
            "AI-powered weather forecasting app with historical data visualization and interactive prediction charts.",
        image: "/ai.png",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit"],
        github: "https://github.com/Pasindu03/Weather-Prediction-AI",
    },
]

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Cloud", items: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"] },
    { category: "Tools", items: ["Git", "Figma", "Postman", "Jest", "Webpack"] },
]

const achievements = [
    {
        title: "Top Performer Award",
        description: "Recognized for exceptional performance and leadership in Q4 2023",
        icon: <Award className="w-6 h-6" />,
    },
    {
        title: "Team Leadership",
        description: "Successfully led a team of 8 developers on a critical project",
        icon: <Users className="w-6 h-6" />,
    },
    {
        title: "Client Success",
        description: "Delivered 15+ projects with 98% client satisfaction rate",
        icon: <Briefcase className="w-6 h-6" />,
    },
]

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false)
    const [isHeroVisible, setIsHeroVisible] = useState(false)
    const journeyAnimation = useScrollAnimation()
    const skillsAnimation = useScrollAnimation()
    const projectsAnimation = useScrollAnimation()
    const achievementsAnimation = useScrollAnimation()
    const contactAnimation = useScrollAnimation()

    useEffect(() => {
        setIsHeroVisible(true)
        // Check for saved theme preference
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark") {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        // Apply theme to document
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const handleEmailClick = () => {
        try {
            window.location.href =
                "mailto:akalanka.yapa03@gmail.com?subject=Let's work together&body=Hi Pasindu, I'd like to discuss a project with you."
        } catch (error) {
            navigator.clipboard.writeText("akalanka.yapa03@gmail.com")
            alert("Email copied to clipboard: akalanka.yapa03@gmail.com")
        }
    }

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
        >
            <FloatingNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <HeroSection darkMode={darkMode} isVisible={isHeroVisible} onEmailClick={handleEmailClick} />

            {/* Journey Section */}
            <section id="journey" className={`py-20 px-4 md:px-8 lg:px-16 ${darkMode ? "bg-gray-900/30" : "bg-gray-100/30"}`}>
                <div className="max-w-7xl mx-auto">
                    <h2
                        className={`font-heading font-bold text-3xl md:text-4xl text-center mb-16 uppercase tracking-wide transition-all duration-1000 ${
                            journeyAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        My Journey
                    </h2>

                    <div ref={journeyAnimation.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {milestones.map((milestone, index) => (
                            <Card
                                key={index}
                                className={`p-6 ${darkMode ? "bg-gray-800 border-gray-700 hover:border-teal-500" : "bg-white border-gray-200 hover:border-teal-500"} transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10 ${
                                    journeyAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-teal-500/10 rounded-lg text-teal-500 transition-all duration-300 hover:bg-teal-500/20 hover:scale-110">
                                        {milestone.icon}
                                    </div>
                                    <span className="font-heading font-bold text-teal-500 text-lg">{milestone.year}</span>
                                </div>
                                <h3 className="font-heading font-semibold text-lg mb-2">{milestone.title}</h3>
                                <p className={`font-body ${darkMode ? "text-gray-300" : "text-gray-600"} text-sm leading-relaxed`}>
                                    {milestone.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <h2
                        className={`font-heading font-bold text-3xl md:text-4xl text-center mb-16 uppercase tracking-wide transition-all duration-1000 ${
                            skillsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        Technical Skills
                    </h2>

                    <div ref={skillsAnimation.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skillGroup, index) => (
                            <Card
                                key={index}
                                className={`p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                                    skillsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <h3 className="font-heading font-semibold text-xl mb-4 text-teal-500">{skillGroup.category}</h3>
                                <div className="space-y-2">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            variant="secondary"
                                            className={`mr-2 mb-2 ${darkMode ? "bg-gray-700 text-gray-200 hover:bg-teal-500" : "bg-gray-100 text-gray-800 hover:bg-teal-500"} hover:text-white transition-all duration-300`}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className={`py-20 px-4 md:px-8 lg:px-16 ${darkMode ? "bg-gray-900/30" : "bg-gray-100/30"}`}
            >
                <div className="max-w-7xl mx-auto">
                    <h2
                        className={`font-heading font-bold text-3xl md:text-4xl text-center mb-16 uppercase tracking-wide transition-all duration-1000 ${
                            projectsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        Featured Projects
                    </h2>

                    <div ref={projectsAnimation.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className={`group overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700 hover:border-teal-500" : "bg-white border-gray-200 hover:border-teal-500"} transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 ${
                                    projectsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => window.open(project.github, "_blank")}
                                            className="bg-white/90 text-black hover:bg-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </Button>
                                        {project.live && (
                                            <Button
                                                size="sm"
                                                onClick={() => window.open(project.live, "_blank")}
                                                className="bg-teal-500 hover:bg-teal-600 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-teal-500 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p
                                        className={`font-body ${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-4 leading-relaxed`}
                                    >
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className={`text-xs font-body ${darkMode ? "hover:bg-teal-500" : "hover:bg-teal-500"} hover:text-white transition-all duration-300 cursor-default`}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <h2
                        className={`font-heading font-bold text-3xl md:text-4xl text-center mb-16 uppercase tracking-wide transition-all duration-1000 ${
                            achievementsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        Achievements
                    </h2>

                    <div ref={achievementsAnimation.ref} className="grid md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className={`p-8 text-center ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                                    achievementsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-teal-500/10 rounded-full text-teal-500">{achievement.icon}</div>
                                </div>
                                <h3 className="font-heading font-semibold text-xl mb-2">{achievement.title}</h3>
                                <p className={`font-body ${darkMode ? "text-gray-300" : "text-gray-600"} text-sm leading-relaxed`}>
                                    {achievement.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection ref={contactAnimation.ref} darkMode={darkMode} isVisible={contactAnimation.isVisible} />
        </div>
    )
}
