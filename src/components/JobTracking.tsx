'use client'

import { useState, useEffect } from 'react'
import { supabase, Job } from '@/lib/supabase'

interface JobTrackingProps {
  trade: 'plumbing' | 'electrical' | 'mechanical' | 'hvac'
}

export default function JobTracking({ trade }: JobTrackingProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [showNewJob, setShowNewJob] = useState(false)
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    trade: trade
  })

  useEffect(() => {
    loadJobs()
  }, [trade])

  const loadJobs = async () => {
    setLoading(true)
    try {
      // Demo mode - use local storage if Supabase not configured
      const stored = localStorage.getItem(`jobs_${trade}`)
      if (stored) {
        setJobs(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Error loading jobs:', error)
    }
    setLoading(false)
  }

  const saveJobs = (updatedJobs: Job[]) => {
    setJobs(updatedJobs)
    localStorage.setItem(`jobs_${trade}`, JSON.stringify(updatedJobs))
  }

  const createJob = () => {
    if (!newJob.title.trim()) return

    const job: Job = {
      id: Date.now().toString(),
      user_id: 'demo',
      title: newJob.title,
      trade: trade,
      description: newJob.description,
      status: 'in_progress',
      notes: '',
      created_at: new Date().toISOString(),
      completed_at: null
    }

    saveJobs([job, ...jobs])
    setNewJob({ title: '', description: '', trade: trade })
    setShowNewJob(false)
  }

  const completeJob = (jobId: string) => {
    const updated = jobs.map(job =>
      job.id === jobId
        ? { ...job, status: 'completed' as const, completed_at: new Date().toISOString() }
        : job
    )
    saveJobs(updated)
  }

  const deleteJob = (jobId: string) => {
    saveJobs(jobs.filter(j => j.id !== jobId))
  }

  const inProgressJobs = jobs.filter(j => j.status === 'in_progress')
  const completedJobs = jobs.filter(j => j.status === 'completed')

  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-white">Job Tracker</h2>
          <p className="text-sm text-gray-400">Log and track your work</p>
        </div>
        <button
          onClick={() => setShowNewJob(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          + New Job
        </button>
      </div>

      {/* New Job Modal */}
      {showNewJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">New Job</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Job Title</label>
                <input
                  type="text"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  placeholder="e.g., Fix leaky faucet at 123 Main St"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Description</label>
                <textarea
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  placeholder="Job details..."
                  className="w-full h-24 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowNewJob(false)}
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={createJob}
                disabled={!newJob.title.trim()}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-blue-500"
              >
                Create Job
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Jobs List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {loading ? (
          <div className="text-center text-gray-400">Loading jobs...</div>
        ) : (
          <>
            {/* In Progress */}
            {inProgressJobs.length > 0 && (
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-2">IN PROGRESS</h3>
                <div className="space-y-2">
                  {inProgressJobs.map((job) => (
                    <div key={job.id} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium">{job.title}</h4>
                        <span className="px-2 py-1 bg-yellow-600 text-yellow-100 rounded text-xs">
                          Active
                        </span>
                      </div>
                      {job.description && (
                        <p className="text-gray-400 text-sm mb-2">{job.description}</p>
                      )}
                      <p className="text-gray-500 text-xs">
                        Started {new Date(job.created_at).toLocaleDateString()}
                      </p>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => completeJob(job.id)}
                          className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-500"
                        >
                          Mark Complete
                        </button>
                        <button
                          onClick={() => deleteJob(job.id)}
                          className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Completed */}
            {completedJobs.length > 0 && (
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-2">COMPLETED</h3>
                <div className="space-y-2">
                  {completedJobs.map((job) => (
                    <div key={job.id} className="bg-gray-800/50 rounded-lg p-4 opacity-75">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium">{job.title}</h4>
                        <span className="px-2 py-1 bg-green-600 text-green-100 rounded text-xs">
                          Done
                        </span>
                      </div>
                      {job.description && (
                        <p className="text-gray-400 text-sm mb-2">{job.description}</p>
                      )}
                      <p className="text-gray-500 text-xs">
                        Completed {job.completed_at ? new Date(job.completed_at).toLocaleDateString() : 'Unknown'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {jobs.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <p className="text-lg">No jobs logged yet</p>
                <p className="text-sm mt-2">Tap "New Job" to start tracking your work</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Stats */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex justify-around">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{inProgressJobs.length}</p>
            <p className="text-gray-400 text-sm">Active</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{completedJobs.length}</p>
            <p className="text-gray-400 text-sm">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{jobs.length}</p>
            <p className="text-gray-400 text-sm">Total</p>
          </div>
        </div>
      </div>
    </div>
  )
}