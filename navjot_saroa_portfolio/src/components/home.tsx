'use client';

export default function HomePage() {
    return (
      <section className="relative h-screen w-full overflow-hidden text-white">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/homeBackground.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
  
        {/* Overlay for dimming (optional, for readability) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
  
        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-bold">Navjot Saroa</h1>
          <p className="text-xl mt-4 font-light">
            Software Engineer | AI/ML Enthusiast | Data Scientist
          </p>
        </div>
      </section>
    );
  }
  