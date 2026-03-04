import { motion } from "framer-motion";
import aboutImg from "@/assets/gallery-3.png";
import { MapPin, Clock, Users, CalendarCheck } from "lucide-react";

const details = [
  { icon: MapPin, text: "Mar del Plata, Buenos Aires" },
  { icon: Users, text: "Desde 45 días hasta 3 años" },
  { icon: Clock, text: "Jornada simple (8 a 12 h) y completa (8 a 17 h)" },
  { icon: CalendarCheck, text: "Cupos limitados — Inscripción con entrevista previa" },
];

const AboutSection = () => (
  <section id="nosotros" className="py-20 bg-primary-lighter">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-card max-w-md"
      >
        <img
          src={aboutImg}
          alt="Espacio de lectura del jardín maternal"
          className="w-full h-auto block"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Sobre Nuestro Jardín
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          En <strong>Alicia Moreau de Justo</strong> acompañamos a cada niño y niña en sus primeros años de vida con
          una propuesta pedagógica basada en el afecto, el juego y la exploración. Nuestro equipo de
          profesionales capacitados trabaja en un ambiente seguro, cálido y estimulante, manteniendo una
          comunicación constante con las familias.
        </p>

        <ul className="space-y-4">
          {details.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 h-9 w-9 rounded-full bg-accent flex items-center justify-center">
                <Icon className="h-5 w-5 text-accent-foreground" />
              </span>
              <span className="text-foreground/80 text-sm md:text-base">{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
