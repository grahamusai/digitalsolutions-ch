"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { useLanguage } from './language-provider'

export function AppverseFooter() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-16 sm:pt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
          <Button
            asChild
            className="rounded-full bg-lime-400 px-8 py-6 text-lg font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="mailto:info@digitalsolutions.ch">{t('contact.cta')}</a>
          </Button>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <div className="liquid-glass rounded-2xl p-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t('contact.email.title')}</h3>
            <a href="mailto:info@digitalsolutions.ch" className="text-white/70 hover:text-lime-300 transition-colors">
              info@digitalsolutions101.com
            </a>
          </div>

          <div className="liquid-glass rounded-2xl p-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t('contact.phone.title')}</h3>
            <a href="tel:+41767041612" className="text-white/70 hover:text-lime-300 transition-colors">
              +41 76 704 1612
            </a>
          </div>

          <div className="liquid-glass rounded-2xl p-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t('contact.location.title')}</h3>
            <p className="text-white/70">{t('contact.location.address')}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center">
                  <span className="text-black font-bold text-sm">DS</span>
                </div>
                <span className="text-xl font-semibold text-white">Digital Solutions</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">{t('footer.quickLinks')}</h5>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>
                  <Link href="#services" className="hover:text-lime-300 transition-colors">
                    {t('navigation.services')}
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-lime-300 transition-colors">
                    {t('navigation.portfolio')}
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-lime-300 transition-colors">
                    {t('navigation.about')}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-lime-300 transition-colors">
                    {t('navigation.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">{t('footer.connect')}</h5>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-neutral-400" />
                  <a href="#" className="hover:text-lime-300 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Twitter className="h-4 w-4 text-neutral-400" />
                  <a href="#" className="hover:text-lime-300 transition-colors">
                    Twitter
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-neutral-400" />
                  <a href="#" className="hover:text-lime-300 transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{t('footer.copyright')}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-lime-300 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="hover:text-lime-300 transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
