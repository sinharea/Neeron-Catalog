import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { productsTable } from "@workspace/db/schema";
import { GetProductsQueryParams, GetProductByIdParams } from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/products", async (req, res) => {
  const query = GetProductsQueryParams.safeParse(req.query);
  if (!query.success) {
    res.status(400).json({ error: "Invalid query parameters" });
    return;
  }

  let products;
  if (query.data.category) {
    products = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.category, query.data.category));
  } else {
    products = await db.select().from(productsTable);
  }

  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const params = GetProductByIdParams.safeParse({ id: req.params.id });
  if (!params.success) {
    res.status(400).json({ error: "Invalid product ID" });
    return;
  }

  const [product] = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id, params.data.id));

  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }

  res.json(product);
});

export default router;
