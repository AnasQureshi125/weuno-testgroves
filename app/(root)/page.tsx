import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionBookGeneral from "@/components/SectionBookGeneral";
import SectionBookTickets from "@/components/SectionBookTickets";
import SectionFindPlace from "@/components/SectionFindPlace";
import SectionServices from "@/components/SectionServices";
import SectionVideo from "@/components/SectionVideo";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <SectionVideo />
      <SectionBookGeneral />
      <SectionServices />
      <SectionBookTickets />
      <SectionFindPlace />
      <Footer />
    </main>
  );
}
