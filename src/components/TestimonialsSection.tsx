import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Desde el primer día sentimos la calidez y el profesionalismo del equipo. Nuestro hijo va feliz todos los días.", name: "María G." },
  { text: "La comunicación constante nos da mucha tranquilidad. Recomendamos Semillitas a todas las familias.", name: "Lucas y Florencia" },
  { text: "Un espacio hermoso, seguro y lleno de propuestas que estimulan a los chicos. Estamos muy agradecidos.", name: "Carolina P." },
];

const TestimonialsSection = () => (
  <section id="testimonios" className="py-20 bg-primary-light">
    <div className="container">
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
