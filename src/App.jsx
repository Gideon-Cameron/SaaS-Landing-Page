import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <Navbar />

      <main>
        <Hero />

        {/* Placeholder Sections */}

        <section
          id="features"
          className="min-h-screen"
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