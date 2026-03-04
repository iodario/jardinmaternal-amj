import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Desde el primer día sentimos la calidez y el profesionalismo del equipo. Nuestro hijo va feliz todos los días.", name: "María G." },
  { text: "La comunicación constante nos da mucha tranquilidad. Recomendamos Alicia Moreau de Justo a todas las familias.", name: "Lucas y Florencia" },
  { text: "Un espacio hermoso, seguro y lleno de propuestas que estimulan a los chicos. Estamos muy agradecidos.", name: "Carolina P." },
];

const TestimonialsSection = () => (
  <section id="testimonios" className="relative py-20 bg-primary-light overflow-hidden">
    {/* Top wave */}
    <div className="absolute top-0 left-0 w-full leading-none">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px]">
        <path
          d="M0,60 C320,10 640,90 960,40 C1120,15 1300,70 1440,30 L1440,0 L0,0 Z"
          fill="hsl(145, 40%, 92%)"
        />
      </svg>
    </div>
    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 w-full leading-none">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px]">
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,100 L0,100 Z"
          fill="hsl(100, 33%, 98%)"
        />
      </svg>
    </div>

    <div className="container relative z-10">
      <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-center mb-12 text-foreground">
        Lo Que Dicen las Familias
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <Quote className="h-8 w-8 text-primary/30 mb-3" />
            <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
            <p className="font-heading font-bold text-foreground text-sm">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
