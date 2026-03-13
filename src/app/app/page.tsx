'use client'

import { useState } from 'react'
import VoiceChat from '@/components/VoiceChat'
import TradeGuides from '@/components/TradeGuides'
import Troubleshooting from '@/components/Troubleshooting'
import JobTracking from '@/components/JobTracking'

type Trade = 'plumbing' | 'electrical' | 'mechanical' | 'hvac'
type Tab = 'voice' | 'guides' | 'troubleshoot' | 'jobs'

export default function App() {
  const [trade, setTrade] = useState<Trade>('plumbing')
  const [activeTab, setActiveTab] = useState<Tab>('voice')

  const tabs = [
    { id: 'voice' as const, label: 'Voice AI', icon: '🎤' },
    { id: 'guides' as const, label: 'Guides', icon: '📚' },
    { id: 'troubleshoot' as const, label: 'Fix It', icon: '🔧' },
    { id: 'jobs' as const, label: 'Jobs', icon: '📋' }
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-bold text-white">BlueCollar.ai</h1>
          <div className="text-sm text-gray-400">
            <select
              value={trade}
              onChange={(e) => setTrade(e.target.value as Trade)}
              className="bg-gray-700 text-white rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="plumbing">🔧 Plumbing</option>
              <option value="electrical">⚡ Electrical</option>
              <option value="mechanical">🔩 Mechanical</option>
              <option value="hvac">❄️ HVAC</option>
            </select>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-hidden">
        {activeTab === 'voice' && (
          <div className="h-full max-w-2xl mx-auto">
            <VoiceChat trade={trade} />
          </div>
        )}
        
        {activeTab === 'guides' && (
          <div className="h-full max-w-2xl mx-auto">
            <TradeGuides trade={trade} />
          </div>
        )}
        
        {activeTab === 'troubleshoot' && (
          <div className="h-full max-w-2xl mx-auto">
            <Troubleshooting trade={trade} />
          </div>
        )}
        
        {activeTab === 'jobs' && (
          <div className="h-full max-w-2xl mx-auto">
            <JobTracking trade={trade} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 px-4 py-3 text-center text-gray-500 text-sm">
        <p>BlueCollar.ai — AI coaching for tradespeople</p>
      </footer>
    </div>
  )
}