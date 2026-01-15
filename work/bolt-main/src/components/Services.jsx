import { Code, TrendingUp, Megaphone, Search, Target, BarChart } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Digital Solutions",
      description:
        "Custom software development and digital product design tailored to your business needs.",
      color: "#002fa6",
    },
    {
      icon: TrendingUp,
      title: "Strategy Consulting",
      description:
        "Expert guidance on digital transformation, technology adoption, and business strategy.",
      color: "#002fa6",
    },
    {
      icon: Megaphone,
      title: "Content Marketing",
      description:
        "Engaging content creation and distribution strategies to amplify your brand voice.",
      color: "#002fa6",
    },
    {
      icon: Search,
      title: "SEO Services",
      description:
        "Comprehensive search engine optimization to boost your online visibility and rankings.",
      color: "#002fa6",
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description:
        "Strategic PPC campaigns and paid media management for maximum ROI.",
      color: "#002fa6",
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description:
        "Advanced analytics and insights to drive data-informed business decisions.",
      color: "#002fa6",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business
            and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon size={28} style={{ color: service.color }} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
