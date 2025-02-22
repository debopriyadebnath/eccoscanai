'use client'
import { useState } from 'react'
import { User, Mail, Phone, MapPin, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'

type UserSettings = {
  name: string
  email: string
  phone: string
  address: string
  notifications: boolean
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<UserSettings>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Eco Street, Green City, 12345',
    notifications: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated settings to your backend
    console.log('Updated settings:', settings)
    alert('Settings updated successfully!')
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-black/50 border border-red-900/30 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-red-500 font-mono text-center">Account Settings</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-mono text-red-300 mb-1">Full Name</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value=""
                onChange={handleInputChange}
                className="pl-10 w-full px-4 py-2 bg-black border border-red-900 rounded focus:ring-red-500 focus:border-red-500 font-mono text-white"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-mono text-red-300 mb-1">Email Address</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value=""
                onChange={handleInputChange}
                className="pl-10 w-full px-4 py-2 bg-black border border-red-900 rounded focus:ring-red-500 focus:border-red-500 font-mono text-white"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-mono text-red-300 mb-1">Phone Number</label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value=""
                onChange={handleInputChange}
                className="pl-10 w-full px-4 py-2 bg-black border border-red-900 rounded focus:ring-red-500 focus:border-red-500 font-mono text-white"
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-mono text-red-300 mb-1">Address</label>
            <div className="relative">
              <input
                type="text"
                id="address"
                name="address"
                value=""
                onChange={handleInputChange}
                className="pl-10 w-full px-4 py-2 bg-black border border-red-900 rounded focus:ring-red-500 focus:border-red-500 font-mono text-white"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleInputChange}
              className="h-4 w-4 bg-black border-red-900 rounded text-red-600 focus:ring-red-500"
            />
            <label htmlFor="notifications" className="ml-2 block text-sm font-mono text-red-300">
              Receive email notifications
            </label>
          </div>

          <Button type="submit" className="w-full bg-red-900/30 hover:bg-red-900/50 text-white font-mono border border-red-900 rounded">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  )
}