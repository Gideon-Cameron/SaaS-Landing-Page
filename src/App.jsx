import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Dashboard from "./Components/Dashboard";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <Hero />
        <Dashboard />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
};

export default App;