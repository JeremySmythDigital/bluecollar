import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to get started on your project? Have questions about our services? Fill out the form below and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Our team is ready to assist you with any questions or service requests. We typically respond within 24 hours during business hours.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-blue-400 mr-3">📞</span>
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-3">✉️</span>
                <span className="text-gray-300">info@bluecollar.services</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-3">📍</span>
                <span className="text-gray-300">Serving nationwide</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-3">⏰</span>
                <span className="text-gray-300">Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Emergency Services</h3>
              <p className="text-gray-300 mb-4">
                Need immediate assistance? Call our 24/7 emergency line:
              </p>
              <p className="text-2xl font-bold text-blue-400">(555) 123-4567</p>
              <p className="text-sm text-gray-400 mt-2">Available 24 hours a day, 7 days a week</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="hvac">HVAC Services</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="handyman">Handyman Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your project or service needs..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-300 mb-2">Urgency</label>
                <select
                  id="urgency"
                  name="urgency"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="standard">Standard (3-5 business days)</option>
                  <option value="urgent">Urgent (1-2 business days)</option>
                  <option value="emergency">Emergency (same day)</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Service Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Residential Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Single family homes</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Apartments and condos</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Townhouses</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Vacation properties</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Commercial Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Office buildings</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Retail spaces</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Restaurants</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Industrial facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Specialty Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Property management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">New construction</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Renovations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Maintenance contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FAQItem
              question="How quickly can you respond to service requests?"
              answer="We strive to respond to all inquiries within 24 hours during business hours. For emergency services, we offer 24/7 availability with technicians typically arriving within 1-2 hours."
            />
            <FAQItem
              question="Are your technicians licensed and insured?"
              answer="Yes, all our service providers are fully licensed, bonded, and insured. We perform thorough background checks and verify all credentials before adding professionals to our network."
            />
            <FAQItem
              question="What areas do you serve?"
              answer="We currently serve major metropolitan areas across the United States. Contact us to check availability in your specific location."
            />
          </div>
          <div className="space-y-6">
            <FAQItem
              question="Do you offer free estimates?"
              answer="Yes, we provide free estimates for most services. Some complex projects may require a consultation fee that can be applied to the final invoice if you proceed with the work."
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept all major credit cards, checks, and bank transfers. Payment terms vary by service type and project scope."
            />
            <FAQItem
              question="Is your work guaranteed?"
              answer="Absolutely. We stand behind all our work with a 100% satisfaction guarantee. Most services come with a 1-year warranty on labor and parts."
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to get the professional help you need. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+15551234567"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              Call Now: (555) 123-4567
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            >
              Browse Services
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
                <li><Link href="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white text-sm">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-5">
      <h3 className="text-lg font-semibold text-white mb-3">{question}</h3>
      <p className="text-gray-300 text-sm">{answer}</p>
    </div>
  )
}