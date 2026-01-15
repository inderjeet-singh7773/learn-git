import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully.");
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        setStatus(data?.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Network error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start a<br />
              <span style={{ color: "#002fa6" }}>Conversation</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business? Get in touch with our team of
              experts and discover how we can help you achieve your digital
              goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} style={{ color: "#002fa6" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">contact@inciterz.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} style={{ color: "#002fa6" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 88608 44488</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} style={{ color: "#002fa6" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600">
                    3rd Floor, H 146-147, Sector 63 Noida, Gautam Buddha Nagar,
                    U.P.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002fa6] focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002fa6] focus:border-transparent outline-none transition-all"
                  placeholder="Name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002fa6] focus:border-transparent outline-none transition-all"
                  placeholder="Your Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002fa6] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg text-white font-medium transition-all hover:shadow-lg flex items-center justify-center space-x-2 group"
                style={{ backgroundColor: "#002fa6" }}
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {status && (
                <p className="text-center mt-2 text-sm text-gray-700">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
