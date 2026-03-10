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
        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> San Martín 2583, 5to Piso, Mar del Plata</p>
      </div>
      <div className="space-y-2">
        <h5 className="font-heading font-bold text-primary-foreground mb-2">Edades</h5>
        <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> 3 Meses a 3 Años</p>
        <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (223) 6883855</p>
      </div>
      <div className="space-y-2">
        <h5 className="font-heading font-bold text-primary-foreground mb-2">Seguinos</h5>
        <a
          href="https://www.instagram.com/jardinmaternal.amj/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors"
        >
          <Instagram className="h-5 w-5" /> @jardinmaternal.amj
        </a>
      </div>
    </div>
   

  <div className="mt-12 border-t border-primary-foreground/20 bg-primary/90 text-primary-foreground">
  <div className="container py-6 text-center">
    <p className="text-sm font-medium tracking-wide">
      © 2026 Desarrollado por <p className="font-semibold text-xs opacity-80 mt-1">
      <a href="https://www.linkedin.com/in/dario-turchi/">Dario Turchi</a>
    </p>
      
    </p>
    
  </div>
</div>

  </footer>
);

export default Footer;
