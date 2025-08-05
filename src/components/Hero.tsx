import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* שכבת שחור */}
      <div className="absolute inset-0 bg-black/92"></div>

      {/* תוכן ה-Hero */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[Heebo]">
          Akrav Gaming
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 font-[Heebo]">
          קהילת הגיימינג הישראלית לעולם ה‑FPS וה‑Shooter
        </p>
        <a
          href="https://discord.gg/your-server-link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg"
        >
          הצטרפו לדיסקורד
        </a>
      </div>

      {/* חץ גלילה */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-20 animate-bounce z-10 p-3 rounded-full bg-black/40 hover:bg-blue-600 transition duration-300"
        title="גלול למטה"
      >
        <FiChevronDown className="text-white text-3xl opacity-90" />
      </button>
    </section>
  );
}
