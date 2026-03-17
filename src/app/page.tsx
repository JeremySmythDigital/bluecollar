'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Asymmetric Hero (60/40) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B87333]/10 via-transparent to-[#1a1918]/30" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left Side (60% - 3/5 columns) */}
            <div className="md:col-span-3">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-[#B87333] bg-[#B87333]/10 rounded-full border border-[#B87333]/20">
                VOICE-FIRST AI FOR TRADES
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FAFAF8] mb-6 leading-[1.1]">
                AI Coaching for{' '}
                <span className="text-[#B87333]">Skilled Trades</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#FAFAF8]/70 mb-8 max-w-xl">
                Voice-first AI assistant for plumbers, electricians, HVAC techs, and mechanics. 
                Get hands-free troubleshooting, code lookups, and procedure guides — no typing required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/app"
                  className="group px-8 py-4 bg-[#B87333] text-white text-lg font-semibold rounded-xl hover:bg-[#A66B2B] transition-all duration-200 shadow-lg shadow-[#B87333]/20"
                >
                  Try Free — No CC
                  <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-[#1a1918] text-[#FAFAF8] text-lg font-semibold rounded-xl border border-[#FAFAF8]/10 hover:border-[#B87333]/50 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
              
              {/* Social Proof */}
              <div className="mt-10 flex items-center gap-6 text-[#FAFAF8]/50 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C47D3F] to-[#B87333] border-2 border-[#0a0a0b]" />
                  ))}
                </div>
                <span>Trusted by <strong className="text-[#FAFAF8]">2,400+</strong> tradespeople</span>
              </div>
            </div>
            
            {/* Right Side (40% - 2/5 columns) - Signature Moment */}
            <div className="md:col-span-2">
              <WageCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-[#1a1918] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-6">
            The AI Revolution Left Trades Behind
          </h2>
          <p className="text-lg text-[#FAFAF8]/60 mb-8">
            ChatGPT, Claude, Copilot — every major AI tool assumes you're sitting at a keyboard with clean hands.
            <strong className="text-[#FAFAF8]"> 80+ million Americans work in skilled trades.</strong> They deserve better.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#B87333]/10 border border-[#B87333]/20 rounded-xl">
            <span className="text-2xl">🔧</span>
            <span className="text-[#B87333] font-medium">Try wiring a 3-way switch with ChatGPT while your hands are covered in wire nuts</span>
          </div>
        </div>
      </section>

      {/* Bento Feature Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-4">
            Built for the Jobsite
          </h2>
          <p className="text-[#FAFAF8]/60 text-lg">No typing. No tapping. Just talk.</p>
        </div>
        
        <div className="bento-grid">
          {/* Voice-First - Large */}
          <div className="bento-card bento-lg">
            <div className="text-5xl mb-4">🎤</div>
            <h3 className="text-2xl font-bold text-[#FAFAF8] mb-2">Voice-First Design</h3>
            <p className="text-[#FAFAF8]/60 max-w-md">
              Speak naturally, get answers. Talk like you're asking a journeyman. 
              Perfect for active work, crawl spaces, rooftops, and panel rooms.
            </p>
          </div>
          
          {/* Instant Help - Medium */}
          <div className="bento-card bento-md">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-[#FAFAF8] mb-2">Instant Guidance</h3>
            <p className="text-[#FAFAF8]/60">
              Real-time troubleshooting, code lookups, and procedure walkthroughs.
            </p>
          </div>
          
          {/* Offline - Small */}
          <div className="bento-card bento-sm">
            <div className="text-3xl mb-3">📴</div>
            <h3 className="text-lg font-bold text-[#FAFAF8] mb-2">Offline Mode</h3>
            <p className="text-[#FAFAF8]/60 text-sm">
              Download guides for sites with poor connectivity. Pro feature.
            </p>
          </div>
          
          {/* Code Lookup - Small */}
          <div className="bento-card bento-sm">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="text-lg font-bold text-[#FAFAF8] mb-2">Code Lookups</h3>
            <p className="text-[#FAFAF8]/60 text-sm">
              NEC, IPC, UPC — ask and get instant answers.
            </p>
          </div>
          
          {/* Trades - Medium */}
          <div className="bento-card bento-md bg-gradient-to-br from-[#B87333]/20 to-transparent border border-[#B87333]/10">
            <h3 className="text-xl font-bold text-[#FAFAF8] mb-4">Built For Every Trade</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-[#FAFAF8]/70">
                <span>⚡</span> Electricians
              </div>
              <div className="flex items-center gap-2 text-[#FAFAF8]/70">
                <span>🚰</span> Plumbers
              </div>
              <div className="flex items-center gap-2 text-[#FAFAF8]/70">
                <span>❄️</span> HVAC Techs
              </div>
              <div className="flex items-center gap-2 text-[#FAFAF8]/70">
                <span>🔧</span> Mechanics
              </div>
            </div>
          </div>
          
          {/* Skill Building - Medium */}
          <div className="bento-card bento-lg">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#FAFAF8] mb-2">Apprentice to Journeyman</h3>
                <p className="text-[#FAFAF8]/60 mb-4">
                  Build skills faster with guided practice, instant feedback, and real-world scenarios.
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 text-sm bg-[#B87333]/10 text-[#B87333] rounded-lg">Training Mode</span>
                  <span className="px-3 py-1 text-sm bg-[#FAFAF8]/5 text-[#FAFAF8]/60 rounded-lg">Progress Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1a1918] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF8] text-center mb-16">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Speak Your Question', desc: '"How do I troubleshoot a heat pump not cooling?"' },
              { num: '2', title: 'Get Instant Guidance', desc: 'Step-by-step instructions delivered hands-free.' },
              { num: '3', title: 'Follow Along', desc: 'BlueCollar adapts to your pace and answers follow-ups.' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B87333] to-[#C47D3F] flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#FAFAF8] mb-2">{step.title}</h3>
                <p className="text-[#FAFAF8]/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Bento Style */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF8] text-center mb-4">
          Straightforward Pricing
        </h2>
        <p className="text-[#FAFAF8]/60 text-center mb-12">No enterprise sales team. Just honest prices.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#1a1918] rounded-2xl p-8 border border-[#FAFAF8]/5">
            <h3 className="text-xl font-semibold text-[#FAFAF8] mb-1">Free</h3>
            <p className="text-[#FAFAF8]/50 text-sm mb-6">Get started</p>
            <p className="text-4xl font-bold text-[#FAFAF8] mb-6">$0</p>
            <ul className="space-y-3 mb-8">
              {['Basic Q&A', 'Community features', 'Limited daily queries'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-[#FAFAF8]/70">
                  <span className="text-[#B87333]">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/app" className="block w-full py-3 text-center bg-[#FAFAF8]/5 text-[#FAFAF8] rounded-xl hover:bg-[#FAFAF8]/10 transition-colors">
              Start Free
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-[#B87333]/20 to-[#1a1918] rounded-2xl p-8 border-2 border-[#B87333] relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#B87333] text-white text-xs font-semibold rounded-full">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold text-[#FAFAF8] mb-1">Pro</h3>
            <p className="text-[#FAFAF8]/50 text-sm mb-6">For working professionals</p>
            <p className="text-4xl font-bold text-[#FAFAF8] mb-1">$19<span className="text-lg text-[#FAFAF8]/50">/mo</span></p>
            <ul className="space-y-3 mb-8 mt-6">
              {['Unlimited voice queries', 'Offline mode', 'Advanced guides', 'Priority support'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-[#FAFAF8]/70">
                  <span className="text-[#B87333]">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/app" className="block w-full py-3 text-center bg-[#B87333] text-white rounded-xl hover:bg-[#A66B2B] transition-colors font-semibold">
              Try Pro Free
            </Link>
          </div>
          
          <div className="bg-[#1a1918] rounded-2xl p-8 border border-[#FAFAF8]/5">
            <h3 className="text-xl font-semibold text-[#FAFAF8] mb-1">Team</h3>
            <p className="text-[#FAFAF8]/50 text-sm mb-6">For crews and shops</p>
            <p className="text-4xl font-bold text-[#FAFAF8] mb-1">$49<span className="text-lg text-[#FAFAF8]/50">/mo</span></p>
            <ul className="space-y-3 mb-8 mt-6">
              {['Multi-user support', 'Custom procedures', 'Admin dashboard', 'Training analytics'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-[#FAFAF8]/70">
                  <span className="text-[#B87333]">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="block w-full py-3 text-center bg-[#FAFAF8]/5 text-[#FAFAF8] rounded-xl hover:bg-[#FAFAF8]/10 transition-colors">
              Contact for Teams
            </Link>
          </div>
        </div>
      </section>

      {/* Why BlueCollar - Story Section */}
      <section className="bg-[#1a1918] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-6">
              Why BlueCollar.ai?
            </h2>
            <p className="text-[#FAFAF8]/70 mb-4">
              I grew up watching my dad — a 30-year electrician — struggle with technology that wasn't built for him. 
              He's incredibly skilled at his craft. But every app assumed he was sitting at a keyboard with clean hands.
            </p>
            <p className="text-[#FAFAF8] font-semibold mb-4">
              That's never the case on a jobsite.
            </p>
            <p className="text-[#FAFAF8]/70 mb-6">
              BlueCollar.ai is built differently. Voice-first. Hands-free. Designed for the field.
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-[#B87333]/10 border border-[#B87333]/30 rounded-xl">
              <span className="text-[#B87333]">→</span>
              <span className="text-[#B87333] font-medium">Skilled trades workers deserve AI built for them</span>
            </div>
          </div>
          
          <div className="bg-[#0a0a0b] rounded-2xl p-8 border border-[#FAFAF8]/5">
            <h3 className="text-xl font-semibold text-[#FAFAF8] mb-6">What You Get</h3>
            <ul className="space-y-4">
              {[
                'Voice-first AI that understands trades terminology',
                'Code lookup without typing (NEC, IPC, UPC)',
                'Troubleshooting guides for real jobsite problems',
                'Skill building for apprentices and journeymen',
                'Offline access for remote job sites',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#B87333] mt-1">•</span>
                  <span className="text-[#FAFAF8]/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#B87333]/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
            Ready to Work Smarter?
          </h2>
          <p className="text-xl text-[#FAFAF8]/60 mb-10">
            Join thousands of tradespeople getting hands-free help on the jobsite.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#B87333] text-white text-lg font-semibold rounded-xl hover:bg-[#A66B2B] transition-all shadow-xl shadow-[#B87333]/20"
          >
            Try BlueCollar.ai Free
            <span>→</span>
          </Link>
          <p className="text-[#FAFAF8]/40 mt-4 text-sm">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1918] border-t border-[#FAFAF8]/5 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-[#FAFAF8] font-semibold mb-4">BlueCollar.ai</h3>
              <p className="text-[#FAFAF8]/50 text-sm">Voice-first AI coaching for skilled trades workers.</p>
            </div>
            <div>
              <h4 className="text-[#FAFAF8] font-medium mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/app" className="text-[#FAFAF8]/50 hover:text-[#B87333] text-sm transition-colors">Voice Chat</Link></li>
                <li><Link href="/pricing" className="text-[#FAFAF8]/50 hover:text-[#B87333] text-sm transition-colors">Pricing</Link></li>
                <li><Link href="/terms" className="text-[#FAFAF8]/50 hover:text-[#B87333] text-sm transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="text-[#FAFAF8]/50 hover:text-[#B87333] text-sm transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FAFAF8] font-medium mb-3">Trades</h4>
              <ul className="space-y-2">
                <li className="text-[#FAFAF8]/50 text-sm">Electricians</li>
                <li className="text-[#FAFAF8]/50 text-sm">Plumbers</li>
                <li className="text-[#FAFAF8]/50 text-sm">HVAC Techs</li>
                <li className="text-[#FAFAF8]/50 text-sm">Mechanics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FAFAF8] font-medium mb-3">Company</h4>
              <p className="text-[#FAFAF8]/50 text-sm">Built by tradespeople, for tradespeople.</p>
              <p className="text-[#FAFAF8]/50 text-sm mt-2">Raven Ops, Inc.</p>
            </div>
          </div>
          <div className="border-t border-[#FAFAF8]/5 pt-8 text-center">
            <p className="text-[#FAFAF8]/40 mb-2">BlueCollar.ai — AI Coaching for Tradespeople</p>
            <p className="text-[#FAFAF8]/30 text-sm">© 2024 BlueCollar.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Signature Moment: Wage Calculator
function WageCalculator() {
  const [hours, setHours] = useState(40)
  const [rate, setRate] = useState(45)
  
  const weekly = hours * rate
  const monthly = weekly * 4.33
  const saved = Math.round(monthly * 0.15)
  
  return (
    <div className="bg-gradient-to-br from-[#1a1918] to-[#0a0a0b] rounded-2xl p-6 border border-[#B87333]/20 shadow-xl shadow-[#B87333]/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#B87333] flex items-center justify-center">
          <span className="text-white text-sm">💰</span>
        </div>
        <h3 className="text-[#FAFAF8] font-semibold">Wage Calculator</h3>
      </div>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-[#FAFAF8]/60 text-sm block mb-2">Hours per week</label>
          <input
            type="range"
            min="20"
            max="60"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-[#B87333]"
          />
          <div className="flex justify-between text-xs text-[#FAFAF8]/40 mt-1">
            <span>20</span>
            <span className="text-[#B87333] font-semibold">{hours} hrs</span>
            <span>60</span>
          </div>
        </div>
        
        <div>
          <label className="text-[#FAFAF8]/60 text-sm block mb-2">Hourly rate ($)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full px-4 py-2 bg-[#0a0a0b] border border-[#FAFAF8]/10 rounded-lg text-[#FAFAF8] focus:border-[#B87333] focus:outline-none"
          />
        </div>
      </div>
      
      <div className="bg-[#B87333]/10 rounded-xl p-4 border border-[#B87333]/20">
        <div className="text-[#FAFAF8]/60 text-xs mb-1">Monthly earnings</div>
        <div className="text-3xl font-bold text-[#FAFAF8] mb-2">
          ${monthly.toLocaleString()}
        </div>
        <div className="text-[#B87333] text-sm">
          <span className="text-[#FAFAF8]/50">+ save </span>
          <strong>${saved.toLocaleString()}</strong>
          <span className="text-[#FAFAF8]/50">/mo with faster jobs</span>
        </div>
      </div>
      
      <Link
        href="/app"
        className="mt-4 w-full py-3 flex items-center justify-center gap-2 bg-[#B87333] text-white rounded-xl hover:bg-[#A66B2B] transition-colors font-medium"
      >
        Calculate Your Savings
        <span>→</span>
      </Link>
    </div>
  )
}