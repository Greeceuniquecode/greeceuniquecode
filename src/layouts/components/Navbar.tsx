import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
      { label: 'Home', href: '/home' },
      { label: 'Contact me', href: '/contact' },
      { label: 'Projects', href: '/projects' },
    ];

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-lg border-b-4 border-blue-700 fixed top-0 left-0 right-0 z-50 w-full">
        <div className="w-full">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 pl-8">
              <img 
                src="/src/assets/Images/titlelogo.png" 
                alt="Title Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <a href="/home" className="text-4xl font-bold text-black hover:text-blue-600 transition-colors duration-150">
                DevPortfolio
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-black hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-lg font-medium transition-all duration-150"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="/contact"
                className="bg-gray-600 text-black px-4 py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-150 shadow-md hover:shadow-lg"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-150"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
