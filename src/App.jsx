import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import Features from "./Components/Features"
import Dashboard from "./Components/Dashboard";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <Navbar />

      <main>
        <Hero />
        

        {/* Placeholder Sections */}

        {/* <Features
          id="features"
          className="min-h-screen"
        /> */}

        <Dashboard
         id="dashboard"
         className=""
         />

        <Pricing
          id="pricing"
          className="min-h-screen"
        />

        <Contact
          id="contact"
          className="min-h-screen"
        />

        
      </main>
    </div>
  );
};

export default App;