import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Get In Touch
        </h2>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href="mailto:rathoreeshant@gmail.com"
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">rathoreeshant@gmail.com</p>
          </a>

          <a
            href="tel:+919828217893"
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">+91 9828217893</p>
          </a>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 text-sm">Delhi, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/inderjeet-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Github className="text-white" size={24} />
          </a>

          <a
            href="https://linkedin.com/in/inderjeet-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Linkedin className="text-white" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
