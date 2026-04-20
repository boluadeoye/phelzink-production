import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PrintGrid from "@/components/PrintGrid";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Values from "@/components/Values";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <PrintGrid />
      <Portfolio />
      <Stats />
      <About />
      <Values />
      <Brands />
      <Contact />
      <Footer />
    </main>
  );
}
