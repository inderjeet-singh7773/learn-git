import { Heart, TrendingUp, ShoppingBag, Factory, GraduationCap, Building2 } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Digital health solutions, patient engagement platforms, and healthcare analytics'
    },
    {
      icon: TrendingUp,
      title: 'Finance',
      description: 'Fintech solutions, trading platforms, and financial management systems'
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'E-commerce platforms, inventory management, and omnichannel solutions'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'IoT solutions, supply chain optimization, and production management'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'E-learning platforms, student management systems, and educational technology'
    },
    {
      icon: Building2,
      title: 'Enterprise',
      description: 'Custom enterprise solutions, workflow automation, and business intelligence'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering specialized solutions across diverse sectors with deep industry expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border-2 border-gray-100 hover:border-[#002fa6] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#002fa6] transition-colors duration-300">
                  <industry.icon
                    size={24}
                    className="text-[#002fa6] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
