import { destinations } from "./data";
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-[#fffae6] px-6 md:px-16 py-20 fade-bg">
      {/* 🌍 Hero Section */}
      <section className="text-center mb-16">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 mt-28 text-center 
                     text-[#fffae6] tracking-widest animate-title"
          style={{
            fontFamily: "'Copperplate Gothic Bold', 'Copperplate', serif",
            letterSpacing: "0.12em",
          }}
        >
          Explore With Oasis Presents
        </h1>

        <p
          className="text-[#fffae6]/80 text-lg md:text-xl max-w-1xl mx-auto leading-relaxed mt-4 animate-fadeDelay"
          style={{
            fontFamily: "'Intro', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          Discover destinations, embrace the culture, and experience serenity.
        </p>
      </section>

      {/* 🏞️ Destinations Section */}
      <section
        id="destinations"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 scroll-mt-28"
      >
        {destinations.map((place) => (
          <div
            key={place.id}
            onClick={() => navigate(`/place/${place.id}`)}
            className="relative rounded-2xl overflow-hidden group cursor-pointer 
                       hover:scale-[1.04] transition-all duration-500 
                       shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <img
              src={place.heroImage}
              alt={place.title}
              className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 
                         transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
              <h2
                className="text-2xl font-bold mb-1"
                style={{
                  fontFamily: "'Intro', sans-serif",
                  letterSpacing: "0.07em",
                }}
              >
                {place.title}
              </h2>
              <p className="text-sm text-[#fffae6]/80">{place.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 📞 Contact Section */}
      <section
        id="contact"
        className="mt-28 text-center text-[#fffae6]/80 scroll-mt-28"
        style={{ fontFamily: "'Intro', sans-serif" }}
      >
        <h2 className="text-xl font-semibold mb-3">
          ✨ “Every journey begins with a spark — let Oasis Travels turn it into an unforgettable story.”
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Plan your dream trip with{" "}
          <span className="text-[#FFD369]">Oasis Tours & Travels</span>.  
          Reach us at <span className="text-[#FFD369]">@explorewithoasis</span>.
        </p>

        {/* 🌐 Instagram Icon + Handle */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <a
            href="https://instagram.com/explorewithoasis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[rgba(255,255,255,0.1)] border border-[#fffae6]/30 
                       px-5 py-2 rounded-full hover:scale-105 transition-all duration-300
                       hover:bg-[rgba(255,211,105,0.2)] shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <FaInstagram size={22} className="text-[#FFD369]" />
            <span className="text-[#fffae6] font-medium tracking-wide">
              @explorewithoasis
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
