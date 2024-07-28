import About from "@/components/About";
import Career from "@/components/Career";
import Contacts from "@/components/Contacts";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
}
