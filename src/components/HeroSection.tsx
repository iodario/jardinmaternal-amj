import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-nursery.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Sala luminosa del Jardín Maternal Semillitas en Mar del Plata"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/25 to-background/80" />

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground drop-shadow-lg mb-4"
      >
        Jardín Maternal Semillitas
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg md:text-2xl text-primary-foreground/90 font-heading font-semibold mb-8 drop-shadow"
      >
        Los aprendizajes más importantes de la vida se viven jugando.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button asChild size="lg" className="rounded-full text-base font-heading font-bold shadow-card">
          <a href="#contacto">Solicitar Información</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full text-base font-heading font-bold bg-card/80 hover:bg-card border-border shadow-soft"
        >
          <a href="https://wa.me/5492235000000" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> Consultar por WhatsApp
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
