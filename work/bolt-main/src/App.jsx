import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
