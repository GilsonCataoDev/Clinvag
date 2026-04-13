import Hero from "./components/Hero";
import Vacinas from "./components/Vacinas";
import Footer from "./components/Footer";
import ComoFunciona from "./components/ComoFunciona";
import Contato from "./components/Contato";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Vacinas />
      <ComoFunciona />
      <Contato />
      <Footer />

      
        <a href="https://wa.me/5587999798910"
        target="_blank"
        className="wa-float"
        title="Falar no WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

export default App;