import { Layers, Server, Smartphone, Cloud, Database, Cpu } from 'lucide-react';

export default function Technologies() {
  const techCategories = [
    {
      icon: Layers,
      title: 'Frontend',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js']
    },
    {
      icon: Server,
      title: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', 'Go', '.NET']
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Ionic']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      icon: Database,
      title: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch']
    },
    {
      icon: Cpu,
      title: 'AI & ML',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Keras']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies We Master
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build scalable and robust solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
