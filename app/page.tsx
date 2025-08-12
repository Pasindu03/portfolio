"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code,
    Database,
    Globe,
    Smartphone,
    Menu,
    X,
    Moon,
    Sun,
    Download,
    Award,
    Users,
    Briefcase,
} from "lucide-react"

const specialties = [
    "Building Scalable Apps",
    "Engineering for Humans",
    "Automating the Future",
    "Crafting Digital Experiences",
]

const milestones = [
    {
        year: "2024",
        title: "Senior Full-Stack Engineer",
        description: "Leading development of microservices architecture serving 1M+ users",
        icon: <Code className="w-5 h-5" />,
    },
    {
        year: "2023",
        title: "Tech Lead",
        description: "Mentored 5 junior developers while shipping 3 major product features",
        icon: <Database className="w-5 h-5" />,
    },
    {
        year: "2022",
        title: "Full-Stack Developer",
        description: "Built responsive web apps with React, Node.js, and cloud infrastructure",
        icon: <Globe className="w-5 h-5" />,
    },
    {
        year: "2021",
        title: "Frontend Developer",
        description: "Started my journey creating beautiful, accessible user interfaces",
        icon: <Smartphone className="w-5 h-5" />,
    },
]

const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard",
        image: "/modern-ecommerce-dashboard.png",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        github: "https://github.com/Pasindu03",
        live: "#",
    },
    {
        title: "Task Management SaaS",
        description: "Collaborative project management tool with real-time updates and team analytics",
        image: "/clean-task-management-app.png",
        tech: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Vercel"],
        github: "https://github.com/Pasindu03",
        live: "#",
    },
    {
        title: "AI Content Generator",
        description: "Machine learning powered content creation tool with custom model training",
        image: "/ai-content-generation-interface.png",
        tech: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
        github: "https://github.com/Pasindu03",
        live: "#",
    },
    {
        title: "Mobile Banking App",
        description: "Secure financial application with biometric authentication and real-time transactions",
        image: "/mobile-banking-app.png",
        tech: ["React Native", "Node.js", "MongoDB", "JWT", "Plaid API"],
        github: "https://github.com/Pasindu03",
        live: "#",
    },
    {
        title: "IoT Dashboard",
        description: "Real-time monitoring system for smart home devices with predictive analytics",
        image: "/iot-dashboard.png",
        tech: ["Vue.js", "Express", "InfluxDB", "MQTT", "Chart.js"],
        github: "https://github.com/Pasindu03",
        live: "#",
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

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
]

function FloatingNavbar({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
    const [activeSection, setActiveSection] = useState("hero")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true) // Set to true initially so navbar appears immediately

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setIsVisible(scrollY > 50) // Reduced threshold so navbar appears sooner

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
                            className={`text-sm font-medium transition-all duration-300 hover:text-accent ${
                                activeSection === item.href.substring(1) ? "text-accent" : darkMode ? "text-white/70" : "text-black/70"
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${darkMode ? "text-white/70 hover:text-accent" : "text-black/70 hover:text-accent"}`}
                    >
                        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${darkMode ? "text-white/70 hover:text-accent" : "text-black/70 hover:text-accent"}`}
                    >
                        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`transition-colors ${darkMode ? "text-white/70 hover:text-accent" : "text-black/70 hover:text-accent"}`}
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
                                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${
                                        activeSection === item.href.substring(1)
                                            ? "text-accent"
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

function useScrollAnimation() {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return { ref, isVisible }
}

function TypewriterText({ texts, className }: { texts: string[]; className?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                const fullText = texts[currentIndex]

                if (isDeleting) {
                    setCurrentText(fullText.substring(0, currentText.length - 1))
                } else {
                    setCurrentText(fullText.substring(0, currentText.length + 1))
                }

                if (!isDeleting && currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), 2000)
                } else if (isDeleting && currentText === "") {
                    setIsDeleting(false)
                    setCurrentIndex((prev) => (prev + 1) % texts.length)
                }
            },
            isDeleting ? 50 : 100,
        )

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentIndex, texts])

    return (
        <span className={className}>
      {currentText}
            <span className="animate-pulse">|</span>
    </span>
    )
}

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
        window.location.href = "mailto:akalanka.yapa03@gmail.com"
    }

    const handleDownloadCV = () => {
        const link = document.createElement("a")
        link.href = "/cv-document.png"
        link.download = "Pasindu_Yapa_CV.pdf"
        link.click()
    }

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
        >
            <FloatingNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Typography */}
                    <div
                        className={`space-y-8 transition-all duration-1000 ${
                            isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                                    isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                            >
                                Full-stack software engineer with 4+ years of experience building scalable web applications that solve
                                real-world problems and delight users.
                            </p>
                        </div>

                        <div
                            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                                isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                                isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                                onClick={handleEmailClick}
                                className={`${darkMode ? "text-gray-400 hover:text-teal-500" : "text-gray-600 hover:text-teal-500"} transition-all duration-300 hover:scale-110`}
                            >
                                <Mail className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Abstract Visual */}
                    <div
                        className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${
                            isHeroVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                        }`}
                    >
                        <div className="relative w-96 h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full float-animation"></div>
                            <div
                                className={`absolute inset-8 bg-gradient-to-tl ${darkMode ? "from-gray-700/30" : "from-gray-300/30"} to-transparent rounded-full float-animation`}
                                style={{ animationDelay: "2s" }}
                            ></div>
                            <div
                                className="absolute inset-16 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full float-animation"
                                style={{ animationDelay: "4s" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Timeline */}
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

            {/* Projects Showcase */}
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
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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
                                        <Button
                                            size="sm"
                                            onClick={() => window.open(project.live, "_blank")}
                                            className="bg-teal-500 hover:bg-teal-600 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live
                                        </Button>
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

            {/* Contact CTA */}
            <section id="contact" className={`py-20 px-4 md:px-8 lg:px-16 ${darkMode ? "bg-black" : "bg-gray-900"} bg-noise`}>
                <div ref={contactAnimation.ref} className="max-w-4xl mx-auto text-center">
                    <h2
                        className={`font-heading font-bold text-3xl md:text-5xl text-white mb-6 transition-all duration-1000 ${
                            contactAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        Let's talk about your next project
                    </h2>
                    <p
                        className={`font-body text-lg md:text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                            contactAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        I'm always interested in new opportunities and exciting challenges. Whether you have a project in mind or
                        just want to chat about tech, I'd love to hear from you.
                    </p>

                    <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
                            contactAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        <Button
                            size="lg"
                            onClick={handleEmailClick}
                            className="bg-teal-500 hover:bg-teal-600 text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Get In Touch
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleDownloadCV}
                            className="border-white text-white hover:bg-white hover:text-black font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent hover:scale-105"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Resume
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
