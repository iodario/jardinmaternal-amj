import { motion } from "framer-motion";

import { Baby, Puzzle, GraduationCap, HeartPulse, ShieldCheck, Home, MessageSquareHeart } from "lucide-react";

const services = [
  { icon: Baby, title: "Estimulación Temprana", desc: "Actividades diseñadas para potenciar el desarrollo integral desde los primeros meses." },
  { icon: Puzzle, title: "Juego Guiado", desc: "Propuestas lúdicas planificadas que favorecen el aprendizaje significativo." },
  { icon: GraduationCap, title: "Personal Capacitado", desc: "Docentes y auxiliares con formación en primera infancia y primeros auxilios." },
  { icon: HeartPulse, title: "Seguimiento Individual", desc: "Acompañamiento personalizado del crecimiento y desarrollo de cada niño/a." },
  { icon: ShieldCheck, title: "Ambiente Seguro", desc: "Instalaciones diseñadas especialmente para la seguridad de los más pequeños." },
  { icon: Home, title: "Espacios Preparados", desc: "Salas equipadas con materiales pedagógicos adecuados a cada etapa." },
  { icon: MessageSquareHeart, title: "Comunicación con Familias", desc: "Canal abierto y constante para que las familias participen del proceso." },
];

const ServicesSection = () => (
  <section id="servicios" className="py-20 bg-primary-lighter">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-center mb-12">
        Nuestra Propuesta Educativa
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent mb-4">
              <Icon className="h-6 w-6 text-accent-foreground" />
            </span>
            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
