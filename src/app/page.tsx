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
              AI That Works
              <span className="block text-blue-400">While You Work</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Voice-first AI coaching for plumbers, electricians, mechanics, and HVAC techs. 
              Get on-the-job guidance, troubleshooting help, and skill building — hands-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                Start Free
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition-colors"
              >
                View Plans
              </Link>
            </div>
          </div>
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
            description="Talk while you work. Ask questions, get answers — hands stay on the tools."
          />
          <Feature
            icon="📚"
            title="Trade Guides"
            description="Step-by-step instructions for common tasks. Like having a journeyman in your pocket."
          />
          <Feature
            icon="🔧"
            title="Troubleshooting"
            description="Describe the problem, get instant diagnosis. AI-powered problem solving."
          />
          <Feature
            icon="📋"
            title="Job Tracking"
            description="Log completed jobs, track your work history. Build your professional record."
          />
        </div>
      </div>

      {/* Trades */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          For Every Trade
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TradeCard
            icon="🔧"
            title="Plumbing"
            features={['Pipe systems', 'Fixtures', 'Drains', 'Water heaters']}
          />
          <TradeCard
            icon="⚡"
            title="Electrical"
            features={['Circuits', 'Wiring', 'Panels', 'Outlets']}
          />
          <TradeCard
            icon="🔩"
            title="Mechanical"
            features={['Engines', 'Transmissions', 'Brakes', 'Suspension']}
          />
          <TradeCard
            icon="❄️"
            title="HVAC"
            features={['Furnaces', 'AC units', 'Heat pumps', 'Ductwork']}
          />
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Simple Pricing
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Start free, upgrade when you need more
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Free"
              price="$0"
              description="Get started"
              features={['5 queries/day', 'Basic guides', 'Limited jobs']}
            />
            <PricingCard
              title="Pro"
              price="$19"
              description="Working professionals"
              features={['Unlimited queries', 'All guides', 'Job tracking', 'Voice mode', 'Priority support']}
              popular
            />
            <PricingCard
              title="Team"
              price="$49"
              description="Crews and shops"
              features={['Everything in Pro', 'Team collaboration', 'Admin dashboard', 'API access']}
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work Smarter?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of tradespeople getting AI-powered help on every job.
          </p>
          <Link
            href="/app"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">BlueCollar.ai — AI coaching for tradespeople</p>
          <p className="text-sm">© 2024 BlueCollar.ai. Built for the working class.</p>
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

function TradeCard({ icon, title, features }: { icon: string; title: string; features: string[] }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-1">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-400 text-sm">• {feature}</li>
        ))}
      </ul>
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
      <p className="text-3xl font-bold text-white mb-4">{price}<span className="text-lg text-gray-400">/mo</span></p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-300 text-sm">✓ {feature}</li>
        ))}
      </ul>
    </div>
  )
}