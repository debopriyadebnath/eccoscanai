import Image from 'next/image';

const BuzzSection = () => {
  const testimonials = [
    {
        name: 'Debopriya Debnath',
        text: 'I never knew eco-friendliness could be this exciting!',
        imgSrc: '/tuliiiiiii.jpg',
        imgAlt: 'Mike',
      },{
      name: 'Anirban Ghosh',
      text: 'EcoScan AI transformed our approach to sustainability. We’re now the greenest company on the block!',
      imgSrc: '/anirbanghosh.jpg',
      imgAlt: 'John',
    },
    {
      name: 'Ishika Dasgupta',
      text: 'Their solutions are not just smart; they’re downright genius!',
      imgSrc: '/ishika.jpg',
      imgAlt: 'Sarah',
    },
    {
      name: 'Debjit Biswas',
      text: 'I never knew eco-friendliness could be this exciting!',
      imgSrc: '/debjit.jpg',
      imgAlt: 'Mike',
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-red-600 to-black text-white">
      <div className="container mx-auto px-4">
      <div className="text-center mb-5">
        <h3 className="text-4xl font-bold mb-4">Buzz</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg mb-4 text-gray-800">{testimonial.text}</p>
          <div className="relative w-full h-48 mb-4">
          <Image
            src={testimonial.imgSrc}
            alt={testimonial.imgAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
            priority={index < 2}
          />
          </div>
          <h5 className="font-bold text-xl text-gray-800">{testimonial.name}</h5>
        </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default BuzzSection;