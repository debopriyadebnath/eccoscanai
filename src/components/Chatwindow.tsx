// components/ChatWindow.tsx
import { useState, useEffect } from 'react';
import socket from '../lib/socket';

const ChatWindow = ({ currentChannel }: { currentChannel: string }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('joinChannel', currentChannel);

    socket.on('message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.emit('leaveChannel', currentChannel);
      socket.off('message');
    };
  }, [currentChannel]);

  const sendMessage = () => {
    socket.emit('sendMessage', { channel: currentChannel, message });
    setMessage('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="border p-2 rounded flex-1"
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
