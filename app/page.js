import AboutComponent from "@/components/AboutComponent";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import HeroSection from "@/components/HeroSection";
import CatalogSwiper from "@/components/CatalogSwiper";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <CompanySection/>
      <AboutComponent/>
      <CatalogueSection/>
        <CatalogSwiper/>
        <ContactSection/>
    </>
  );
}
