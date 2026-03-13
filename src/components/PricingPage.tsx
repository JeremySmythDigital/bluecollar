'use client'

import { useState } from 'react'

const PLANS = [
  {
    name: 'Free',
    price: 0,
    description: 'Get started with basic features',
    features: [
      '5 troubleshooting queries/day',
      'Basic trade guides',
      'Job tracking (limited)',
      'Email support'
    ],
    planId: null
  },
  {
    name: 'Pro',
    price: 19,
    description: 'For working professionals',
    features: [
      'Unlimited troubleshooting',
      'Full trade guide library',
      'Job tracking (unlimited)',
      'Priority support',
      'Voice-first interface',
      'Offline mode'
    ],
    planId: 'price_pro_monthly',
    popular: true
  },
  {
    name: 'Team',
    price: 49,
    description: 'For crews and shops',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Shared job history',
      'Admin dashboard',
      'Custom guides',
      'API access'
    ],
    planId: 'price_team_monthly'
  }
]

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleSubscribe = async (planId: string | null) => {
    if (!planId) {
      // Free plan - no checkout needed
      window.location.href = '/app'
      return
    }

    setLoading(planId)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId })
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-gray-400 text-lg">Start free, upgrade when you need more</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gray-800 rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}

              <h2 className="text-xl font-semibold text-white mb-2">{plan.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.planId)}
                disabled={loading !== null && loading !== plan.planId}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-500'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                } disabled:opacity-50`}
              >
                {loading === plan.planId ? 'Loading...' : plan.price === 0 ? 'Get Started' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-12">
          Cancel anytime. 7-day free trial for Pro plan.
        </p>
      </div>
    </div>
  )
}