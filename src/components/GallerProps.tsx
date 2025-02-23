import Image from "next/image";
import React from "react";

interface GalleryProps {
  title?: string;
  images: string[];
}

const EcoGallery: React.FC<GalleryProps> = ({ title = "Eco-Friendly Innovations Galore", images }) => {
  return (
    <section id="gallery" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h4 className="text-3xl font-bold">{title}</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {images?.map((src, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={src}
                alt="me"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoGallery;