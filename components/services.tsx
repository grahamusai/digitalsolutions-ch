"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Building2, Database, Cloud, Shield, Wrench } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Corporate sites, E-commerce platforms, and custom web applications built with modern technologies.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Native mobile apps for iOS and Android that deliver exceptional user experiences.",
    features: ["Native Performance", "Cross-Platform", "App Store Ready"],
  },
  {
    icon: Building2,
    title: "Custom Business Software",
    description: "Tailored in-office applications designed specifically for your business workflows.",
    features: ["Custom Solutions", "Process Automation", "Integration Ready"],
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Database design, BI tools implementation, and seamless data migration services.",
    features: ["Database Design", "BI Analytics", "Data Migration"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Infrastructure setup, cloud migration, and ongoing management for optimal performance.",
    features: ["AWS & Azure", "Migration Support", "24/7 Monitoring"],
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Comprehensive security audits, consultancy, and implementation support to protect your assets.",
    features: ["Security Audits", "Compliance", "Threat Protection"],
  },
  {
    icon: Wrench,
    title: "IT Development & Support",
    description: "General IT development services and ongoing technical support for your business.",
    features: ["Technical Support", "Maintenance", "Consulting"],
  },
]

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">Our Services</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group liquid-glass border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.2)] hover:border-lime-400/50"
          >
            <CardHeader>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition-all duration-300 group-hover:bg-lime-400/20 group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="h-7 w-7" />
              </div>
              <CardTitle className="text-xl text-white group-hover:text-lime-300 transition-colors">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-white/60">
                    <div className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
