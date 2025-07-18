import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Smartphone,
  Calendar,
  MapPin,
  Coffee
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  category: string;
}

const ProjectPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Itahari Mun Website",
      description: "A full-stack Itahari Ward Website solution built with React js. Features include user authentication, and admin dashboard.",
      technologies: ["React", "Typescript", "JavaScript", "Html", "Tailwind CSS"],
      githubUrl: "https://github.com/Greeceuniquecode/nagarpalika-frontend",
      liveUrl: "https://itaharimun1.vercel.app/",
      image: "/src/assets/Images/project1.png",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application using Laravel REST API and PHP. Includes real-time updates, team collaboration features, and project tracking.",
      technologies: ["Laravel", "Zammp", "PostgreSQL", "Php", "Docker"],
      githubUrl: "https://github.com/Greeceuniquecode/LARAVEL-TMS",
      liveUrl: "",
      image: "/src/assets/Images/project2.png",
      category: "Full-Stack"
    },
  ];

  const skills = [
    { name: "React", icon: <Code className="w-5 h-5" /> },
    { name: "Laravel", icon: <Server className="w-5 h-5" /> },
    { name: "Django", icon: <Database className="w-5 h-5" /> },
    { name: "TypeScript", icon: <Code className="w-5 h-5" /> },
    { name: "Node.js", icon: <Server className="w-5 h-5" /> },
    { name: "Mobile Dev", icon: <Smartphone className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-100 to-white relative overflow-hidden overflow-x-hidden pt-4">
      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              About Me
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Content */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="/src/assets/Images/myphoto.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
                </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Full-Stack Developer</h2>
                    <p className="text-blue-600">3+ Years of Experience</p>
                  </div>
                </div>
                
                <p className="text-blue-700 leading-relaxed mb-6">
                  Hello! I'm a passionate full-stack developer with 3+ years of experience building web applications. 
                  I specialize in React, Laravel, Dart, Flutter and other modern web technologies as per the requirements. 
                  My journey in software development started during my SEE examination, 
                  and I've been hooked on creating elegant solutions to complex problems ever since.
                </p>
                
                <p className="text-blue-700 leading-relaxed">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. 
                  When I am not coding, you can find me exploring new technologies or helping others learn and solve 
                  the problems they encounter.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">3+</p>
                  <p className="text-blue-600 text-sm">Years Experience</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">10+</p>
                  <p className="text-blue-600 text-sm">Projects Completed</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                  <Coffee className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-blue-600 text-sm">Cups of Coffee</p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600">
                        {skill.icon}
                      </div>
                      <span className="text-gray-900 font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-green-400 to-green-700 rounded-xl p-6 text-center">
                <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">Based in</p>
                <p className="text-blue-200">Itahari, Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-white/90 rounded-xl shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              My Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              from e-commerce platforms to data visualization tools.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-300 rounded-2xl overflow-hidden hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-600/20 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium flex-1 justify-center"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-200 to-blue-500 rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-blue-700 mb-6 max-w-2xl">
                Check out my GitHub profile for more projects and contributions to open source.
              </p>
              <a
                href="https://github.com/Greeceuniquecode"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Github size={20} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
