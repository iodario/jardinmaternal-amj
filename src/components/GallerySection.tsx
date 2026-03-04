import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Actividades artísticas" },
  { src: g2, alt: "Juego al aire libre" },
  { src: g3, alt: "Rincón de lectura" },
  { src: g4, alt: "Juego con bloques" },
  { src: g5, alt: "Clase de música" },
  { src: g6, alt: "Hora de la merienda" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20 bg-background">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-center mb-12">
        Nuestros Espacios
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow"
          >
            <img src={img.src} alt={img.alt} className="w-full h-48 md:h-64 object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
