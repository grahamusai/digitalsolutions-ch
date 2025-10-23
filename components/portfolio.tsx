"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from './language-provider'

const projectKeys = [
  {
    key: "fintech",
    image: "/modern-fintech-mobile-banking-app-interface.jpg",
  },
  {
    key: "ecommerce",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    key: "healthcare",
    image: "/healthcare-patient-portal.png",
  },
  {
    key: "fitness",
    image: "/fitness-tracking-app.png",
  },
  {
    key: "crm",
    image: "/enterprise-crm-dashboard-interface.jpg",
  },
  {
    key: "realestate",
    image: "/real-estate-website.png",
  },
]

export function Portfolio() {
  const { t } = useLanguage();

  // Helper function to safely get tags array
  const getTags = (projectKey: string): string[] => {
    const tags = t(`portfolio.projects.${projectKey}.tags`);
    return Array.isArray(tags) ? tags : [];
  };

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
          {t('portfolio.title')}
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          {t('portfolio.subtitle')}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectKeys.map((project, index) => (
          <Card
            key={index}
            className="group liquid-glass border border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.2)] hover:border-lime-400/50"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={t(`portfolio.projects.${project.key}.title`)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <Badge className="absolute top-4 right-4 bg-lime-400 text-black border-0">
                {t(`portfolio.projects.${project.key}.category`)}
              </Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-300 transition-colors">
                {t(`portfolio.projects.${project.key}.title`)}
              </h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                {t(`portfolio.projects.${project.key}.description`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {getTags(project.key).map((tag: string, i: number) => (
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
