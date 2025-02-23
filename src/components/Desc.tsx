import Image from 'next/image';

const EcoScanMission = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full flex flex-col lg:flex-row items-center lg:w-5/6">
        {/* Image Wrapper */}
        <div className="w-full lg:w-1/2 p-4">
          <Image
            className="w-full"
            src="/logoimg.png"
            alt="EcoScan AI Mission"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>
        
        {/* Text Wrapper */}
        <div className="w-full lg:w-1/2 text-left p-4">
          <h1 className="text-4xl font-bold mb-4">
            <b>EcoScan AI Mission</b>
          </h1>
          <p className="text-lg mb-3">
            At EcoScan AI, we’re not just another tech company; we’re the eco-warriors of the digital age. Our mission is to create innovative solutions that help businesses thrive while keeping Mother Earth smiling.
          </p>
          <p className="text-lg mb-3">
            We believe in a future where technology and nature coexist harmoniously. Our vision is to empower organizations to make sustainable choices that benefit both their bottom line and the planet.
          </p>
          <p className="text-lg mb-3">
            Join us in our quest to make the world a greener place, one scan at a time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcoScanMission;