import { useEffect, useState } from "react";

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Backend se aane wale user ka structure
interface User {
  _id: string;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // API Call
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend Response:", data);
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Frontend API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* 🔥 Backend Data Show Example */}
      <div className="p-5 bg-gray-100 my-5">
        <h2 className="text-xl font-bold mb-3">Users from Backend</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <pre>{JSON.stringify(users, null, 2)}</pre>
        )}
      </div>

      <Services />
      <Industries />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
