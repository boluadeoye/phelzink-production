import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PrintGrid from "@/components/PrintGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <PrintGrid />
    </main>
  );
}
