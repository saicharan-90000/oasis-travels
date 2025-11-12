import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // tries to find & scroll to the element, with retries until timeout
  const findAndScroll = (id, timeout = 2000, interval = 100) => {
    const start = Date.now();
    return new Promise((resolve, reject) => {
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          resolve(true);
          return;
        }
        if (Date.now() - start > timeout) {
          reject(new Error("element-not-found"));
          return;
        }
        setTimeout(tryScroll, interval);
      };
      tryScroll();
    });
  };

  const handleScroll = async (sectionId) => {
    // if already on home just try to scroll
    if (location.pathname === "/") {
      try {
        await findAndScroll(sectionId);
      } catch (e) {
        console.warn("Scroll target not found on home:", sectionId);
      }
      return;
    }

    // if not on home, navigate to home first, then wait for element
    navigate("/");
    // try to find & scroll (findAndScroll will poll until found or timeout)
    try {
      await findAndScroll(sectionId, 3000, 120); // wait up to 3s, check ~every 120ms
    } catch (e) {
      console.warn("Failed to scroll after navigation:", sectionId, e);
    }
  };

  return (
    <div className="relative w-full">
      {/* logo only on home */}
      {isHomePage && (
        <div className="absolute top-[-4rem] left-[1rem] z-50">
          <img
            src={logo}
            alt="Oasis Travels Logo"
            className="w-[15rem] h-[15rem] object-contain hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          />
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full z-40 h-20 flex justify-end items-center px-24 bg-transparent">
        <div
          className="relative text-[#000000] text-[16px] font-medium tracking-wider"
          style={{ fontFamily: "'Intro', sans-serif" }}
        >
          <Link
            to="/"
            className={`absolute top-[0rem] right-[13rem] transition-all duration-300 ${
              location.pathname === "/" ? "text-[#000000]" : ""
            } group`}
          >
            Home
            <span className="absolute left-1/2 -bottom-[3px] w-0 h-[2px] bg-gradient-to-r from-[#FFD369] to-[#ffeb9a] rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </Link>

          <button
            onClick={() => handleScroll("destinations")}
            className="absolute top-[0rem] right-[4rem] transition-all duration-300 group hover:text-[#FFD369]"
            type="button"
          >
            Destinations
            <span className="absolute left-1/2 -bottom-[3px] w-0 h-[2px] bg-gradient-to-r from-[#FFD369] to-[#ffeb9a] rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="absolute top-[0rem] right-[-2rem] transition-all duration-300 group hover:text-[#FFD369]"
            type="button"
          >
            Contact
            <span className="absolute left-1/2 -bottom-[3px] w-0 h-[2px] bg-gradient-to-r from-[#FFD369] to-[#ffeb9a] rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
