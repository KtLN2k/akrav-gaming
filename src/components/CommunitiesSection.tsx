const games = [
  { name: "Battlefield", logo: "/images/games/battlefield.png" },
  { name: "Counter Strike 2", logo: "/images/games/cs2.png" },
  { name: "Rust", logo: "/images/games/rust.png" },
  { name: "Ready or Not", logo: "/images/games/ron.png" },
  { name: "COD Warzone", logo: "/images/games/warzone.png" },
  { name: "PUBG", logo: "/images/games/pubg.png" },
];

export default function CommunitiesSection() {
  return (
    <section
      id="communities"
      className="bg-black min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">

        {/* לוגואים – מסודרים "מבולגנים" */}
        <div className="relative flex flex-wrap gap-6 justify-center md:justify-start order-1 md:order-none">
          {games.map((g, i) => (
            <div
              key={i}
              className="bg-gray-900/50 p-4 rounded-lg shadow-lg hover:shadow-blue-500/40 transition transform hover:scale-105"
              style={{
                transform: `rotate(${(i % 2 === 0 ? 3 : -3)}deg)`,
              }}
            >
              <img src={g.logo} alt={g.name} className="h-16 w-auto" />
            </div>
          ))}
        </div>

        {/* טקסט + דמות מאחוריו */}
        <div className="relative text-right order-2 md:order-none z-10">
          {/* דמות ברקע עם Glow */}
          <div className="absolute -top-43 -left-25 w-[450px] opacity-20 md:opacity-30 z-0">
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"></div>
            {/* תמונה של הדמות */}
            <img
              src="/images/character.png" // כאן לשים את הדמות שלך
              alt="character"
              className="relative z-10 w-full h-auto object-contain"
            />
          </div>

          {/* תוכן טקסט */}
          <h2 className="text-3xl font-bold font-[Heebo] mb-4 relative z-10">
            <span className="text-white">הקהילות </span>
            <span className="text-blue-500">שלנו</span>
          </h2>
          <p className="text-gray-300 mb-6 font-[Heebo] leading-relaxed relative z-10">
            ב־<span className="text-blue-500 font-semibold">Akrav Gaming</span> אנחנו מאחדים שחקנים מכל רחבי הארץ תחת 
            <span className="text-blue-500 font-semibold"> קהילות ייחודיות</span> המוקדשות למשחקי ה־FPS המובילים בעולם.  
            כאן תוכלו למצוא <span className="text-blue-500 font-semibold">סקוודים קבועים</span>, שותפים למשחקים, 
            ולקחת חלק ב־<span className="text-blue-500 font-semibold">אירועים מיוחדים</span> ותחרויות נושאות פרסים.
          </p>
          <p className="text-gray-300 font-[Heebo] leading-relaxed relative z-10">
            בין אם אתם <span className="text-blue-500 font-semibold">שחקנים מקצועיים</span> או סתם מחפשים חוויית משחק מהנה עם חברים – 
            תמיד תמצאו כאן <span className="text-blue-500 font-semibold">מקום בבית</span>.  
            הצטרפו אלינו וגלו <span className="text-blue-500 font-semibold">קהילה תוססת</span> שתיקח את חוויית הגיימינג שלכם לשלב הבא.
          </p>
        </div>

      </div>
    </section>
  );
}
