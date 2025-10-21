"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "FinTech Mobile App",
    category: "Mobile Application",
    description: "A secure banking app with real-time transactions and biometric authentication for iOS and Android.",
    image: "/modern-fintech-mobile-banking-app-interface.jpg",
    tags: ["React Native", "iOS", "Android", "Security"],
  },
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "Full-featured online store with inventory management, payment processing, and analytics dashboard.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "E-commerce", "Payment Integration"],
  },
  {
    title: "Healthcare Portal",
    category: "Web Application",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
    image: "/healthcare-patient-portal.png",
    tags: ["React", "Healthcare", "HIPAA Compliant"],
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Application",
    description: "Cross-platform fitness app with workout tracking, nutrition planning, and social features.",
    image: "/fitness-tracking-app.png",
    tags: ["Flutter", "iOS", "Android", "Health"],
  },
  {
    title: "Enterprise CRM",
    category: "Custom Software",
    description: "Custom CRM solution with sales pipeline management, customer analytics, and automation tools.",
    image: "/enterprise-crm-dashboard-interface.jpg",
    tags: ["Custom Development", "CRM", "Analytics"],
  },
  {
    title: "Real Estate Platform",
    category: "Web Application",
    description: "Property listing platform with virtual tours, mortgage calculator, and agent management system.",
    image: "/real-estate-website.png",
    tags: ["Next.js", "Real Estate", "Virtual Tours"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">Our Portfolio</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Explore our recent projects and see how we've helped businesses transform their digital presence
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group liquid-glass border border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.2)] hover:border-lime-400/50"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <Badge className="absolute top-4 right-4 bg-lime-400 text-black border-0">{project.category}</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
