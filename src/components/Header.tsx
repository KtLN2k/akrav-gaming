import { FaHome, FaInfoCircle, FaDiscord, FaGamepad } from "react-icons/fa";

const navItems = [
  { icon: <FaHome size={22} />, label: "בית", href: "#home" },
  { icon: <FaInfoCircle size={22} />, label: "אודות", href: "#about" },
  { icon: <FaGamepad size={22} />, label: "קהילות", href: "#communities" },
  { icon: <FaDiscord size={22} />, label: "הצטרף לדיסקורד", href: "#footer" },
];

export default function Header() {
  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-6 bg-gray-900/90 p-3 rounded-l-2xl shadow-lg">
        {navItems.map((item, index) => (
          <li key={index} className="group relative flex items-center justify-end">
            <a
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
            >
              {item.icon}
            </a>
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
