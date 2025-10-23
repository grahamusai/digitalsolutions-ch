"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Building2, Database, Cloud, Shield, Wrench } from "lucide-react"
import { useLanguage } from './language-provider'

// Define service structure with keys for translation lookup
const services = [
  {
    key: 'webDev',
    icon: Code,
  },
  {
    key: 'appDev',
    icon: Smartphone,
  },
  {
    key: 'businessSoftware',
    icon: Building2,
  },
  {
    key: 'dataManagement',
    icon: Database,
  },
  {
    key: 'cloudArchitecture',
    icon: Cloud,
  },
  {
    key: 'cyberSecurity',
    icon: Shield,
  },
  {
    key: 'itSupport',
    icon: Wrench,
  },
]

export function Services() {
  const { t } = useLanguage();

  // Helper function to safely get features array
  const getFeatures = (serviceKey: string): string[] => {
    const features = t(`services.items.${serviceKey}.features`);
    return Array.isArray(features) ? features : [];
  };
  return (
    <section id="services" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
          {t('services.title')}
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          {t('services.subtitle')}
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
                {t(`services.items.${service.key}.title`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                {t(`services.items.${service.key}.description`)}
              </p>
              <ul className="space-y-2">
                {getFeatures(service.key).map((feature: string, i: number) => (
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
