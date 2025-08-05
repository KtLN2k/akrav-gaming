import { FaDiscord, FaGithub, FaInstagram, FaSteam } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black min-h-screen flex flex-col justify-between text-white scroll-snap-align-start relative overflow-hidden"
    >
      {/* תמונה של דמות מאחורי הכותרת */}
      <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-[70%] opacity-20 md:opacity-70 w-[500px] z-0">
        {/* Glow */}
        <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"></div>
        {/* תמונה */}
        <img
          src="/images/footer-character.png" // לשים כאן את התמונה שלך
          alt="character"
          className="relative z-10 w-full h-auto object-contain"
        />
      </div>

      {/* Discord CTA */}
      <div className="flex flex-col justify-center items-center text-center flex-grow px-6 relative z-10">
        <h3 className="text-3xl font-bold mb-4 font-[Heebo]">
          הצטרפו אלינו ב-<span className="text-blue-500">Discord</span>
        </h3>
        <p className="text-gray-400 mb-6 font-[Heebo] max-w-xl">
          היו חלק מהקהילה הגדולה בישראל למשחקי FPS.  
          פגשו שחקנים חדשים, מצאו קבוצות, והשתתפו באירועים מיוחדים.
        </p>
        <a
          href="https://discord.gg/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
        >
          <FaDiscord className="text-xl" /> הצטרפו עכשיו
        </a>
      </div>

      {/* קו תחתון עם מידע ואייקונים */}
      <div className="border-t border-gray-800 w-full py-4 flex flex-col md:flex-row items-center justify-between px-6 relative z-10">
        {/* זכויות וקישור */}
        <p className="text-gray-500 text-sm mb-3 md:mb-0">
          © {new Date().getFullYear()} Akrav Gaming – כל הזכויות שמורות.  
          <span className="ml-2">
            נבנה על ידי{" "}
            <a
              href="https://benkatalan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              בן קטלן
            </a>
          </span>
        </p>

        {/* אייקונים */}
        <div className="flex gap-4 text-gray-400">
          <a href="https://discord.gg/your-link" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaDiscord size={20} />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaGithub size={20} />
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://steamcommunity.com/id/your-id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaSteam size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
