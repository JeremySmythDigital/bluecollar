import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              BlueCollar.ai
              <span className="block text-blue-400">AI Coaching for Tradespeople</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Voice-first AI assistant built for skilled trades workers. Get hands-free help on the jobsite — 
              troubleshooting, code lookups, procedure guides, and skill building. No typing required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                Try Free — No Credit Card
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            The AI Revolution Left Trades Workers Behind
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center text-lg">
            ChatGPT, Claude, Copilot — every major AI tool is built for desk workers. 
            People who can type on keyboards. People with clean hands.
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto text-center text-lg mt-4">
            <strong className="text-white">80+ million Americans work in skilled trades.</strong> Plumbers. 
            Electricians. HVAC technicians. Mechanics. They're the backbone of our economy — 
            and they're completely underserved by modern AI tools.
          </p>
          <p className="text-blue-400 text-center mt-6 text-lg">
            Try asking ChatGPT how to wire a 3-way switch while your hands are covered in wire nuts.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Built for the Jobsite
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon="🎤"
            title="Voice-First"
            description="Speak naturally, get answers. No typing, no tapping — just talk like you're asking a journeyman."
          />
          <Feature
            icon="✋"
            title="Hands-Free"
            description="Perfect for dirty hands, tight spaces, and active work. Crawl spaces, rooftops, panel rooms."
          />
          <Feature
            icon="⚡"
            title="Instant Guidance"
            description="Real-time troubleshooting, code lookups, and procedure walkthroughs when you need them."
          />
          <Feature
            icon="📴"
            title="Offline Mode"
            description="Download guides before heading to sites with poor connectivity. Pro feature."
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Speak Your Question</h3>
              <p className="text-gray-400">
                "How do I troubleshoot a heat pump that's not cooling?"
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Instant Guidance</h3>
              <p className="text-gray-400">
                Step-by-step instructions delivered hands-free. No typing, no screens.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Follow Along</h3>
              <p className="text-gray-400">
                BlueCollar adapts to your pace and answers follow-up questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Built For Your Trade
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon="⚡"
            title="Electricians"
            description="NEC code lookups, wiring guides, troubleshooting, apprenticeship skill building."
          />
          <ServiceCard
            icon="🚰"
            title="Plumbers"
            description="IPC/UPC code requirements, fixture installation, leak diagnosis, material specs."
          />
          <ServiceCard
            icon="❄️"
            title="HVAC Technicians"
            description="System troubleshooting, refrigerant procedures, code compliance, equipment specs."
          />
          <ServiceCard
            icon="🔧"
            title="Mechanics"
            description="Torque specs, diagnostic procedures, repair guides, maintenance schedules."
          />
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Straightforward Pricing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="$0"
              description="Get started"
              features={["Basic Q&A", "Community features", "Limited daily queries"]}
            />
            <PricingCard
              title="Pro"
              price="$19"
              description="For working professionals"
              features={["Unlimited voice queries", "Offline mode", "Advanced guides", "Priority support"]}
              popular={true}
            />
            <PricingCard
              title="Team"
              price="$49"
              description="For crews and shops"
              features={["Multi-user support", "Custom procedures", "Admin dashboard", "Training analytics"]}
            />
          </div>
          
          <p className="text-center text-gray-400 mt-8">
            No enterprise sales team. No "contact us for pricing." Just honest prices that respect your work.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Why BlueCollar.ai?
            </h2>
            <p className="text-gray-300 mb-4">
              I grew up watching my dad — a 30-year electrician — struggle with technology that wasn't built for him. 
              He's incredibly skilled at his craft. But every new app assumed he was sitting at a keyboard with clean hands.
            </p>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">That's never the case on a jobsite.</strong>
            </p>
            <p className="text-gray-300 mb-6">
              BlueCollar.ai is built differently. It starts with voice. It works with dirty hands. 
              It's designed for the field, not the office.
            </p>
            <p className="text-blue-400 font-medium">
              Because skilled trades workers deserve AI tools built for them, not adapted from office worker tools.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">What You Get</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Voice-first AI that understands trades terminology</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Code lookup without typing (NEC, IPC, UPC)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Troubleshooting guides for real jobsite problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Skill building for apprentices and journeymen</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Offline access for remote job sites</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-blue-600/20 to-transparent py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work Smarter?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of tradespeople getting hands-free help on the jobsite.
          </p>
          <Link
            href="/app"
            className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-colors"
          >
            Try BlueCollar.ai Free
          </Link>
          <p className="text-gray-500 mt-4 text-sm">No credit card required</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-6">
            <div>
              <h3 className="text-white font-semibold mb-4">BlueCollar.ai</h3>
              <p className="text-gray-400 text-sm">Voice-first AI coaching for skilled trades workers.</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/app" className="text-gray-400 hover:text-white text-sm">Voice Chat</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Trades</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400 text-sm">Electricians</span></li>
                <li><span className="text-gray-400 text-sm">Plumbers</span></li>
                <li><span className="text-gray-400 text-sm">HVAC Techs</span></li>
                <li><span className="text-gray-400 text-sm">Mechanics</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Company</h4>
              <p className="text-gray-400 text-sm">Built by tradespeople, for tradespeople.</p>
              <p className="text-gray-400 text-sm mt-2">Raven Ops, Inc.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-500">
            <p className="mb-2">BlueCollar.ai — AI Coaching for Tradespeople</p>
            <p className="text-sm">© 2024 BlueCollar.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

function PricingCard({ title, price, description, features, popular }: {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}) {
  return (
    <div className={`bg-gray-900 rounded-xl p-6 ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <span className="text-blue-400 text-sm font-medium">Most Popular</span>
      )}
      <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <p className="text-3xl font-bold text-white mb-4">{price}{price !== '$0' && <span className="text-lg text-gray-500">/mo</span>}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-300 text-sm">✓ {feature}</li>
        ))}
      </ul>
    </div>
  )
}