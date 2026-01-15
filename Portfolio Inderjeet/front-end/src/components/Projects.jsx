import { Car, CheckSquare, Globe } from 'lucide-react';

const projects = [
  {
    icon: Car,
    title: 'VSR TAXI - Cab Booking Website',
    description: 'Developed a responsive taxi booking website that allows users to select cabs, view estimated fares, and input personal details. Designed a modern user interface and prepared the structure for future backend integration.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: CheckSquare,
    title: 'Todo List Web App',
    description: 'Created an interactive task management application. Users can add, delete, and mark tasks as complete. Implemented DOM manipulation and localStorage for saving tasks between sessions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website to showcase web development projects and skills. The site is fully responsive, visually clean, and highlights front-end development expertise.',
    tech: ['HTML', 'CSS'],
    color: 'from-blue-500 to-cyan-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
