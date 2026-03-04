import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5492235000000"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-primary-foreground shadow-lg flex items-center justify-center transition-transform hover:scale-110"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
