import { db, productsTable } from "@workspace/db";

const products = [
  {
    name: "Floor Cleaner",
    category: "Floor Care",
    description: "Premium floor cleaner that kills germs while leaving a long-lasting fragrance. Ideal for all types of flooring.",
    features: ["Kills 99.9% germs", "Long-lasting Fragrance", "Ideal for Tiles, Marble, Granite"],
    packSizes: ["500ml", "1 Liter", "5 Liter"],
    imageColor: "#FFD700",
    isTopProduct: true,
  },
  {
    name: "Toilet Cleaner",
    category: "Bathroom Care",
    description: "Powerful toilet cleaner that tackles tough stains, limescale, and odors while being safe for septic tanks.",
    features: ["Powerful against tough stains & limescale", "Disinfectant & deodorizes", "Safe for septic tanks"],
    packSizes: ["500ml", "1 Liter"],
    imageColor: "#32CD32",
    isTopProduct: true,
  },
  {
    name: "Dish Wash Liquid",
    category: "Kitchen Care",
    description: "Effective dish washing liquid that is gentle on hands but tough on grease, with a refreshing lemon fragrance.",
    features: ["Gentle on hands, tough on grease", "Sparkling clean utensils", "Refreshing lemon fragrance"],
    packSizes: ["500ml", "1 Liter", "5 Liter"],
    imageColor: "#00CED1",
    isTopProduct: true,
  },
  {
    name: "Hand Wash",
    category: "Personal Care",
    description: "Soft and effective hand wash formula that moisturizes while cleaning, available in Orange Peel fragrance.",
    features: ["Soft & effective formula", "Moisturizes while cleaning", "Available in Orange Peel fragrances"],
    packSizes: ["200ml", "500ml", "1 Liter"],
    imageColor: "#FF6347",
    isTopProduct: true,
  },
  {
    name: "Glass Cleaner",
    category: "Surface Care",
    description: "Professional glass cleaner that delivers a streak-free shine with a quick dry formula.",
    features: ["Streak-free shine", "Quick dry formula", "Perfect for glass mirrors, windows"],
    packSizes: ["500ml", "1 Liter"],
    imageColor: "#87CEEB",
    isTopProduct: true,
  },
  {
    name: "Spot Cleaner",
    category: "Specialty",
    description: "This is NOT a daily cleaner. Use only when tough stains appear. Powerful formula for stubborn stains including rust marks, hard water deposits, old bathroom stains, and black grout & corner grime.",
    features: ["Use only when tough stains appear", "Powerful formula for rust marks", "Tackles hard water deposits", "Removes old bathroom stains", "Clears black grout & corner grime"],
    packSizes: ["500ml", "1 Liter"],
    imageColor: "#D2691E",
    isTopProduct: true,
  },
  {
    name: "ShineX Steel & Scale Cleaner",
    category: "Surface Care",
    description: "Specialized cleaner that removes hard water marks and rust. Multi-purpose use on bath fittings and surfaces.",
    features: ["Removes hard water marks & rust", "Multi purpose use on Bath Fittings & surfaces"],
    packSizes: ["500ml", "1 Liter"],
    imageColor: "#C0C0C0",
    isTopProduct: true,
  },
  {
    name: "Phenyl Concentrate",
    category: "Floor Care",
    description: "Highly concentrated phenyl formula. From just 1 Ltr concentrate, make up to 20 Ltr ready-to-use Phenyl. Kills 99.9% germs.",
    features: ["Highly concentrate formula", "1 Ltr concentrate makes upto 20 Ltr ready to use", "Kills 99.9% germs"],
    packSizes: ["500ml", "1 Liter"],
    imageColor: "#9ACD32",
    isTopProduct: true,
  },
  {
    name: "Phenyl (Ready to use)",
    category: "Floor Care",
    description: "Ready-to-use phenyl with no dilution required. Instant powerful cleaning action with pleasant long-lasting fragrance.",
    features: ["Instant use - No dilution Required", "Powerful cleaning action", "Pleasant long-lasting Fragrance", "Kills 99.9% Germs"],
    packSizes: ["500ml", "1 Liter", "5 Liter"],
    imageColor: "#8FBC8F",
    isTopProduct: true,
  },
  {
    name: "Air Freshener",
    category: "Fresheners",
    description: "Instantly eliminates bad odors with a long-lasting fragrance. Available in multiple fragrances.",
    features: ["Instantly Eliminates bad odors", "Long-Lasting Fragrance", "Available in Multiple fragrance"],
    packSizes: ["200ml", "500ml"],
    imageColor: "#DDA0DD",
    isTopProduct: true,
  },
];

async function seed() {
  console.log("Seeding products...");
  
  // Clear existing products
  await db.delete(productsTable);
  
  // Insert all products
  for (const product of products) {
    await db.insert(productsTable).values(product);
  }
  
  console.log(`Seeded ${products.length} products successfully!`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
