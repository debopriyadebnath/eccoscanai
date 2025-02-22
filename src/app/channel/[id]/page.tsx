// app/channel/[id]/page.tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ChatWindow from '@/components/Chatwindow';

export default function ChannelPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [channel, setChannel] = useState(id);

  useEffect(() => {
    setChannel(id);
  }, [id]);

  return (
    <div className="flex-1">
      <ChatWindow currentChannel={channel} />
    </div>
  );
}
