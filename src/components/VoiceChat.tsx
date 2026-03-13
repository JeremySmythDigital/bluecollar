'use client'

import { useState, useRef, useEffect } from 'react'
import { chat } from '@/lib/mistral'

interface VoiceChatProps {
  trade: 'plumbing' | 'electrical' | 'mechanical' | 'hvac'
  onTranscript?: (text: string) => void
}

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function VoiceChat({ trade, onTranscript }: VoiceChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isListening, setIsListening] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef<unknown>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()
        recognition.continuous = false
        recognition.interimResults = true
        recognition.lang = 'en-US'

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
          const current = event.resultIndex
          const transcriptResult = event.results[current][0].transcript
          setTranscript(transcriptResult)
        }

        recognition.onend = () => {
          setIsListening(false)
        }
        
        recognitionRef.current = recognition
      }
    }
    
    return () => {
      if (recognitionRef.current && typeof recognitionRef.current === 'object' && 'stop' in recognitionRef.current) {
        (recognitionRef.current as { stop: () => void }).stop()
      }
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const startListening = () => {
    if (recognitionRef.current && typeof recognitionRef.current === 'object' && 'start' in recognitionRef.current) {
      setIsListening(true)
      setTranscript('')
      ;(recognitionRef.current as { start: () => void }).start()
    }
  }

  const stopListening = async () => {
    if (recognitionRef.current && typeof recognitionRef.current === 'object' && 'stop' in recognitionRef.current) {
      ;(recognitionRef.current as { stop: () => void }).stop()
      setIsListening(false)
      
      if (transcript) {
        await sendMessage(transcript)
      }
    }
  }

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: text,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setTranscript('')
    setIsProcessing(true)

    try {
      const allMessages = [...messages.map(m => ({ role: m.role, content: m.content })), 
                          { role: 'user' as const, content: text }]
      
      const response = await chat(allMessages, trade)

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
      
      // Speak the response
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(response)
        utterance.rate = 0.9
        speechSynthesis.speak(utterance)
      }

      onTranscript?.(text)
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I had trouble processing that. Please try again.',
        timestamp: new Date()
      }])
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-800 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">Voice Assistant</h2>
        <p className="text-sm text-gray-400 capitalize">{trade} Mode</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <p className="text-lg">Tap the microphone to start</p>
            <p className="text-sm mt-2">Ask about troubleshooting, guides, or techniques</p>
          </div>
        )}
        
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              <p>{msg.content}</p>
              <p className="text-xs mt-1 opacity-60">
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-gray-700 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        {transcript && (
          <div className="mb-2 p-2 bg-gray-700 rounded text-gray-300 text-sm">
            {transcript}
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type or use microphone..."
            className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                sendMessage((e.target as HTMLInputElement).value)
                ;(e.target as HTMLInputElement).value = ''
              }
            }}
          />
          
          <button
            onClick={isListening ? stopListening : startListening}
            disabled={isProcessing}
            className={`p-3 rounded-full transition-colors ${
              isListening
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-blue-600 hover:bg-blue-700'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isListening ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}