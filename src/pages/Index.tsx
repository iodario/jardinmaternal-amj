import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <WaveDivider color="hsl(145, 35%, 96%)" />
      <AboutSection />
      <WaveDivider color="hsl(100, 33%, 98%)" flip />
      <GallerySection />
      <WaveDivider color="hsl(145, 35%, 96%)" />
      <ServicesSection />
      <WaveDivider color="hsl(145, 40%, 92%)" flip />
      <TestimonialsSection />
      <WaveDivider color="hsl(100, 33%, 98%)" />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
