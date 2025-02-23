
import React from 'react'

const page = () => {
  return (
    <div>
      anirban

'use client';

import { useState, useEffect } from 'react';
import ChannelList from '@/components/ChannelList';

const channels = ['Local Vendors', 'Books', 'Groceries'];

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: Date;
}

export default function HomePage() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  // Sample conversation data for each channel
  const channelConversations: { [key: string]: Message[] } = {
    'Anon-ParkStreet': [
      { id: 1, text: 'Anyone know a good restaurant around here?', sender: 'User1', timestamp: new Date('2024-01-10T10:00:00') },
      { id: 2, text: 'Try Peter Cat, their chelo kebab is amazing!', sender: 'User2', timestamp: new Date('2024-01-10T10:02:00') },
    ],
    // Additional channel conversations here...
  };

  useEffect(() => {
    if (selectedChannel) {
      setMessages(channelConversations[selectedChannel] || []);
    }
  }, [selectedChannel]);

  const joinChannel = (channel: string) => {
    setSelectedChannel(channel);
  };

  const kolkataChannels = [
    'Anon-ParkStreet',
    'Anon-NewMarket',
    'Anon-SaltLake',
    'Anon-Howrah',
    'Anon-Kalighat',
    'Anon-DumDum',
    'Anon-Gariahat',
    'Anon-Esplanade',
    'Anon-BhabanipurMarket',
    'Anon-CollegeSt'
  ].map((channel) => ({
    id: channel,
    name: channel,
    unreadCount: Math.floor(Math.random() * 5), // Simulated unread count
  }));

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      const message: Message = {
        id: Date.now(),
        text: newMessage,
        sender: 'Anonymous User',
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/4 bg-gray-800 p-4 shadow-xl">
        <h2 className="text-white text-xl mb-4 font-bold border-b border-gray-700 pb-2">Kolkata Channels</h2>
        <div className="space-y-2">
          {kolkataChannels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => joinChannel(channel.name)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                selectedChannel === channel.name ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center">
                <span className="text-lg mr-2">#</span>
                {channel.name}
              </span>
              {channel.unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {channel.unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/4 bg-gray-700 p-4 flex flex-col">
        {selectedChannel ? (
          <>
            <div className="bg-gray-800 px-4 py-2 rounded-t-lg mb-4">
              <h3 className="text-xl text-white font-semibold">#{selectedChannel}</h3>
            </div>
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2">
              {messages.map((message) => (
                <div key={message.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                      {message.sender.charAt(0)}
                    </div>
                    <span className="text-blue-400 font-bold">{message.sender}</span>
                    <span className="text-gray-500 text-sm ml-2">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-200 ml-10">{message.text}</p>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="flex gap-2 bg-gray-800 p-4 rounded-lg">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Message #${selectedChannel}`}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <span className="text-6xl mb-4">👋</span>
            <p className="text-xl text-gray-400">Select a channel to start chatting!</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default page

