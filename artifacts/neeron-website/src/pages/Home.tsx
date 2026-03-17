import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Sparkles, Droplets, Leaf, ShieldAlert, HeartHandshake } from "lucide-react";
import { useProducts } from "@/hooks/use-neeron";
import { ProductCard } from "@/components/ui/ProductCard";

export default function Home() {
  const { data: products, isLoading } = useProducts();
  const topProducts = products?.filter(p => p.isTopProduct).slice(0, 3) || [];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Fresh cleaning splash" 
            className="w-full h-full object-cover object-center opacity-40 md:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                <ShieldCheck className="w-4 h-4" />
                Trusted Since 2008
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-extrabold text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your Partner for <br />
              <span className="text-gradient">Premium Cleaning</span> <br />
              Solutions.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Trusted by homes and businesses across India for unmatched quality, brilliant shine, and germ-free environments.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="/products"
                className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-neeron text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-foreground border-2 border-border hover:border-primary hover:text-primary shadow-sm hover:shadow-md transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US OVERVIEW */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">The Neeron Difference</h2>
            <h3 className="text-4xl font-display font-bold text-foreground">Sparkling Clean, Every Time</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Unmatched Shine", desc: "Leaves surfaces brilliantly clean with no streaks." },
              { icon: ShieldAlert, title: "Kills 99.9% Germs", desc: "Powerful disinfectants for a healthier environment." },
              { icon: Leaf, title: "Eco-Friendly", desc: "Safe formulations that protect you and nature." },
              { icon: HeartHandshake, title: "Local Support", desc: "Dedicated service right here from Varanasi." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className="p-8 rounded-2xl bg-secondary/50 border border-secondary-border hover:bg-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative background element */}
        <img 
          src={`${import.meta.env.BASE_URL}images/pattern-bg.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Catalog</h2>
              <h3 className="text-4xl font-display font-bold text-foreground">Featured Products</h3>
            </div>
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-accent hover:text-orange-600 transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-[450px] rounded-2xl bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to experience the Neeron difference?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            One-time use, lifetime trust. Join thousands of satisfied customers today.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg bg-accent text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
