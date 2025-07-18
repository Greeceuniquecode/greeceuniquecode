import React, { useState, useEffect } from 'react';

const LandingPage: React.FC = () => {
  const [currentStackIndex, setCurrentStackIndex] = useState<number>(0);

  const techStacks: string[] = [
    'REACT',
    'LARAVEL',
    'JAVASCRIPT',
    'NODE.JS',
    'TAILWIND',
    'DART',
    'FLUTTER'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStackIndex((prev) => (prev + 1) % techStacks.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-100 to-white relative overflow-hidden overflow-x-hidden pt-4">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">

            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                  Welcome to my Portfolio
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Hi! I'm Greece Dahal
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                   {' '} Full Stack Web Developer
                  </span>
                </h1>
              </div>

              {/* Tech Stack Animated Badge */}
              <p className="text-xl sm:text-2xl text-gray-700">
                Specializing in{' '}
                <span className="inline-block relative">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-700 transform hover:scale-105 shadow-lg">
                    {techStacks[currentStackIndex]}
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl blur opacity-30 animate-pulse"></span>
                </span>
              </p>

              {/* Description */}
              <div className="space-y-6 text-gray-800 text-lg leading-relaxed lg:mx-0">
                <p>
                  I'm a dedicated full-stack developer with <span className="text-blue-700 font-semibold">4+ years</span> of experience crafting modern web apps using React, Laravel, Django, and more.
                </p>
                <p>
                  My passion for clean, scalable code and learning new technologies drives me to build smart, future-ready solutions.
                </p>
                <p>
                  I also love helping others grow — mentoring junior developers and contributing to open source.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">3+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">10+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">7</div>
                  <div className="text-gray-600 text-sm">Tech Stacks</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="#projects" 
                  className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Projects
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="#contact" 
                  className="group border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get In Touch
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-black p-2 flex items-center justify-center overflow-hidden">
<img 
  src="/src/assets/Images/myphoto.png"
  alt="Profile"
  className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-300"
/>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-4 shadow-xl transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-4 shadow-xl transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div className="absolute top-1/2 -left-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-3 shadow-xl transform -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-white text-sm">🚀</span>
                </div>
                <div className="absolute top-1/4 -right-8 bg-gradient-to-br from-white to-gray-200 rounded-2xl p-3 shadow-xl group-hover:-translate-x-2 transition-transform duration-300">
                  <span className="text-black text-sm">💡</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
