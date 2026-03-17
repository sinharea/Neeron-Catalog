import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Package, ShieldCheck } from "lucide-react";
import { useProduct } from "@/hooks/use-neeron";

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const productId = match && params?.id ? parseInt(params.id) : null;
  
  const { data: product, isLoading, error } = useProduct(productId);

  if (isLoading) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-gray-50 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-gray-50 text-center px-4">
        <h2 className="text-2xl font-bold text-foreground mb-4">Product not found</h2>
        <Link href="/products" className="text-primary hover:underline font-semibold">
          Return to Products
        </Link>
      </div>
    );
  }

  const gradientColor = product.imageColor || "from-primary/20 to-transparent";

  return (
    <div className="pt-28 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery area */}
          <motion.div 
            className={`rounded-3xl bg-gradient-to-br ${gradientColor} p-8 md:p-16 flex items-center justify-center relative shadow-inner`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {product.isTopProduct && (
              <div className="absolute top-6 left-6 bg-accent text-accent-foreground font-bold px-4 py-1.5 rounded-full shadow-lg">
                Top Seller
              </div>
            )}
            
            {/* Visual placeholder for the product */}
            <div className="w-48 h-72 md:w-64 md:h-96 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-white/50 flex flex-col items-center justify-center relative">
              <div className="absolute -top-4 w-24 h-6 bg-gray-200 rounded-t-md shadow-sm" />
              <div className="w-full h-full flex flex-col p-4">
                <div className={`w-full h-32 rounded-lg bg-gradient-to-b ${gradientColor} opacity-50 mb-4`} />
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-400 tracking-widest">NEERON</div>
                  <div className="text-xl font-display font-black text-foreground leading-tight mt-1">{product.name}</div>
                  <div className="mt-4 text-xs font-semibold text-primary">{product.category}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-4 w-max">
              {product.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {product.name}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-primary" />
                Available Pack Sizes
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.packSizes.map((size, idx) => (
                  <div 
                    key={idx} 
                    className="px-5 py-2.5 rounded-xl border-2 border-border font-semibold text-foreground bg-gray-50"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link 
                href={`/contact?interest=${encodeURIComponent(product.name)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg bg-gradient-neeron text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                Inquire About This Product
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
