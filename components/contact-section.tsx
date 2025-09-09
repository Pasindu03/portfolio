"use client"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Download } from "lucide-react"

interface ContactSectionProps {
    darkMode: boolean
    isVisible: boolean
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(({ darkMode, isVisible }, ref) => {
    const handleEmailClick = () => {
        try {
            window.location.href =
                "mailto:akalanka.yapa03@gmail.com?subject=Let's work together&body=Hi Pasindu, I'd like to discuss a project with you."
        } catch (error) {
            navigator.clipboard.writeText("akalanka.yapa03@gmail.com")
            alert("Email copied to clipboard: akalanka.yapa03@gmail.com")
        }
    }

    const handleDownloadCV = () => {
        try {
            const link = document.createElement("a")
            link.href = "/cv-document.png"
            link.download = "Pasindu_Yapa_Resume.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } catch (error) {
            window.open("/cv-document.png", "_blank")
        }
    }

    return (
        <section
            ref={ref}
            id="contact"
            className={`py-20 px-4 md:px-8 lg:px-16 ${darkMode ? "bg-black" : "bg-gray-900"} bg-noise`}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2
                    className={`font-heading font-bold text-3xl md:text-5xl text-white mb-6 transition-all duration-1000 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                >
                    Let's talk about your next project
                </h2>
                <p
                    className={`font-body text-lg md:text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                >
                    I'm always interested in new opportunities and exciting challenges. Whether you have a project in mind or just
                    want to chat about tech, I'd love to hear from you.
                </p>

                <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
    )
})

ContactSection.displayName = "ContactSection"
