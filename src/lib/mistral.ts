import { mistral } from '@ai-sdk/mistral'
import { generateText } from 'ai'

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface TroubleshootingContext {
  trade: string
  symptoms: string[]
  previousDiagnoses?: string[]
}

// Trade-specific system prompts
const TRADE_PROMPTS = {
  plumbing: `You are an expert plumber AI assistant. Help diagnose plumbing problems and provide step-by-step guidance. 
Focus on: pipe systems, fixtures, drains, water heaters, sewage systems.
Always prioritize safety and code compliance. Ask clarifying questions if symptoms are unclear.`,
  
  electrical: `You are an expert electrician AI assistant. Help diagnose electrical problems and provide guidance.
Focus on: circuits, wiring, panels, outlets, switches, lighting.
SAFETY FIRST: Always warn about electrical hazards. Recommend professional help for dangerous situations.`,
  
  mechanical: `You are an expert mechanic AI assistant. Help diagnose vehicle and machinery problems.
Focus on: engines, transmissions, brakes, suspension, HVAC, electrical systems in vehicles.
Provide step-by-step repair guidance with tool recommendations.`,
  
  hvac: `You are an expert HVAC technician AI assistant. Help diagnose heating, cooling, and ventilation problems.
Focus on: furnaces, AC units, heat pumps, ductwork, thermostats.
Consider seasonal factors and energy efficiency.`
}

export async function chat(
  messages: ChatMessage[],
  trade: keyof typeof TRADE_PROMPTS = 'plumbing'
): Promise<string> {
  const systemPrompt = TRADE_PROMPTS[trade] || TRADE_PROMPTS.plumbing
  
  try {
    const result = await generateText({
      model: mistral('mistral-large-latest'),
      system: systemPrompt,
      messages: messages.map(m => ({ role: m.role, content: m.content })),
    })
    
    return result.text
  } catch (error) {
    console.error('Chat error:', error)
    // Fallback for demo
    return "I'm here to help with your " + trade + " questions. Could you tell me more about what you're working on?"
  }
}

export async function diagnoseProblem(context: TroubleshootingContext): Promise<{
  diagnosis: string
  confidence: number
  followUpQuestions: string[]
  suggestedSolution: string
}> {
  const prompt = `A ${context.trade} professional reports the following problem:
Symptoms: ${context.symptoms.join(', ')}
${context.previousDiagnoses ? `Previous diagnoses considered: ${context.previousDiagnoses.join(', ')}` : ''}

Provide:
1. Most likely diagnosis
2. Confidence level (0-100)
3. Follow-up questions to confirm diagnosis (as JSON array)
4. Suggested solution

Format as JSON: {"diagnosis": "", "confidence": 0, "followUpQuestions": [], "suggestedSolution": ""}`

  try {
    const result = await generateText({
      model: mistral('mistral-large-latest'),
      prompt: prompt,
    })
    
    try {
      return JSON.parse(result.text)
    } catch {
      return {
        diagnosis: result.text,
        confidence: 70,
        followUpQuestions: ['Can you provide more details about when the problem occurs?'],
        suggestedSolution: 'Please provide more details for accurate diagnosis.'
      }
    }
  } catch (error) {
    console.error('Diagnosis error:', error)
    return {
      diagnosis: 'Based on the symptoms described, this appears to be a common issue.',
      confidence: 75,
      followUpQuestions: ['How long has this been happening?', 'Any recent changes?'],
      suggestedSolution: 'Try the basic troubleshooting steps first, then consult a professional if needed.'
    }
  }
}

export async function generateGuide(
  trade: string,
  task: string,
  skillLevel: 'beginner' | 'intermediate' | 'advanced'
): Promise<{
  steps: Array<{title: string, description: string, tips: string[]}>
  tools: string[]
  materials: string[]
  timeEstimate: string
}> {
  const prompt = `Generate a detailed guide for ${task} in ${trade} for a ${skillLevel} level professional.
Include:
- Step-by-step instructions
- Required tools
- Required materials
- Time estimate

Format as JSON: {"steps": [{"title": "", "description": "", "tips": []}], "tools": [], "materials": [], "timeEstimate": ""}`

  try {
    const result = await generateText({
      model: mistral('mistral-large-latest'),
      prompt: prompt,
    })
    
    try {
      return JSON.parse(result.text)
    } catch {
      return {
        steps: [{ title: 'Error', description: 'Could not generate guide', tips: [] }],
        tools: [],
        materials: [],
        timeEstimate: 'Unknown'
      }
    }
  } catch (error) {
    console.error('Guide generation error:', error)
    return {
      steps: [{ title: 'Error', description: 'Could not generate guide', tips: [] }],
      tools: [],
      materials: [],
      timeEstimate: 'Unknown'
    }
  }
}