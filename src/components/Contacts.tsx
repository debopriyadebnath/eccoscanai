import Image from 'next/image';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <div className="text-center lg:text-left">
              <h5 className="text-3xl font-bold mb-4">Contact Us</h5>
              <p className="text-lg mb-4">
                Phone: +1-800-555-0199
                <br />
                Email: info@ecoscanai.com
                <br />
                Address: India
                <br />
                Working Hours: Mon-Fri: 9am - 5pm
              </p>
              {/* Button can be added if required */}
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="h-80">
              <Image
                className="w-full h-full border-0"
               alt='IEM'
               src={'/iem.png'}
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;