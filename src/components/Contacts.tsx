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
              <iframe
                className="w-full h-full border-0"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6045.3003145248895!2d-73.9884657!3d40.7477229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2zMzUwIDV0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDExOCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1689597362021!5m2!1sen!2sen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;