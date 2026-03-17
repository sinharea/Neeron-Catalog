import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import type { Product } from "@workspace/api-client-react";
import { meeshoLinks, productImages } from "@/lib/productData";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const gradientColor = product.imageColor || "#22c55e";
  const meeshoUrl = meeshoLinks[product.name];
  const productImageSrc = productImages[product.name];

  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      {/* Image Area */}
      <div
        className="h-52 w-full relative overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${gradientColor}22, ${gradientColor}44)` }}
      >
        {product.isTopProduct && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
            Top Seller
          </div>
        )}
        {meeshoUrl && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md z-10">
            On Meesho
          </div>
        )}

        {productImageSrc ? (
          <img
            src={productImageSrc}
            alt={product.name}
            loading="lazy"
            className="h-44 w-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
          />
        ) : (
          <div
            className="w-24 h-36 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-500"
          >
            <div className="w-16 h-4 rounded-t-sm mb-1" style={{ background: gradientColor }} />
            <div className="w-20 h-full bg-white rounded-b-xl shadow-inner flex flex-col items-center p-2">
              <div className="w-full h-12 rounded-sm opacity-60" style={{ background: `linear-gradient(to bottom, ${gradientColor}, transparent)` }} />
              <div className="text-[7px] font-black mt-2 text-center leading-tight text-gray-600">NEERON<br />{product.name.split(" ")[0]}</div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">{product.category}</div>
        <h3 className="text-lg font-display font-bold text-foreground mb-2 line-clamp-1">{product.name}</h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow leading-relaxed">
          {product.description}
        </p>

        <div className="space-y-1.5 mb-5">
          {product.features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          {meeshoUrl ? (
            <a
              href={meeshoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              <ShoppingBag className="w-4 h-4" />
              Buy Now
            </a>
          ) : null}
          <Link
            href={`/products/${product.id}`}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-semibold text-sm border border-border bg-secondary text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ${meeshoUrl ? "" : "flex-1"}`}
          >
            Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
