import { Router, type IRouter } from "express";
import healthRouter from "./health";
import productsRouter from "./products";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(productsRouter);
router.use(contactRouter);

export default router;
