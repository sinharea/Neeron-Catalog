import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { inquiriesTable } from "@workspace/db/schema";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const body = SubmitContactBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  await db.insert(inquiriesTable).values({
    name: body.data.name,
    email: body.data.email,
    phone: body.data.phone,
    message: body.data.message,
    productInterest: body.data.productInterest,
  });

  res.json({ success: true, message: "Thank you for contacting Neeron! We will get back to you soon." });
});

router.get("/inquiries", async (_req, res) => {
  const inquiries = await db
    .select()
    .from(inquiriesTable)
    .orderBy(inquiriesTable.createdAt);

  res.json(inquiries);
});

export default router;
