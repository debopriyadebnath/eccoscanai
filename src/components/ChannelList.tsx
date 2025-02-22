// components/ChannelList.tsx
import Link from 'next/link';
interface ChannelListProps {
    channels: string[];
    joinChannel: (channel: string) => void;
  }
const ChannelList = ({
  channels,
}: {
  channels: string[];
}) => {
  return (
    <ul>
      {channels.map((channel) => (
        <li key={channel} className="p-2">
          <Link href={`/channel/${channel}`} className="text-blue-500">
            {channel}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ChannelList;
