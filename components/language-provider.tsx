'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ch';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translations inline to avoid import issues
const translations = {
  en: {
    navigation: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact"
    },
    hero: {
      brand: "Digital Solutions",
      title1: "TRANSFORM YOUR",
      title2: "DIGITAL PRESENCE",
      title3: "WITH INNOVATION",
      description: "From web development to cybersecurity, we deliver cutting-edge solutions that drive your business forward. Based in Switzerland, trusted worldwide.",
      cta: "Start Your Project",
      features: {
        fastDelivery: {
          title: "Fast Delivery",
          description: "Launch in weeks, not months"
        },
        swissQuality: {
          title: "Swiss Quality",
          description: "Precision and reliability"
        },
        fullSupport: {
          title: "Full Support",
          description: "We're with you every step"
        },
        scalable: {
          title: "Scalable",
          description: "Grow without limits"
        }
      }
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions tailored to your business needs",
      items: {
        webDev: {
          title: "Web Development",
          description: "Corporate sites, E-commerce platforms, and custom web applications built with modern technologies.",
          features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
        },
        appDev: {
          title: "Application Development",
          description: "Native mobile apps for iOS and Android that deliver exceptional user experiences.",
          features: ["Native Performance", "Cross-Platform", "App Store Ready"]
        },
        businessSoftware: {
          title: "Custom Business Software",
          description: "Tailored in-office applications designed specifically for your business workflows.",
          features: ["Custom Solutions", "Process Automation", "Integration Ready"]
        },
        dataManagement: {
          title: "Data Management",
          description: "Database design, BI tools implementation, and seamless data migration services.",
          features: ["Database Design", "BI Analytics", "Data Migration"]
        },
        cloudArchitecture: {
          title: "Cloud Architecture",
          description: "Infrastructure setup, cloud migration, and ongoing management for optimal performance.",
          features: ["AWS & Azure", "Migration Support", "24/7 Monitoring"]
        },
        cyberSecurity: {
          title: "Cyber Security",
          description: "Comprehensive security audits, consultancy, and implementation support to protect your assets.",
          features: ["Security Audits", "Compliance", "Threat Protection"]
        },
        itSupport: {
          title: "IT Development & Support",
          description: "General IT development services and ongoing technical support for your business.",
          features: ["Technical Support", "Maintenance", "Consulting"]
        }
      }
    }
  },
  ch: {
    navigation: {
      home: "Hei",
      services: "Dienschtleischtige",
      portfolio: "Portfolio",
      about: "Über üs",
      contact: "Kontakt"
    },
    hero: {
      brand: "Digital Solutions",
      title1: "VERWANDLE DINI",
      title2: "DIGITALI PRÄSENZ",
      title3: "MIT INNOVATION",
      description: "Vo Webentwicklig bis Cybersicherheit - mir liefered modernschti Lösige wo dis Gschäft vorwärts bringe. Basiert i de Schwiiz, vertraut uf de ganze Wält.",
      cta: "Projekt starte",
      features: {
        fastDelivery: {
          title: "Schnelli Lieferig",
          description: "Launch i Wuche, nöd Mönet"
        },
        swissQuality: {
          title: "Schwiizer Qualität",
          description: "Präzision und Zuverlässigkeit"
        },
        fullSupport: {
          title: "Volli Unterstützig",
          description: "Mir sind bi dir bi jedem Schritt"
        },
        scalable: {
          title: "Skalierbar",
          description: "Wachse ohni Gränze"
        }
      }
    },
    services: {
      title: "Üseri Dienschtleischtige",
      subtitle: "Umfassendi digitali Lösige wo uf dini Gschäftsbedürfniss zuegschnitte sind",
      items: {
        webDev: {
          title: "Web Entwicklig",
          description: "Firmesiite, E-Commerce Plattforme und massgeschniderti Web Applikatione mit moderne Technologie.",
          features: ["Responsive Design", "SEO Optimiert", "Schnelli Performance"]
        },
        appDev: {
          title: "App Entwicklig",
          description: "Native Mobile Apps für iOS und Android wo ussergewöhnlichi Benutzererfahrige bieted.",
          features: ["Native Performance", "Cross-Platform", "App Store Ready"]
        },
        businessSoftware: {
          title: "Massgeschniderti Gschäftssoftware",
          description: "Speziell uf dini Gschäftsabläuf zuegschnitteni Büro-Applikatione.",
          features: ["Massgeschniderti Lösige", "Prozess Automatisierig", "Integration Ready"]
        },
        dataManagement: {
          title: "Date Verwautig",
          description: "Datebankdesign, BI Tools Implementierig und nahtlosi Date Migration Services.",
          features: ["Datebankdesign", "BI Analytics", "Date Migration"]
        },
        cloudArchitecture: {
          title: "Cloud Architektur",
          description: "Infrastruktur Setup, Cloud Migration und laufendi Verwautig für optimali Performance.",
          features: ["AWS & Azure", "Migration Support", "24/7 Monitoring"]
        },
        cyberSecurity: {
          title: "Cyber Sicherheit",
          description: "Umfassendi Sicherheits-Audits, Beratig und Implementierig zum Schutz vo dine Assets.",
          features: ["Sicherheits Audits", "Compliance", "Bedrohigsschutz"]
        },
        itSupport: {
          title: "IT Entwicklig & Support",
          description: "Allgemeine IT Entwickligsservices und laufende technischi Unterstützig für dis Gschäft.",
          features: ["Technische Unterstützig", "Wartung", "Beratig"]
        }
      }
    }
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ch')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}