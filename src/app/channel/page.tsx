// app/page.tsx
import { useState } from 'react';
import ChannelList from '@/components/ChannelList';

const channels = ['Local Vendors', 'Books', 'Groceries'];

export default function HomePage() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);

  const joinChannel = (channel: string) => {
    setSelectedChannel(channel);
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 p-4">
        <ChannelList channels={channels} joinChannel ={joinChannel} />
      </div>
      <div className="w-3/4 bg-white p-4">
        {selectedChannel ? (
          <p>Select a specific channel to chat.</p>
        ) : (
          <p className="text-xl">Select a channel to join!</p>
        )}
      </div>
    </div>
  );
}
