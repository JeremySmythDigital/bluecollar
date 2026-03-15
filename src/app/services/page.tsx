import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From emergency repairs to major installations, our network of licensed professionals delivers quality workmanship across all major trades. Find the service you need below.
            </p>
          </div>
        </div>
      </div>

      {/* HVAC Services */}
      <div id="hvac" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">HVAC Services</h2>
            <p className="text-gray-300 mb-6">
              Keep your home or business comfortable year-round with our comprehensive HVAC services. Our certified technicians handle everything from routine maintenance to complex system installations.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Furnace installation and repair</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Air conditioning installation and repair</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Heat pump installation and maintenance</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Duct cleaning and repair</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Thermostat installation and programming</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Emergency HVAC repair (24/7 available)</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              Get HVAC Service Quote
            </Link>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-6xl mb-4 text-center">❄️</div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">Trusted HVAC Experts</h3>
            <p className="text-gray-400 text-center">Licensed, insured, and experienced technicians for all your heating and cooling needs.</p>
          </div>
        </div>
      </div>

      {/* Plumbing Services */}
      <div id="plumbing" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800 rounded-xl p-6 md:order-last">
            <div className="text-6xl mb-4 text-center">🚰</div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">Reliable Plumbing Solutions</h3>
            <p className="text-gray-400 text-center">From minor leaks to major pipe replacements, our expert plumbers have you covered.</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Plumbing Services</h2>
            <p className="text-gray-300 mb-6">
              Our licensed plumbers provide comprehensive plumbing services for residential and commercial properties. We use the latest tools and techniques to ensure lasting solutions.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Leak detection and repair</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Drain cleaning and unclogging</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Water heater installation and repair</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Bathroom and kitchen remodeling</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Sewer line inspection and repair</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Emergency plumbing services (24/7 available)</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              Get Plumbing Service Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Electrical Services */}
      <div id="electrical" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Electrical Services</h2>
            <p className="text-gray-300 mb-6">
              Keep your property safe and powered with our professional electrical services. Our licensed electricians handle everything from simple repairs to complex wiring projects.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Electrical panel upgrades and repairs</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Wiring and rewiring services</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Lighting installation and repair</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Outlet and switch installation</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Ceiling fan installation</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Emergency electrical services (24/7 available)</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              Get Electrical Service Quote
            </Link>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">Licensed Electricians</h3>
            <p className="text-gray-400 text-center">Safe, code-compliant electrical work for residential and commercial properties.</p>
          </div>
        </div>
      </div>

      {/* Landscaping Services */}
      <div id="landscaping" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800 rounded-xl p-6 md:order-last">
            <div className="text-6xl mb-4 text-center">🌳</div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">Beautiful Outdoor Spaces</h3>
            <p className="text-gray-400 text-center">From lawn maintenance to complete landscape transformations, we create outdoor spaces you'll love.</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Landscaping Services</h2>
            <p className="text-gray-300 mb-6">
              Enhance your property's curb appeal and create functional outdoor living spaces with our comprehensive landscaping services.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Lawn mowing and maintenance</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Landscape design and installation</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Tree and shrub planting and care</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Hardscaping (patios, walkways, retaining walls)</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Irrigation system installation and repair</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Seasonal cleanup and maintenance</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              Get Landscaping Service Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceTile
              icon="🔧"
              title="Handyman Services"
              description="General repairs, installations, and maintenance for home and business."
            />
            <ServiceTile
              icon="🚪"
              title="Carpentry"
              description="Custom woodworking, cabinetry, trim work, and structural repairs."
            />
            <ServiceTile
              icon="🧹"
              title="Cleaning Services"
              description="Residential and commercial cleaning services for regular maintenance or deep cleaning."
            />
            <ServiceTile
              icon="🎨"
              title="Painting"
              description="Interior and exterior painting services for homes and businesses."
            />
            <ServiceTile
              icon="🚗"
              title="Garage Door Services"
              description="Installation, repair, and maintenance of garage doors and openers."
            />
            <ServiceTile
              icon="🏠"
              title="Home Inspections"
              description="Comprehensive home inspections for buyers, sellers, and homeowners."
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us today to schedule service or get a free estimate.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-colors"
          >
            Contact Us Now
          </Link>
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
                <li><Link href="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white text-sm">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Services</h4>
              <ul className="space-y-2">
                <li><Link href="#hvac" className="text-gray-400 hover:text-white text-sm">HVAC</Link></li>
                <li><Link href="#plumbing" className="text-gray-400 hover:text-white text-sm">Plumbing</Link></li>
                <li><Link href="#electrical" className="text-gray-400 hover:text-white text-sm">Electrical</Link></li>
                <li><Link href="#landscaping" className="text-gray-400 hover:text-white text-sm">Landscaping</Link></li>
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

function ServiceTile({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}