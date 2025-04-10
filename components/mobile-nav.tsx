"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#about"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              scrollToSection(e, "#about")
              setOpen(false)
            }}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              scrollToSection(e, "#experience")
              setOpen(false)
            }}
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              scrollToSection(e, "#skills")
              setOpen(false)
            }}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              scrollToSection(e, "#projects")
              setOpen(false)
            }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              scrollToSection(e, "#contact")
              setOpen(false)
            }}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
