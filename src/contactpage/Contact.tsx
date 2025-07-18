import React, { useState } from 'react';
import { 
  Github, 
  Instagram, 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Copy, 
  Check 
} from 'lucide-react';

interface ContactInfo {
  type: string;
  value: string;
  icon: React.ReactNode;
  link?: string;
  copyable: boolean;
}

const ContactPage: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      type: 'Email',
      value: 'notgreece2@gmail.com',
      icon: <Mail size={24} />,
      link: 'mailto:notgreece2@gmail.com',
      copyable: true
    },
    {
      type: 'Phone',
      value: '9800000000',
      icon: <Phone size={24} />,
      link: 'tel:+15551234567',
      copyable: true
    },
    {
      type: 'Location',
      value: 'Itahari,Nepal',
      icon: <MapPin size={24} />,
      copyable: true
    },
    {
      type: 'GitHub',
      value: 'Greeceuniquecode',
      icon: <Github size={24} />,
      link: 'https://github.com/Greeceuniquecode',
      copyable: true
    },
    {
      type: 'Instagram',
      value: '@greecedahal',
      icon: <Instagram size={24} />,
      link: 'https://www.instagram.com/greecedahal/',
      copyable: true
    },
    {
      type: 'Facebook',
      value: 'Greece Dahal',
      icon: <Facebook size={24} />,
      link: 'https://www.facebook.com/greece.dahal.5/',
      copyable: true
    }
  ];

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-100 to-white relative overflow-hidden overflow-x-hidden pt-4">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ready to connect? Find me on these platforms or drop me a message directly.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="bg-white/90 border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600 group-hover:text-blue-500 transition-colors">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {contact.type}
                  </h3>
                </div>
                {contact.copyable && (
                  <button
                    onClick={() => handleCopy(contact.value, contact.type)}
                    className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-200 group/copy"
                    title="Copy to clipboard"
                  >
                    {copiedItem === contact.type ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} className="text-blue-600 group-hover/copy:text-blue-500" />
                    )}
                  </button>
                )}
              </div>
              
              <div className="mb-4">
                {contact.link ? (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition-colors text-sm font-medium hover:underline"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-blue-700 text-sm font-medium">
                    {contact.value}
                  </p>
                )}
              </div>

              {contact.link && (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-pink-300 hover:bg-pink-500 text-white text-sm font-medium rounded-lg transition-colors duration-200 hover:shadow-lg"
                >
                  Visit
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-300 to-blue-500 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Choose your preferred way to connect!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:notgreece2@gmail.com"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2 hover:shadow-lg"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="9800000000"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center gap-2 hover:shadow-lg"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Copy Notification */}
        {copiedItem && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-pulse">
            <Check size={20} />
            <span className="font-medium">{copiedItem} copied to clipboard!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
