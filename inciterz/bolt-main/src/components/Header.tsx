import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Industries',
      items: ['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Education']
    },
    {
      title: 'Solutions',
      items: ['Digital Transformation', 'Cloud Migration', 'Data Analytics', 'Automation']
    },
    {
      title: 'Technologies',
      items: ['Frontend', 'Backend', 'Mobile', 'DevOps']
    },
    {
      title: 'Services',
      items: ['Strategy Consulting', 'Content Marketing', 'SEO', 'Paid Advertising']
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold" style={{ color: '#002fa6' }}>
              Inciterz
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#002fa6] transition-colors py-2">
                  <span>{menu.title}</span>
                  <ChevronDown size={16} />
                </button>
                {activeMenu === menu.title && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2">
                    {menu.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#002fa6] transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 rounded-full text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: '#002fa6' }}
            >
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {menuItems.map((menu) => (
              <div key={menu.title} className="mb-4">
                <button className="flex items-center justify-between w-full text-gray-700 font-medium py-2">
                  <span>{menu.title}</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-4 mt-2 space-y-2">
                  {menu.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-sm text-gray-600 hover:text-[#002fa6] py-1"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
