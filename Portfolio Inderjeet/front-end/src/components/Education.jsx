import { GraduationCap, School } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Chaudhary Charan Singh University (CCSU)',
    location: 'HIE-RANK Business School, Noida Sec-62',
    year: '2022 - 2025',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    icon: School,
    degree: 'Senior Secondary (12th), CBSE',
    institution: 'G.B.S.S. School, Delhi',
    location: 'Stream: PCM',
    year: '2021',
    color: 'from-green-600 to-emerald-500'
  },
  {
    icon: School,
    degree: 'Secondary (10th), CBSE',
    institution: 'G.B.S.S. School, Delhi',
    location: '',
    year: '2019',
    color: 'from-orange-600 to-amber-500'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 font-medium mb-1">
                      {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="text-gray-600 text-sm mb-1">
                        {edu.location}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm font-medium">
                      {edu.year}
                    </p>
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
