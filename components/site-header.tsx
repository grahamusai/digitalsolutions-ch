"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useLanguage } from './language-provider'
import { LanguageSwitcher } from './language-switcher'

export function SiteHeader() {
  const { t } = useLanguage();
  
  const links = [
    { href: "#services", label: t('navigation.services') },
    { href: "#portfolio", label: t('navigation.portfolio') },
    { href: "#about", label: t('navigation.about') },
    { href: "#contact", label: t('navigation.contact') },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center">
              <span className="text-black font-bold text-sm">DS</span>
            </div>
            <span className="font-semibold tracking-wide text-white">Digital Solutions</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-lime-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-lime-400 text-black font-medium rounded-full px-6 py-2.5
                         hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="#contact">{t('navigation.contact')}</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">DS</span>
                  </div>
                  <span className="font-semibold tracking-wide text-white text-lg">Digital Solutions</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors"
                    >
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Language Switcher & CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4 space-y-4">
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                  <Button
                    asChild
                    className="w-full bg-lime-400 text-black font-medium rounded-full px-6 py-2.5
                               hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="#contact">{t('navigation.contact')}</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
