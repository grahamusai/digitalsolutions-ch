import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center">
              <span className="text-black font-bold text-lg">DS</span>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">Digital Solutions</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">TRANSFORM YOUR</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">DIGITAL PRESENCE</span>
            <span className="block">WITH INNOVATION</span>
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-white/80 leading-relaxed">
            From web development to cybersecurity, we deliver cutting-edge solutions that drive your business forward.
            Based in Switzerland, trusted worldwide.
          </p>
          <div className="mt-8">
            <Button
              asChild
              className="rounded-full bg-lime-400 px-8 py-6 text-lg text-black hover:bg-lime-300 shadow-[0_0_20px_rgba(163,230,53,0.35)]"
            >
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>

          {/* Animated feature cards */}
          <div className="mt-16 grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {featureHighlights.map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-2xl glass-border bg-black/40 p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition-all duration-300 group-hover:bg-lime-400/20 group-hover:scale-110">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const featureHighlights = [
  {
    title: "Fast Delivery",
    description: "Launch in weeks, not months",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Swiss Quality",
    description: "Precision and reliability",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Full Support",
    description: "We're with you every step",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Scalable",
    description: "Grow without limits",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    ),
  },
]
