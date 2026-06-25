import React from "react";

const BackgroundEffects: React.FC = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Main background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100" />

            {/* Large blue glow */}
            <div className="absolute left-1/2 top-20 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />

            {/* Purple glow */}
            <div className="absolute right-[-8rem] top-32 h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-[140px]" />

            {/* Cyan accent */}
            <div className="absolute left-[-6rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-cyan-400/15 blur-[130px]" />

            {/* Soft white radial */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_65%)]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right,#94a3b8 1px,transparent 1px),
                        linear-gradient(to bottom,#94a3b8 1px,transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />
        </div>
    );
};

export default BackgroundEffects;