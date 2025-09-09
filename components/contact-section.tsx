"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Download, Send, User, MessageSquare } from "lucide-react"

interface ContactSectionProps {
    darkMode: boolean
    isVisible: boolean
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(({ darkMode, isVisible }, ref) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            const subject = `New message from ${formData.name}`
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
            window.location.href = `mailto:akalanka.yapa03@gmail.com?subject=${subject}&body=${body}`

            setFormData({ name: "", email: "", message: "" })
            setIsSubmitting(false)
        }, 1000)
    }

    return (
        <section
            ref={ref}
            id="contact"
            className={`py-20 px-4 md:px-8 lg:px-16 ${darkMode ? "bg-black" : "bg-gray-900"} bg-noise`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        className={`font-heading font-bold text-3xl md:text-5xl text-white mb-6 transition-all duration-1000 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        Let's Work Together
                    </h2>
                    <p
                        className={`font-body text-lg md:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-200 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        Ready to bring your ideas to life? Let's discuss your next project.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div
                        className={`transition-all duration-1000 delay-300 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        <Card
                            className={`p-8 ${darkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-800/50 border-gray-600"} backdrop-blur-sm`}
                        >
                            <h3 className="font-heading font-semibold text-2xl text-white mb-6">Send me a message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-300 font-body text-sm mb-2">
                                        <User className="w-4 h-4 inline mr-2" />
                                        Your Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-body text-sm mb-2">
                                        <Mail className="w-4 h-4 inline mr-2" />
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-body text-sm mb-2">
                                        <MessageSquare className="w-4 h-4 inline mr-2" />
                                        Message
                                    </label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-body font-semibold py-3 transition-all duration-300 hover:scale-[1.02]"
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Contact Info & Quick Actions */}
                    <div
                        className={`transition-all duration-1000 delay-500 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        <div className="space-y-8">
                            <Card
                                className={`p-8 ${darkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-800/50 border-gray-600"} backdrop-blur-sm`}
                            >
                                <h3 className="font-heading font-semibold text-2xl text-white mb-6">Get in touch</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Mail className="w-5 h-5 text-teal-500" />
                                        <span className="font-body">akalanka.yapa03@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <User className="w-5 h-5 text-teal-500" />
                                        <span className="font-body">Available for freelance work</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Button
                                        onClick={handleEmailClick}
                                        className="bg-teal-500 hover:bg-teal-600 text-white font-body font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        Quick Email
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={handleDownloadCV}
                                        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-body font-semibold transition-all duration-300 bg-transparent"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Resume
                                    </Button>
                                </div>
                            </Card>

                            <Card
                                className={`p-8 ${darkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-800/50 border-gray-600"} backdrop-blur-sm`}
                            >
                                <h3 className="font-heading font-semibold text-xl text-white mb-4">Response Time</h3>
                                <p className="text-gray-300 font-body text-sm leading-relaxed">
                                    I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out directly
                                    via email.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

ContactSection.displayName = "ContactSection"
