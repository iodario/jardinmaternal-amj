import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground/90 text-sm">
      <div>
        <img src={logo} alt="Jardín Maternal Alicia Moreau de Justo" className="h-14 w-auto mb-3 brightness-0 invert" />
        <p className="leading-relaxed">Jardín Maternal en Mar del Plata. Acompañamos los primeros pasos con amor y profesionalismo.</p>
      </div>
      <div className="space-y-2">
        <h5 className="font-heading font-bold text-primary-foreground mb-2">Ubicación</h5>
        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Calle Ejemplo 1234, Mar del Plata</p>
      </div>
      <div className="space-y-2">
        <h5 className="font-heading font-bold text-primary-foreground mb-2">Horarios</h5>
        <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> Lunes a Viernes 8:00 – 17:00</p>
        <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (223) 500-0000</p>
      </div>
      <div className="space-y-2">
        <h5 className="font-heading font-bold text-primary-foreground mb-2">Seguinos</h5>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors"
        >
          <Instagram className="h-5 w-5" /> @jardinsemillitas
        </a>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-xs">
      © {new Date().getFullYear()} Jardín Maternal Alicia Moreau de Justo. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
