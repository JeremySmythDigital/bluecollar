import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Check if Stripe is configured
export const isStripeConfigured = !!process.env.STRIPE_SECRET_KEY

// Lazy-initialize Stripe only when needed
function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    return null
  }
  return new Stripe(key)
}

export async function POST(request: NextRequest) {
  try {
    // Graceful error if Stripe not configured
    if (!isStripeConfigured) {
      return NextResponse.json({ 
        error: 'Payment processing not configured. Please contact support.',
        configured: false 
      }, { status: 503 })
    }

    const { planId } = await request.json()

    if (!planId) {
      return NextResponse.json({ error: 'Plan ID required' }, { status: 400 })
    }

    const stripe = getStripe()
    if (!stripe) {
      return NextResponse.json({ error: 'Payment processing unavailable' }, { status: 503 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: planId,
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/app?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/pricing?canceled=true`
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}