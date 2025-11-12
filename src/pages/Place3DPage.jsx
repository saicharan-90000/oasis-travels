import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { destinations } from "./data";

export default function Place3DPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = destinations.find((p) => p.id === id);

  const [openDay, setOpenDay] = useState(null);

  if (!place)
    return <h1 className="text-center mt-20 text-[#fffae6]">Place Not Found 😢</h1>;

  return (
    <div className="min-h-screen bg-black text-[#fffae6] px-4 sm:px-8 py-10 relative overflow-x-hidden">

      {/* 🔙 Responsive Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 sm:top-6 sm:left-8 z-50 bg-[#FFD369] text-black 
                   px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base 
                   hover:scale-105 hover:bg-[#ffe699] transition-all duration-300 shadow-lg 
                   flex items-center gap-2"
        style={{
          fontFamily: "'Intro', sans-serif",
          letterSpacing: "0.03em",
        }}
      >
        <span className="text-lg sm:text-xl">←</span> Back
      </button>

      {/* 🏞️ Hero Section */}
      <div className="relative max-w-6xl mx-auto mt-16 sm:mt-20">
        <img
          src={place.heroImage}
          alt={place.title}
          className="rounded-3xl w-full h-[450px] object-cover brightness-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 rounded-3xl px-4 text-center">
          <h1
            className="text-3xl sm:text-5xl font-bold mb-3 text-[#FFD369]"
            style={{
              fontFamily: "'Copperplate Gothic Bold', serif",
              letterSpacing: "0.06em",
            }}
          >
            {place.title}
          </h1>
          <p
            className="text-base sm:text-lg mb-4 max-w-3xl text-[#fffae6]/90"
            style={{
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            {place.subtitle}
          </p>

          {/* 🏷️ Price */}
          {place.details?.price && (
            <p className="bg-[#FFD369] text-black px-6 py-2 rounded-full font-semibold shadow-md text-sm sm:text-base">
              {place.details.price}
            </p>
          )}
        </div>
      </div>

      {/* 🗓️ Itinerary Section */}
      <div className="max-w-6xl mx-auto mt-12">
        {place.itinerary ? (
          <>
            <h2
              className="text-3xl font-bold mb-6 text-[#FFD369]"
              style={{
                fontFamily: "'Copperplate Gothic Bold', serif",
                letterSpacing: "0.05em",
              }}
            >
              🗓️ {place.details?.duration} Itinerary
            </h2>

            {/* 💫 Collapsible Itinerary */}
            <div className="space-y-4">
              {place.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300"
                >
                  <button
                    onClick={() =>
                      setOpenDay(openDay === index ? null : index)
                    }
                    className="w-full flex justify-between items-center p-5 text-left"
                  >
                    <h3
                      className="text-lg sm:text-xl font-bold text-[#FFD369]"
                      style={{
                        fontFamily: "'Intro', sans-serif",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {day.day}
                    </h3>

                    <span
                      className={`text-[#fffae6] text-2xl transform transition-transform duration-300 ${
                        openDay === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`px-6 pb-5 text-[#fffae6]/90 overflow-hidden transition-all duration-500 ${
                      openDay === index ? "max-h-[400px]" : "max-h-0"
                    }`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <p className="whitespace-pre-line">{day.plan}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 🌟 Inclusions / Exclusions */}
            <div className="mt-16 flex flex-col md:flex-row justify-center items-start gap-10 sm:gap-20">
              {/* ✅ Inclusions */}
              <div className="max-w-md w-full p-6 rounded-2xl backdrop-blur-md bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <h3
                  className="text-2xl mb-4 text-[#9EFF6B]"
                  style={{
                    fontFamily: "'Intro', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  ✅ Inclusions
                </h3>
                <ul
                  className="list-none space-y-3 text-[#fffae6]/90"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {place.details.inclusions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 hover:text-[#9EFF6B] transition-colors duration-300"
                    >
                      <span className="text-[#9EFF6B] text-lg">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ❌ Exclusions */}
              <div className="max-w-md w-full p-6 rounded-2xl backdrop-blur-md bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <h3
                  className="text-2xl mb-4 text-[#FF6B81]"
                  style={{
                    fontFamily: "'Intro', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  ❌ Exclusions
                </h3>
                <ul
                  className="list-none space-y-3 text-[#fffae6]/90"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {place.details.exclusions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 hover:text-[#FF6B81] transition-colors duration-300"
                    >
                      <span className="text-[#FF6B81] text-lg">✘</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 📞 Contact Section */}
            <div
              className="mt-10 text-lg text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <p>
                For bookings and details:{" "}
                <span className="text-[#FFD369] font-semibold">
                  📞 9392329967
                </span>
              </p>
            </div>

            {/* 💬 WhatsApp Button */}
            <div className="text-center mt-8">
              <a
                href="https://wa.me/9392329967"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD369] text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,211,105,0.5)]"
                style={{ fontFamily: "'Intro', sans-serif" }}
              >
                Book on WhatsApp
              </a>
            </div>
          </>
        ) : (
          <h3 className="text-center text-[#FFD369] mt-10">
            Itinerary coming soon 🚀
          </h3>
        )}
      </div>
    </div>
  );
}
