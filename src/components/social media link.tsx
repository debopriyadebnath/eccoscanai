import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTwitch } from 'react-icons/fa';

interface SocialLink {
  href: string;
  Icon: React.ElementType;
}
const socialLinks: SocialLink[] = [
  { href: 'https://www.facebook.com/YourOfficialPage', Icon: FaFacebook },
  { href: 'https://twitter.com/YourOfficialAccount', Icon: FaTwitter },
  { href: 'https://www.instagram.com/YourOfficialProfile', Icon: FaInstagram },
  { href: 'https://www.linkedin.com/in/YourOfficialProfile', Icon: FaLinkedin },
  { href: 'https://www.twitch.tv/YourOfficialChannel', Icon: FaTwitch },
];
const socialLinks: SocialLink[] = [
  { href: 'https://mobiri.se/', Icon: FaFacebook },
  { href: 'https://mobiri.se/', Icon: FaTwitter },
  { href: 'https://mobiri.se/', Icon: FaInstagram },
  { href: 'https://mobiri.se/', Icon: FaLinkedin },
  { href: 'https://mobiri.se/', Icon: FaTwitch },
];

const SocialMediaLinks: React.FC = () => {
  return (
    <section className="bg-white py-8" id="follow-us">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-5">Join Our Green Movement</h3>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
              <link.Icon size={30} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
