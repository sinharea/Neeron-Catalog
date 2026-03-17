import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Product } from "@workspace/api-client-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Use a fallback gradient if imageColor is not provided
  const gradientColor = product.imageColor || "from-primary/20 to-transparent";

  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
      {/* Image Area - simulated with gradients for now since we don't have real product photos */}
      <div className={`h-48 w-full bg-gradient-to-br ${gradientColor} relative overflow-hidden flex items-center justify-center p-6`}>
        {product.isTopProduct && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
            Top Seller
          </div>
        )}
        
        {/* Placeholder visual for the bottle/product */}
        <div className="w-24 h-32 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/50 flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
          <div className="w-16 h-4 bg-gray-200 rounded-t-sm mb-1" />
          <div className="w-20 h-full bg-white rounded-b-md shadow-inner flex flex-col items-center p-2">
            <div className={`w-full h-12 rounded-sm bg-gradient-to-b ${gradientColor} opacity-50`} />
            <div className="text-[8px] font-bold mt-2 text-center leading-tight opacity-70">NEERON<br/>{product.name.split(' ')[0]}</div>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{product.category}</div>
        <h3 className="text-xl font-display font-bold text-foreground mb-3 line-clamp-1">{product.name}</h3>
        
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="space-y-2 mb-6">
          {product.features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        <Link 
          href={`/products/${product.id}`}
          className="mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold bg-secondary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
