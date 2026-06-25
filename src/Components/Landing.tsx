import React from "react";

const Landing: React.FC = () => {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#040816]">

      {/* =====================================================
          BASE
      ===================================================== */}

      <div className="absolute inset-0 bg-[#040816]" />

      {/* Soft overall gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #071020 0%, #050814 40%, #030611 100%)",
        }}
      />

      {/* =====================================================
          ATMOSPHERIC LIGHT
      ===================================================== */}

      {/* Left Blue */}
      <div
        className="absolute -left-[20%] top-[5%] h-[900px] w-[900px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,.28) 0%, rgba(37,99,235,.12) 40%, transparent 75%)",
          filter: "blur(140px)",
        }}
      />

      {/* Right Purple */}
      <div
        className="absolute -right-[18%] top-0 h-[1000px] w-[1000px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.24) 0%, rgba(168,85,247,.10) 45%, transparent 78%)",
          filter: "blur(150px)",
        }}
      />

      {/* Center Blue Wash */}
      <div
        className="absolute left-1/2 top-[25%] h-[700px] w-[1200px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.08), transparent 75%)",
          filter: "blur(100px)",
        }}
      />

      {/* Upper Purple Glow */}
      <div
        className="absolute left-1/2 top-[-12%] h-[500px] w-[800px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(192,132,252,.10), transparent 72%)",
          filter: "blur(90px)",
        }}
      />

      {/* Bottom Blue */}
      <div
        className="absolute bottom-[-15%] left-[15%] h-[650px] w-[650px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.12), transparent 72%)",
          filter: "blur(120px)",
        }}
      />

      {/* Bottom Purple */}
      <div
        className="absolute bottom-[-15%] right-[10%] h-[700px] w-[700px]"
        style={{
          background:
            "radial-gradient(circle, rgba(217,70,239,.10), transparent 72%)",
          filter: "blur(120px)",
        }}
      />

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,.28) 100%)",
        }}
      />

      {/* =====================================================
          SUBTLE TEXTURE
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.7) 0.6px, transparent 0.6px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* =====================================================
          FLOOR GRID
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-[260px] overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(80,140,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(80,140,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
            transform:
              "perspective(900px) rotateX(80deg) scale(2.6)",
            transformOrigin: "bottom",
            maskImage:
              "linear-gradient(to top, black 25%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 25%, transparent 100%)",
            opacity: 0.45,
          }}
        />

      </div>

    </main>
  );
};

export default Landing;