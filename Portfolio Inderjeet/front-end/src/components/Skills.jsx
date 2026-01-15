import { Code2, Users, Languages } from 'lucide-react';

const technicalSkills = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Node.js',
  'Express', 'MongoDB', 'MySQL', 'Git & GitHub', 'Tailwind',
  'Responsive Design', 'API Integration', 'Firebase', 'Postman'
];

const softSkills = [
  'Problem-Solving', 'Communication', 'Teamwork',
  'Time Management', 'Creativity', 'Quick Learner'
];

const languages = [
  { name: 'English', level: 'Proficient' },
  { name: 'Hindi', level: 'Native / Fluent' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Code2 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <Languages className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{lang.name}</span>
                    <span className="text-sm text-gray-600">{lang.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
