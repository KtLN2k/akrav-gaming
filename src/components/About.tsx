import { FaCrosshairs } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-black py-20 relative overflow-hidden">
      {/* טקסטורה עדינה */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/noise-texture.png')",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-10">
        
        {/* בלוק 1 – תמונה משמאל */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* תמונה עם Glow */}
          <div className="relative group order-1 md:order-none">
            {/* Glow */}
            <div className="absolute -top-6 -right-6 w-52 h-52 bg-blue-500/30 blur-3xl rounded-full z-0"></div>

            {/* תמונה */}
            <img
              src="/images/about1.png"
              alt="about us"
              className="relative z-10 rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
            />

            {/* Crosshair */}
            <FaCrosshairs className="absolute top-4 right-4 text-blue-500 text-2xl opacity-70 z-10" />
          </div>

          {/* טקסט */}
          <div className="text-right">
            <h2 className="text-3xl font-bold text-white mb-4 font-[Heebo]">
              קהילת הגיימינג הישראלית
            </h2>
            <p className="text-gray-300 leading-relaxed font-[Heebo] mb-6">
              Akrav Gaming היא קהילת הגיימינג המובילה בישראל לעולם ה‑FPS וה‑Shooter.
              כאן תמצאו חברים חדשים למשחקים, תצטרפו לסקוודים מאורגנים, ותהיו חלק מאירועים וטורנירים בלעדיים.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              גלו עוד
            </a>
          </div>
        </div>

        {/* בלוק 2 – תמונה מימין */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* טקסט */}
          <div className="text-right order-2 md:order-none">
            <h2 className="text-3xl font-bold text-white mb-4 font-[Heebo]">
              טורנירים ואירועים בלעדיים
            </h2>
            <p className="text-gray-300 leading-relaxed font-[Heebo] mb-6">
              אנחנו מארגנים טורנירים ואירועי קהילה לכל חובבי משחקי ה‑FPS.
              בין אם אתם שחקני מקצוע או סתם רוצים ליהנות עם חברים – תמיד יש מקום בשבילכם.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              הצטרפו עכשיו
            </a>
          </div>

          {/* תמונה עם Glow */}
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -top-6 -left-1 w-64 h-64 bg-blue-500/30 blur-3xl rounded-full z-0"></div>

            {/* תמונה */}
            <img
              src="/images/about2.png"
              alt="events"
              className="relative z-10 rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
            />

            {/* Crosshair */}
            <FaCrosshairs className="absolute top-4 left-4 text-blue-500 text-2xl opacity-70 z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}
