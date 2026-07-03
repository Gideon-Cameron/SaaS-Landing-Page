import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import Features from "./Components/Features"
import Dashboard from "./Components/Dashboard";

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

        <section
          id="pricing"
          className="min-h-screen"
        />

        <section
          id="testimonials"
          className="min-h-screen"
        />

        <section
          id="faq"
          className="min-h-screen"
        />

        <footer />
      </main>
    </div>
  );
};

export default App;