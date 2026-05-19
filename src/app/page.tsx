import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoIHelp from "@/components/WhoIHelp";
import Services from "@/components/Services";
import DomainServices from "@/components/DomainServices";
import AppBuilding from "@/components/AppBuilding";
import Process from "@/components/Process";
import Scenarios from "@/components/Scenarios";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhoIHelp />
      <Services />
      <DomainServices />
      <AppBuilding />
      <Process />
      <Scenarios />
      <Contact />
      <Footer />
    </>
  );
}
