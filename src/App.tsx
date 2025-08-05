import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CommunitiesSection from "./components/CommunitiesSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div dir="rtl" className="bg-black text-white font-[Heebo]">
      <Header />
      <Hero />
      <About />
      <CommunitiesSection />
      <Footer />
    </div>
  );
}
