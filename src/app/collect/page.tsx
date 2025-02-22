/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState, useEffect } from 'react'
import { Trash2, MapPin, CheckCircle, Clock,  Upload, Loader, Calendar, Weight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'react-hot-toast'
import { getWasteCollectionTasks, updateTaskStatus, saveReward, saveCollectedWaste, getUserByEmail } from '@/utils/db/actions'
import { GoogleGenerativeAI } from "@google/generative-ai"
import Image from 'next/image'

// Make sure to set your Gemini API key in your environment variables
const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY

type CollectionTask = {
  id: number
  location: string
  wasteType: string
  amount: string
  status: 'pending' | 'in_progress' | 'completed' | 'verified'
  date: string
  collectorId: number | null
}

const ITEMS_PER_PAGE = 5

export default function CollectPage() {
  const [tasks, setTasks] = useState<CollectionTask[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredWasteType, setHoveredWasteType] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [user, setUser] = useState<{ id: number; email: string; name: string } | null>(null)

  useEffect(() => {
    const fetchUserAndTasks = async () => {
      setLoading(true)
      try {
        // Fetch user
        const userEmail = localStorage.getItem('userEmail')
        if (userEmail) {
          const fetchedUser = await getUserByEmail(userEmail)
          if (fetchedUser) {
            setUser(fetchedUser)
          } else {
            toast.error('User not found. Please log in again.')
            // Redirect to login page or handle this case appropriately
          }
        } else {
          toast.error('User not logged in. Please log in.')
          // Redirect to login page or handle this case appropriately
        }

        // Fetch tasks
        const fetchedTasks = await getWasteCollectionTasks()
        setTasks(fetchedTasks as CollectionTask[])
      } catch (error) {
        console.error('Error fetching user and tasks:', error)
        toast.error('Failed to load user data and tasks. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchUserAndTasks()
  }, [])

  const [selectedTask, setSelectedTask] = useState<CollectionTask | null>(null)
  const [verificationImage, setVerificationImage] = useState<string | null>(null)
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'success' | 'failure'>('idle')
  const [verificationResult, setVerificationResult] = useState<{
    wasteTypeMatch: boolean;
    quantityMatch: boolean;
    confidence: number;
  } | null>(null)
  const [reward, setReward] = useState<number | null>(null)

  const handleStatusChange = async (taskId: number, newStatus: CollectionTask['status']) => {
    if (!user) {
      toast.error('Please log in to collect waste.')
      return
    }

    try {
      const updatedTask = await updateTaskStatus(taskId, newStatus, user.id)
      if (updatedTask) {
        setTasks(tasks.map(task => 
          task.id === taskId ? { ...task, status: newStatus, collectorId: user.id } : task
        ))
        toast.success('Task status updated successfully')
      } else {
        toast.error('Failed to update task status. Please try again.')
      }
    } catch (error) {
      console.error('Error updating task status:', error)
      toast.error('Failed to update task status. Please try again.')
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setVerificationImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const readFileAsBase64 = (dataUrl: string): string => {
    return dataUrl.split(',')[1]
  }

  const handleVerify = async () => {
    if (!selectedTask || !verificationImage || !user) {
      toast.error('Missing required information for verification.')
      return
    }

    setVerificationStatus('verifying')
    
    try {
      const genAI = new GoogleGenerativeAI(geminiApiKey!)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

      const base64Data = readFileAsBase64(verificationImage)

      const imageParts = [
        {
          inlineData: {
            data: base64Data,
            mimeType: 'image/jpeg', // Adjust this if you know the exact type
          },
        },
      ]

      const prompt = `You are an expert in waste management and recycling. Analyze this image and provide:
        1. Confirm if the waste type matches: ${selectedTask.wasteType}
        2. Estimate if the quantity matches: ${selectedTask.amount}
        3. Your confidence level in this assessment (as a percentage)
        
        Respond in JSON format like this:
        {
          "wasteTypeMatch": true/false,
          "quantityMatch": true/false,
          "confidence": confidence level as a number between 0 and 1
        }`

      const result = await model.generateContent([prompt, ...imageParts])
      const response = await result.response
      const text = response.text()
      
      try {
        const parsedResult = JSON.parse(text)
        setVerificationResult({
          wasteTypeMatch: parsedResult.wasteTypeMatch,
          quantityMatch: parsedResult.quantityMatch,
          confidence: parsedResult.confidence
        })
        setVerificationStatus('success')
        
        if (parsedResult.wasteTypeMatch && parsedResult.quantityMatch && parsedResult.confidence > 0.7) {
          await handleStatusChange(selectedTask.id, 'verified')
          const earnedReward = Math.floor(Math.random() * 50) + 10 // Random reward between 10 and 59
          
          // Save the reward
          await saveReward(user.id, earnedReward)

          // Save the collected waste
          await saveCollectedWaste(selectedTask.id, user.id)

          setReward(earnedReward)
          toast.success(`Verification successful! You earned ${earnedReward} tokens!`, {
            duration: 5000,
            position: 'top-center',
          })
        } else {
          toast.error('Verification failed. The collected waste does not match the reported waste.', {
            duration: 5000,
            position: 'top-center',
          })
        }
      } catch (error) {
        console.log(error);
        
        console.error('Failed to parse JSON response:', text)
        setVerificationStatus('failure')
      }
    } catch (error) {
      console.error('Error verifying waste:', error)
      setVerificationStatus('failure')
    }
  }

  const filteredTasks = tasks.filter(task =>
    task.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const pageCount = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE)
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="min-h-screen w-full bg-black text-red-500 p-8">
      <h1 className="text-4xl font-bold mb-8 text-red-500 font-['Courier_New'] text-center">[WASTE COLLECTION SYSTEM]</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="border-2 border-red-500 p-4">
          <h3 className="text-xl font-bold text-red-500 font-['Courier_New'] mb-2">[USER: Priya Sharma]</h3>
          <p className="text-red-400 font-mono">Location: Salt Lake, Kolkata</p>
          <p className="text-red-400 font-mono">Waste Type: Plastic Bottles</p>
          <p className="text-red-400 font-mono">Weight: 5.2 kg</p>
          <p className="text-red-400 font-mono">Reusability: High (Recyclable)</p>
        </div>
        <div className="border-2 border-red-500 p-4">
          <h3 className="text-xl font-bold text-red-500 font-['Courier_New'] mb-2">[USER: Amit Roy]</h3>
          <p className="text-red-400 font-mono">Location: Park Street, Kolkata</p>
          <p className="text-red-400 font-mono">Waste Type: E-waste</p>
          <p className="text-red-400 font-mono">Weight: 3.7 kg</p>
          <p className="text-red-400 font-mono">Reusability: Medium (Parts Salvageable)</p>
        </div>
        <div className="border-2 border-red-500 p-4">
          <h3 className="text-xl font-bold text-red-500 font-['Courier_New'] mb-2">[USER: Riya Das]</h3>
          <p className="text-red-400 font-mono">Location: New Town, Kolkata</p>
          <p className="text-red-400 font-mono">Waste Type: Paper Waste</p>
          <p className="text-red-400 font-mono">Weight: 8.1 kg</p>
          <p className="text-red-400 font-mono">Reusability: High (Recyclable)</p>
        </div>
      </div>
      
      <div className="mb-6 flex items-center justify-center gap-4">
        <Input
          type="text"
          placeholder="SEARCH LOCATION..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md bg-black border-2 border-red-500 text-red-500 placeholder-red-700 font-mono"
        />
        <Button variant="outline" size="icon" className="border-2 border-red-500 text-red-500 hover:bg-red-900/30">
          <Search className="h-5 w-5" />
        </Button>
      </div>

     

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Loader className="animate-spin h-12 w-12 text-red-500" />
          <span className="ml-4 text-red-500 font-mono text-xl">LOADING DATA...</span>
        </div>
      ) : (
        <>
          <div className="grid gap-6">
            {paginatedTasks.map(task => (
              <div key={task.id} className="bg-black p-6 border-2 border-red-500 hover:border-red-400 transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-red-500 flex items-center font-['Courier_New']">
                    <MapPin className="w-6 h-6 mr-3" />
                    &lt;{task.location}&gt;
                  </h2>
                  <StatusBadge status={task.status} />
                </div>
                
                <div className="grid grid-cols-3 gap-6 text-base text-red-400 mb-6 font-mono">
                  <div className="flex items-center relative border border-red-500 p-3">
                    <Trash2 className="w-5 h-5 mr-3" />
                    <span 
                      onMouseEnter={() => setHoveredWasteType(task.wasteType)}
                      onMouseLeave={() => setHoveredWasteType(null)}
                      className="cursor-pointer"
                    >
                      {task.wasteType}
                    </span>
                    {hoveredWasteType === task.wasteType && (
                      <div className="absolute left-0 top-full mt-2 p-3 bg-red-900/90 text-red-100 rounded z-10 border border-red-500">
                        {task.wasteType}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center border border-red-500 p-3">
                    <Weight className="w-5 h-5 mr-3" />
                    {task.amount}
                  </div>
                  <div className="flex items-center border border-red-500 p-3">
                    <Calendar className="w-5 h-5 mr-3" />
                    {task.date}
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  {task.status === 'pending' && (
                    <Button onClick={() => handleStatusChange(task.id, 'in_progress')} className="border-2 border-red-500 text-red-500 hover:bg-red-900/30 px-6" variant="outline">
                      [INITIATE COLLECTION]
                    </Button>
                  )}
                  {task.status === 'in_progress' && task.collectorId === user?.id && (
                    <Button onClick={() => setSelectedTask(task)} className="border-2 border-red-500 text-red-500 hover:bg-red-900/30 px-6" variant="outline">
                      [VERIFY & COMPLETE]
                    </Button>
                  )}
                  {task.status === 'in_progress' && task.collectorId !== user?.id && (
                    <span className="text-red-600 font-mono border border-red-600 p-2">&lt;COLLECTION IN PROGRESS&gt;</span>
                  )}
                  {task.status === 'verified' && (
                    <span className="text-red-600 font-mono border border-red-600 p-2">&lt;TASK COMPLETED&gt;</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center items-center gap-6 font-mono">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-2 border-red-500 text-red-500 hover:bg-red-900/30 px-6"
            >
              [&lt;&lt; PREV]
            </Button>
            <span className="text-red-500 text-lg border-2 border-red-500 px-4 py-2">
              PAGE {currentPage}/{pageCount}
            </span>
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
              disabled={currentPage === pageCount}
              className="border-2 border-red-500 text-red-500 hover:bg-red-900/30 px-6"
            >
              [NEXT &gt;&gt;]
            </Button>
          </div>
        </>
      )}

      {selectedTask && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-8 z-50">
          <div className="bg-black rounded p-8 w-full max-w-3xl border-2 border-red-500">
            <h3 className="text-2xl font-bold mb-6 text-red-500 font-['Courier_New'] text-center">&lt;WASTE VERIFICATION PROTOCOL&gt;</h3>
            
            <div className="mb-6 border-2 border-red-500 p-6">
              <label className="block text-red-500 font-mono mb-4 text-center">
                [UPLOAD VERIFICATION IMAGE]
              </label>
              <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-red-500 border-dashed">
                <div className="text-center">
                  <Upload className="mx-auto h-16 w-16 text-red-500 mb-4" />
                  <label className="cursor-pointer bg-black text-red-500 hover:text-red-400 font-mono">
                    [SELECT FILE]
                    <input type="file" className="sr-only" onChange={handleImageUpload} accept="image/*" />
                  </label>
                  <p className="mt-2 text-sm text-red-400 font-mono">SUPPORTED: PNG, JPG, GIF (MAX 10MB)</p>
                </div>
              </div>
            </div>

            {verificationImage && (
              <div className="mb-6 border-2 border-red-500 p-2">
                <Image src={verificationImage} alt="Verification" className="w-full" />
              </div>
            )}

            <Button
              onClick={handleVerify}
              className="w-full bg-red-500 hover:bg-red-600 text-black font-mono text-lg py-4 mb-4"
              disabled={!verificationImage || verificationStatus === 'verifying'}
            >
              {verificationStatus === 'verifying' ? (
                <div className="flex items-center justify-center">
                  <Loader className="animate-spin h-6 w-6 mr-3" />
                  VERIFYING...
                </div>
              ) : '[INITIATE VERIFICATION]'}
            </Button>

            {verificationStatus === 'success' && verificationResult && (
              <div className="mb-4 p-6 bg-black border-2 border-red-500 font-mono">
                <p className="mb-2">&gt; WASTE TYPE MATCH: {verificationResult.wasteTypeMatch ? 'CONFIRMED' : 'FAILED'}</p>
                <p className="mb-2">&gt; QUANTITY MATCH: {verificationResult.quantityMatch ? 'CONFIRMED' : 'FAILED'}</p>
                <p>&gt; CONFIDENCE LEVEL: {(verificationResult.confidence * 100).toFixed(2)}%</p>
              </div>
            )}

            {verificationStatus === 'failure' && (
              <p className="text-red-500 text-center font-mono mb-4">&lt;VERIFICATION ERROR - RETRY REQUIRED&gt;</p>
            )}

            <Button onClick={() => setSelectedTask(null)} className="w-full border-2 border-red-500 text-red-500 hover:bg-red-900/30 font-mono">
              [TERMINATE VERIFICATION]
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: CollectionTask['status'] }) {
  const statusConfig = {
    pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
    in_progress: { color: 'bg-blue-100 text-blue-800', icon: Trash2 },
    completed: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
    verified: { color: 'bg-purple-100 text-purple-800', icon: CheckCircle },
  }

  const { color, icon: Icon } = statusConfig[status]

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${color} flex items-center`}>
      <Icon className="mr-1 h-3 w-3" />
      {status.replace('_', ' ')}
    </span>
  )
}
