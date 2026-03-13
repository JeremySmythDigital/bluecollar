'use client'

import { useState } from 'react'
import { diagnoseProblem } from '@/lib/mistral'

interface Symptom {
  id: string
  text: string
  selected: boolean
}

const COMMON_SYMPTOMS = {
  plumbing: [
    'Water leaking', 'Low water pressure', 'Clogged drain', 'Strange noises',
    'Water not heating', 'Running toilet', 'Smelly drain'
  ],
  electrical: [
    'No power', 'Flickering lights', 'Tripped breaker', 'Burning smell',
    'Outlet not working', 'Sparking outlet', 'Warm outlet'
  ],
  mechanical: [
    'Engine won\'t start', 'Strange noises', 'Vibration', 'Fluid leak',
    'Overheating', 'Poor performance', 'Warning light'
  ],
  hvac: [
    'No cooling', 'No heating', 'Strange noises', 'Poor airflow',
    'Ice on unit', 'High humidity', 'Bad smell'
  ]
}

interface TroubleshootingProps {
  trade: 'plumbing' | 'electrical' | 'mechanical' | 'hvac'
}

interface Diagnosis {
  diagnosis: string
  confidence: number
  followUpQuestions: string[]
  suggestedSolution: string
}

export default function Troubleshooting({ trade }: TroubleshootingProps) {
  const [step, setStep] = useState(1)
  const [problem, setProblem] = useState('')
  const [symptoms, setSymptoms] = useState<Symptom[]>([])
  const [customSymptom, setCustomSymptom] = useState('')
  const [loading, setLoading] = useState(false)
  const [diagnosis, setDiagnosis] = useState<Diagnosis | null>(null)

  const availableSymptoms = COMMON_SYMPTOMS[trade] || []

  const toggleSymptom = (text: string) => {
    setSymptoms(prev => {
      const existing = prev.find(s => s.text === text)
      if (existing) {
        return prev.map(s => s.text === text ? { ...s, selected: !s.selected } : s)
      }
      return [...prev, { id: Date.now().toString(), text, selected: true }]
    })
  }

  const addCustomSymptom = () => {
    if (customSymptom.trim()) {
      setSymptoms(prev => [...prev, { id: Date.now().toString(), text: customSymptom.trim(), selected: true }])
      setCustomSymptom('')
    }
  }

  const runDiagnosis = async () => {
    setLoading(true)
    const selectedSymptoms = symptoms.filter(s => s.selected).map(s => s.text)
    
    try {
      const result = await diagnoseProblem({
        trade,
        symptoms: selectedSymptoms,
        previousDiagnoses: []
      })
      setDiagnosis(result)
      setStep(3)
    } catch (error) {
      console.error('Diagnosis error:', error)
      // Fallback demo diagnosis
      setDiagnosis({
        diagnosis: 'Based on the symptoms described, this appears to be a common issue.',
        confidence: 75,
        followUpQuestions: ['How long has this been happening?', 'Any recent changes?'],
        suggestedSolution: 'Try the basic troubleshooting steps first, then consult a professional if needed.'
      })
      setStep(3)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setStep(1)
    setProblem('')
    setSymptoms([])
    setDiagnosis(null)
  }

  if (step === 3 && diagnosis) {
    return (
      <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <button
            onClick={reset}
            className="text-blue-400 hover:text-blue-300 mb-2"
          >
            ← Start new diagnosis
          </button>
          <h2 className="text-xl font-bold text-white">Diagnosis Results</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Confidence */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 dark:text-gray-400">Confidence Level</span>
              <span className="text-2xl font-bold text-white">{diagnosis.confidence}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${
                  diagnosis.confidence >= 80 ? 'bg-green-500' :
                  diagnosis.confidence >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${diagnosis.confidence}%` }}
              />
            </div>
          </div>

          {/* Diagnosis */}
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
            <h3 className="text-blue-400 font-semibold mb-2">🔍 Diagnosis</h3>
            <p className="text-white text-lg">{diagnosis.diagnosis}</p>
          </div>

          {/* Suggested Solution */}
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
            <h3 className="text-green-400 font-semibold mb-2">✅ Suggested Solution</h3>
            <p className="text-white">{diagnosis.suggestedSolution}</p>
          </div>

          {/* Follow-up Questions */}
          {diagnosis.followUpQuestions.length > 0 && (
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-gray-400 font-semibold mb-2">❓ Follow-up Questions</h3>
              <ul className="space-y-2">
                {diagnosis.followUpQuestions.map((q, idx) => (
                  <li key={idx} className="text-white">• {q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="p-4 bg-gray-800 border-t border-gray-700">
          <div className="flex gap-4">
            <button
              onClick={reset}
              className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              New Diagnosis
            </button>
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
              Log as Job
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <button
            onClick={() => setStep(1)}
            className="text-blue-400 hover:text-blue-300 mb-2"
          >
            ← Back
          </button>
          <h2 className="text-xl font-bold text-white">Select Symptoms</h2>
          <p className="text-gray-400 text-sm">What symptoms are you experiencing?</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Pre-defined symptoms */}
          <div className="flex flex-wrap gap-2 mb-6">
            {availableSymptoms.map((symptom) => {
              const isSelected = symptoms.find(s => s.text === symptom)?.selected
              return (
                <button
                  key={symptom}
                  onClick={() => toggleSymptom(symptom)}
                  className={`px-3 py-2 rounded-full text-sm transition-colors ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {symptom}
                </button>
              )
            })}
          </div>

          {/* Custom symptom input */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm mb-2 block">Other symptoms:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customSymptom}
                onChange={(e) => setCustomSymptom(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCustomSymptom()}
                placeholder="Describe additional symptoms..."
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addCustomSymptom}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                Add
              </button>
            </div>
          </div>

          {/* Selected symptoms */}
          {symptoms.filter(s => s.selected).length > 0 && (
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Selected Symptoms:</h4>
              <div className="flex flex-wrap gap-2">
                {symptoms.filter(s => s.selected).map((s) => (
                  <span
                    key={s.id}
                    className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                  >
                    {s.text}
                    <button
                      onClick={() => toggleSymptom(s.text)}
                      className="ml-2 text-blue-200 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Continue */}
        <div className="p-4 bg-gray-800 border-t border-gray-700">
          <button
            onClick={runDiagnosis}
            disabled={symptoms.filter(s => s.selected).length === 0 || loading}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 font-semibold"
          >
            {loading ? 'Analyzing...' : 'Get Diagnosis'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-800 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">Troubleshooting Wizard</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Describe your problem and get instant diagnosis</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <label className="text-gray-400 text-sm mb-2 block">What's the problem?</label>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Describe the issue you're experiencing..."
          className="w-full h-32 bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        {/* Trade-specific hints */}
        <div className="mt-4 bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 text-sm mb-2">Common {trade} problems:</h4>
          <div className="flex flex-wrap gap-2">
            {availableSymptoms.slice(0, 4).map((symptom) => (
              <button
                key={symptom}
                onClick={() => {
                  setProblem(symptom)
                }}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600"
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <button
          onClick={() => setStep(2)}
          disabled={!problem.trim()}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  )
}