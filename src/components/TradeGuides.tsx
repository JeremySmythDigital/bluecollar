'use client'

import { useState, useEffect } from 'react'

interface GuideStep {
  title: string
  description: string
  tips: string[]
}

interface Guide {
  steps: GuideStep[]
  tools: string[]
  materials: string[]
  timeEstimate: string
}

const GUIDE_TEMPLATES = {
  plumbing: [
    { title: 'Fix a Leaky Faucet', difficulty: 'beginner' as const },
    { title: 'Unclog a Drain', difficulty: 'beginner' as const },
    { title: 'Replace a Toilet Fill Valve', difficulty: 'intermediate' as const },
    { title: 'Install a Garbage Disposal', difficulty: 'intermediate' as const },
    { title: 'Replace a Water Heater Element', difficulty: 'advanced' as const },
  ],
  electrical: [
    { title: 'Replace a Light Switch', difficulty: 'beginner' as const },
    { title: 'Install a Ceiling Fan', difficulty: 'intermediate' as const },
    { title: 'Add a New Electrical Outlet', difficulty: 'intermediate' as const },
    { title: 'Upgrade an Electrical Panel', difficulty: 'advanced' as const },
    { title: 'Install a Dedicated Circuit', difficulty: 'advanced' as const },
  ],
  mechanical: [
    { title: 'Change Engine Oil', difficulty: 'beginner' as const },
    { title: 'Replace Brake Pads', difficulty: 'intermediate' as const },
    { title: 'Diagnose Engine Misfire', difficulty: 'intermediate' as const },
    { title: 'Replace Timing Belt', difficulty: 'advanced' as const },
    { title: 'Rebuild a Transmission', difficulty: 'advanced' as const },
  ],
  hvac: [
    { title: 'Change an Air Filter', difficulty: 'beginner' as const },
    { title: 'Clean AC Condenser Coils', difficulty: 'intermediate' as const },
    { title: 'Troubleshoot Thermostat Issues', difficulty: 'intermediate' as const },
    { title: 'Install a Programmable Thermostat', difficulty: 'intermediate' as const },
    { title: 'Recharge an AC System', difficulty: 'advanced' as const },
  ]
}

interface TradeGuidesProps {
  trade: 'plumbing' | 'electrical' | 'mechanical' | 'hvac'
}

export default function TradeGuides({ trade }: TradeGuidesProps) {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null)
  const [guideContent, setGuideContent] = useState<Guide | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)

  const guides = GUIDE_TEMPLATES[trade] || []

  const selectGuide = async (title: string) => {
    setSelectedGuide(title)
    setCurrentStep(0)
    setLoading(true)
    
    // Simulate loading guide (in production, fetch from Supabase or generate via AI)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Demo guide content
    setGuideContent({
      steps: [
        { title: 'Gather Materials', description: 'Collect all necessary tools and materials before starting.', tips: ['Keep a bucket nearby', 'Turn off water supply first'] },
        { title: 'Prepare Work Area', description: 'Clear the area and protect surrounding surfaces.', tips: ['Use drop cloths', 'Ensure good lighting'] },
        { title: 'Safety Check', description: 'Verify all safety measures are in place.', tips: ['Wear safety glasses', 'Check for electrical hazards'] },
        { title: 'Main Procedure', description: 'Execute the main task following proper techniques.', tips: ['Work methodically', 'Test frequently'] },
        { title: 'Cleanup & Test', description: 'Clean up and verify the work is complete.', tips: ['Check for leaks', 'Document the work'] }
      ],
      tools: ['Adjustable wrench', 'Screwdriver set', 'Pliers', 'Tape measure', 'Level'],
      materials: ['Replacement parts', 'Teflon tape', 'Plumber\'s putty'],
      timeEstimate: '1-2 hours'
    })
    
    setLoading(false)
  }

  const nextStep = () => {
    if (guideContent && currentStep < guideContent.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (selectedGuide && guideContent) {
    return (
      <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <button
            onClick={() => setSelectedGuide(null)}
            className="text-blue-400 hover:text-blue-300 mb-2"
          >
            ← Back to guides
          </button>
          <h2 className="text-xl font-bold text-white">{selectedGuide}</h2>
          <p className="text-sm text-gray-400">Estimated time: {guideContent.timeEstimate}</p>
        </div>

        {/* Current Step */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="text-center text-gray-400">Loading guide...</div>
          ) : (
            <>
              <div className="mb-4">
                <span className="text-blue-400 font-semibold">
                  Step {currentStep + 1} of {guideContent.steps.length}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {guideContent.steps[currentStep].title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-lg">
                {guideContent.steps[currentStep].description}
              </p>
              
              {guideContent.steps[currentStep].tips.length > 0 && (
                <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 mb-6">
                  <h4 className="text-blue-400 font-semibold mb-2">💡 Tips</h4>
                  <ul className="space-y-2">
                    {guideContent.steps[currentStep].tips.map((tip, idx) => (
                      <li key={idx} className="text-gray-300">• {tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools & Materials (show on first step) */}
              {currentStep === 0 && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">🔧 Tools Needed</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {guideContent.tools.map((tool, idx) => (
                        <li key={idx}>• {tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">📦 Materials</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {guideContent.materials.map((material, idx) => (
                        <li key={idx}>• {material}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="p-4 bg-gray-800 border-t border-gray-700 flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
          >
            Previous
          </button>
          
          <div className="flex gap-2">
            {guideContent.steps.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentStep ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextStep}
            disabled={currentStep === guideContent.steps.length - 1}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500"
          >
            Next
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-800 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">Trade Guides</h2>
        <p className="text-sm text-gray-400">Step-by-step instructions for common tasks</p>
      </div>
      
      <div className="p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
        {guides.map((guide, idx) => (
          <button
            key={idx}
            onClick={() => selectGuide(guide.title)}
            className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-white font-medium">{guide.title}</h3>
              <span className={`px-2 py-1 rounded text-xs ${
                guide.difficulty === 'beginner' ? 'bg-green-600 text-green-100' :
                guide.difficulty === 'intermediate' ? 'bg-yellow-600 text-yellow-100' :
                'bg-red-600 text-red-100'
              }`}>
                {guide.difficulty}
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Tap to view guide</p>
          </button>
        ))}
      </div>
    </div>
  )
}