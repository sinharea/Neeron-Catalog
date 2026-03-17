import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const trustPoints = [
    "Trusted Since 2008",
    "Sparkling Clean, Every Time",
    "Kills 99.9% Germs",
    "Eco-Friendly & Safe",
    "Affordable Price",
    "Local Support & Easy Availability",
    "Pleasant Freshness",
    "One-Time Use, Lifetime Trust"
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-white overflow-hidden">
      
      {/* Hero */}
      <section className="relative py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              About <span className="text-primary">Neeron</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Based in the historic city of Varanasi, Neeron has been a pioneer in delivering premium, high-efficacy cleaning solutions since 2008.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that a clean environment is the foundation of a healthy life. That's why we've dedicated over a decade to perfecting formulas that are tough on stains but safe for your home and the planet.
            </p>
            <div className="p-6 bg-secondary/50 border border-secondary-border rounded-2xl">
              <p className="font-display font-bold text-2xl text-foreground mb-2">"One-Time Use, Lifetime Trust"</p>
              <p className="text-primary font-semibold">— Our Promise to You</p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* The generated image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-img.png`} 
                alt="Clean modern interior" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 mt-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Why Choose Neeron?</h2>
            <p className="text-lg text-muted-foreground">What makes us the preferred choice for thousands of households and businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="font-semibold text-foreground text-lg">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
