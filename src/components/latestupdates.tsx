import React from 'react';
import LatestUpdates from './LatestUpdates';

const updates = [
  {
    imageUrl: "https://r.mobirisesite.com/1229512/assets/images/photo-1493166228553-4fa0fdb916e8.jpeg",
    title: "EcoScan AI Launches Today!",
    date: "February 22, 2025",
    description: "Join us as we kick off a new era of eco-friendly technology!",
    buttonText: "Join"
  },
  // Add more updates as needed
];

const HomePage: React.FC = () => {
  return (
    <div>
      <LatestUpdates updates={updates} />
    </div>
  );
};

export default HomePage;