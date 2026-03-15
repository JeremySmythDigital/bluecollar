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
              Professional Blue-Collar Services
              <span className="block text-blue-400">Reliable. Skilled. On-Time.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Connecting homeowners and businesses with top-rated professionals for HVAC, plumbing, electrical, landscaping, and more. 
              Quality workmanship guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                Browse Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose Us
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon="👷"
            title="Licensed Professionals"
            description="All our service providers are licensed, insured, and background-checked for your peace of mind."
          />
          <Feature
            icon="⏱️"
            title="Fast Response"
            description="Get same-day or next-day service appointments. We understand emergencies can't wait."
          />
          <Feature
            icon="💰"
            title="Transparent Pricing"
            description="Upfront, competitive pricing with no hidden fees. Know the cost before work begins."
          />
          <Feature
            icon="🛡️"
            title="Satisfaction Guaranteed"
            description="We stand behind our work with a 100% satisfaction guarantee on all services."
          />
        </div>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon="❄️"
            title="HVAC Services"
            description="Installation, repair, and maintenance of heating, ventilation, and air conditioning systems."
          />
          <ServiceCard
            icon="🚰"
            title="Plumbing"
            description="From leak repairs to full bathroom remodels, our expert plumbers handle it all."
          />
          <ServiceCard
            icon="⚡"
            title="Electrical"
            description="Licensed electricians for wiring, panel upgrades, lighting, and electrical repairs."
          />
          <ServiceCard
            icon="🌳"
            title="Landscaping"
            description="Lawn care, tree services, hardscaping, and landscape design and maintenance."
          />
        </div>
      </div>

      {/* About Us */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About BlueCollar Services</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2020, BlueCollar Services has been connecting skilled tradespeople with customers who need quality work done right. Our network includes hundreds of licensed professionals across multiple trades, all committed to excellence and customer satisfaction.
              </p>
              <p className="text-gray-300 mb-6">
                We believe in the dignity of hard work and the value of skilled craftsmanship. That's why we've built a platform that makes it easy for homeowners and businesses to find reliable, professional service providers they can trust.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Quality workmanship on every job</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Fair and transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Prompt and reliable service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Exceptional customer service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Professional Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether it's an emergency repair or a planned project, our network of skilled professionals is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              View All Services
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-6">
            <div>
              <h3 className="text-white font-semibold mb-4">BlueCollar Services</h3>
              <p className="text-gray-400 text-sm">Connecting you with skilled professionals for all your home and business service needs.</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white text-sm">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services#hvac" className="text-gray-400 hover:text-white text-sm">HVAC</Link></li>
                <li><Link href="/services#plumbing" className="text-gray-400 hover:text-white text-sm">Plumbing</Link></li>
                <li><Link href="/services#electrical" className="text-gray-400 hover:text-white text-sm">Electrical</Link></li>
                <li><Link href="/services#landscaping" className="text-gray-400 hover:text-white text-sm">Landscaping</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Contact</h4>
              <p className="text-gray-400 text-sm">📞 (555) 123-4567</p>
              <p className="text-gray-400 text-sm">✉️ info@bluecollar.services</p>
              <p className="text-gray-400 text-sm">📍 Serving nationwide</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-500 dark:text-gray-400">
            <p className="mb-2">BlueCollar Services — Quality workmanship you can trust</p>
            <p className="text-sm">© 2024 BlueCollar Services. All rights reserved.</p>
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
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
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
      <p className="text-3xl font-bold text-white mb-4">{price}<span className="text-lg text-gray-500 dark:text-gray-400">/mo</span></p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-300 text-sm">✓ {feature}</li>
        ))}
      </ul>
    </div>
  )
}