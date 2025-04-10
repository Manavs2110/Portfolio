"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Phone, Download, ChevronRight } from 'lucide-react'
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import '../styles/globals.css';

// Add smooth scroll behavior to navigation links
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const targetId = href.replace("#", "")
  const element = document.getElementById(targetId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for header height
      behavior: "smooth",
    })

    // Update URL without page reload
    window.history.pushState({}, "", href)
  }
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      title: "Flood Satellite Data Showcase",
      description:
        "A Database Management website facilitating easy database access, featuring JWT token-based authorization for enhanced security.",
      image: "./Project_Flood_Satellite.png?height=300&width=400",
      tags: ["NodeJS", "EJS", "MongoDB", "RESTful API"],
      link: "https://github.com/Manavs2110/apiflood",
      category: "fullstack",
    },
    {
      title: "NSS Summit Portal (NSS - IITR)",
      description:
        "A full-stack portal with interactive UI/UX using React and React Hooks, featuring REST APIs and role-based authentication.",
      image: "./NSS_Summit_Project.png?height=300&width=500",
      tags: ["ReactJs", "Redux", "Axios", "NodeJS", "MongoDB"],
      link: "https://nss.iitr.ac.in/",
      category: "fullstack",
    },
    {
      title: "Blinkit Print Service",
      description:
        "A dynamic print service interface developed using React.js, TypeScript, Redux, and Material-UI for managing and customizing print orders seamlessly.",
      image: "./Blinkit_Print.png?height=400&width=600",
      tags: ["TypeScript", "React.Js", "Material-UI", "Redux"],
      link: "https://blinkit.com/print",
      category: "frontend",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A simple and interactive Tic-Tac-Toe game built using vanilla JavaScript, HTML, and CSS for the frontend.",
      image: "./Tic_Tac_Toe.png?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://manavs2110.github.io/tictactoe.github.io/",
      category: "frontend",
    },
  ]

  const experiences = [
    {
      company: "Cleartax",
      position: "Software Engineer",
      duration: "June 2024 - Present",
      location: "Bangalore, Karnataka",
      description: [
        "Worked in the Supply Chain segment, contributing to the design, development, and optimization of scalable enterprise software solutions.",
        "Designed and implemented GLStream support to replace existing SAP support for fetching ERP data, integrating Parquet file handling, and validating data fields using system templates and custom data types.",
        "Redesigned the Re-KYC process for vendor compliance by incorporating skipped case handling, fixing metering credit deduction errors, and improving workflows.",
        "Integrated analytics services to track purchase orders and invoice statuses, and deployed a Metabase dashboard for real-time insights.",
        "Reduced System downtime and improved reliability by identifying and addressing 60+ oncall issues.",
        "Refactored APIs and backend services to reduce response times, optimize database queries, and enhance performance.",
      ],
    },
    {
      company: "Zomato",
      position: "Software Developer Intern",
      duration: "May 2023 - July 2023",
      location: "Gurugram, Haryana",
      description: [
        "Developed Photo Printing Service and upgraded print web to handle multiple files and password protected files.",
        "Upgraded Print Dashboard UI to control order state tracking, auto job assignment failures and printer adjustments.",
        "Worked on the BFF layer to optimize user engagement tracking and used SEO strategies, resulting in 10-15% increase in user base.",
        "Tech Stack: TypeScript, React.js, Amazon S3, Ant Design, MUI, Git/GitHub, Postman.",
      ],
    },
    {
      company: "Moveup.ai",
      position: "Frontend Developer Intern",
      duration: "Dec 2023 - Feb 2024",
      location: "Remote, USA",
      description: [
        "Integrated Google Analytics, AWS Cognito, and auth0 for enhanced user tracking and secure login/logout.",
        "Streamlined code structure and readability, improving performance and maintainability.",
        "Developed interactive career path graphs using React-flow, Material UI, and Tailwind CSS, boosting UI/UX.",
      ],
    },
  ]

  const skills = {
    "Programming Languages": ["C++", "Java", "JavaScript", "HTML", "CSS", "Python"],
    Frameworks: ["Spring Boot", "React.js", "Node.js", "Express.js"],
    "Database Technologies": ["MySQL", "MongoDB", "PostgreSQL"],
    "Tools and Frameworks": ["Git", "AWS", "Kubernetes", "Coralogix", "Retool"],
    "Other Skills": [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Database Management System (DBMS)",
      "OS Fundamentals",
      "Computer Networks",
      "Problem Solving",
      "Competitive Programming",
    ],
  }

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    try {
      // In a real application, you would send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset form status after showing success message
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">{"< ManavSingh.dev />"}</span>
            </Link>
          </div>
          <nav className="navbar gap-6 md:flex">
            <Link
              href="#about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => scrollToSection(e, '#about')}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => scrollToSection(e, '#experience')}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => scrollToSection(e, '#skills')}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => scrollToSection(e, '#projects')}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="default" asChild className="hidden md:flex">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container flex flex-col items-center gap-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            >
              Software Engineer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 dark:from-primary dark:to-blue-400"
            >
              Manav Singh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            >
              Building scalable and innovative web solutions with modern technologies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild>
                <Link href="#projects">
                  View My Work <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 mt-4"
            >
              <Link href="https://github.com/manavs2110" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/manav-singh-63319920b" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:manavs2110@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:+919569981766">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mt-4 text-muted-foreground">
                I'm a software developer with a passion for building scalable and innovative web solutions. Currently
                working as a Software Engineer at Cleartax, I specialize in developing enterprise software solutions for
                the Supply Chain segment.
              </p>
              <p className="mt-4 text-muted-foreground">
                I graduated from the Indian Institute of Technology, Roorkee with a Bachelor's of Technology degree and
                a CGPA of 8.28. My technical expertise includes front-end and back-end development, database management,
                and cloud technologies.
              </p>
              <p className="mt-4 text-muted-foreground">
                I'm passionate about solving complex problems and creating efficient, user-friendly applications that
                make a difference. When I'm not coding, I enjoy exploring new technologies and contributing to
                open-source projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-background shadow-xl bg-gradient-to-br from-primary to-purple-400 dark:from-primary dark:to-blue-400 p-1">
                <div className="h-full w-full rounded-full overflow-hidden bg-muted">
                  <Image
                    src="./manav_pic.jpeg?height=320&width=320"
                    alt="Manav Singh"
                    width={320}
                    height={320}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="container py-12 md:py-24 lg:py-32 bg-muted/30">
          <SectionHeading 
            title="Work Experience" 
            description="My professional journey in software development" 
          />
          <div className="mt-12 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start md:flex-col md:items-center"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted-foreground/20 bg-background shadow-md md:order-1 md:mx-auto">
                  <span className="h-3 w-3 rounded-full bg-primary"></span>
                </div>
                <div className="ml-8 md:ml-0 md:mt-8 md:max-w-3xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4">
                    <h3 className="text-xl font-bold">{experience.company}</h3>
                    <Badge variant="outline" className="w-fit md:w-auto">
                      {experience.position}
                    </Badge>
                  </div>
                  <div className="mt-1 flex flex-col md:flex-row md:items-center md:justify-center md:gap-4 text-sm text-muted-foreground">
                    <span>{experience.duration}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{experience.location}</span>
                  </div>
                  <div className="mt-4 bg-background rounded-lg p-4 shadow-sm border border-muted-foreground/10">
                    <ul className="list-disc pl-5 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="#contact">
                Let's Work Together <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-24 lg:py-32">
          <SectionHeading 
            title="Skills & Technologies" 
            description="My technical toolkit and expertise" 
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted/30 rounded-lg p-6 border border-muted-foreground/10"
              >
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-background">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-24 lg:py-32 bg-muted/30">
          <SectionHeading 
            title="Featured Projects" 
            description="Showcasing my technical skills and problem-solving abilities" 
          />
          <div className="mt-8 flex justify-center">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="grid gap-10 md:grid-cols-2 mt-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Connect</h2>
              <p className="mt-4 text-muted-foreground">
                I'm currently open to new opportunities and collaborations. If you have a project that needs some
                creative coding or you're looking for a developer to join your team, I'd love to hear from you.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                  </Button>
                  <a href="mailto:manavs2110@gmail.com" className="text-muted-foreground hover:text-foreground">
                    manavs2110@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <a href="tel:+919569981766" className="text-muted-foreground hover:text-foreground">
                    +91 9569981766
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <a
                    href="https://linkedin.com/in/manav-singh-63319920b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    linkedin.com/in/manav-singh-63319920b
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                  <a
                    href="https://github.com/manavs2110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    github.com/manavs2110
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg border bg-background p-8 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Send me a message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                  {formStatus === "success" && (
                    <p className="text-center text-green-600 dark:text-green-400">
                      Message sent successfully!
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="text-center text-red-600 dark:text-red-400">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Manav Singh. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/manavs2110" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/manav-singh-63319920b" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
