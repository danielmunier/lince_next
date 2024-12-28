import Image from "next/image";
import Header from "./components/ui/header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import SwiperLogos from "./components/SwiperLogos";
import Contact from "./components/Contact";
import Footer from "./components/ui/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Clients />
      <SwiperLogos />
      <Contact />
    </>
  );
}
