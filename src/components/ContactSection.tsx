import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("¡Consulta enviada! Nos comunicaremos pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-center mb-4">
            Contactanos
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Completá el formulario y te responderemos a la brevedad.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-2xl p-6 md:p-10 shadow-card">
            <Input placeholder="Nombre completo" required className="rounded-xl" />
            <Input type="email" placeholder="Email" required className="rounded-xl" />
            <Input type="tel" placeholder="Teléfono" className="rounded-xl" />
            <Input placeholder="Edad del niño/a" className="rounded-xl" />
            <select
              className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              defaultValue=""
              required
            >
              <option value="" disabled>Jornada de interés</option>
              <option value="simple">Jornada Simple (8 a 12 h)</option>
              <option value="completa">Jornada Completa (8 a 17 h)</option>
            </select>
            <Textarea placeholder="Mensaje (opcional)" rows={4} className="rounded-xl" />
            <Button type="submit" className="w-full rounded-full font-heading font-bold text-base" disabled={sending}>
              {sending ? "Enviando..." : "Enviar Consulta"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
