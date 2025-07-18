import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-blue-700 shadow-inner">
      <div className="w-full py-4 flex flex-col sm:flex-row justify-between items-center text-gray-700 text-sm">
        <div>
          &copy; {new Date().getFullYear()} Greece Dahal. All rights reserved.
        </div>
        <div>
           Software Developer
        </div>
      </div>
    </footer>
  );
};

export default Footer;
