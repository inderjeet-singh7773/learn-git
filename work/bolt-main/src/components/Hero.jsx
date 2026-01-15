import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-50 rounded-full opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-medium"
              style={{ color: "#002fa6" }}
            >
              Consult • Curate • Communicate
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Solutions &<br />
            <span style={{ color: "#002fa6" }}>Transformation</span> Consultants
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We help businesses navigate digital transformation with cutting-edge technology solutions,
            strategic consulting, and comprehensive marketing services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group px-8 py-4 rounded-full text-white font-medium transition-all hover:shadow-xl flex items-center space-x-2"
              style={{ backgroundColor: "#002fa6" }}
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="px-8 py-4 rounded-full border-2 font-medium transition-all hover:bg-blue-50"
              style={{ borderColor: "#002fa6", color: "#002fa6" }}
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
            border-radius: 70% 30% 50% 50% / 30% 50% 70% 50%;
          }
        }

        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
