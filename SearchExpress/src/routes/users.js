import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient()

// Peticion get con prisma
router.get("/users", async (req, res) => {
  const userData = await prisma.users.findMany();
  res.json(userData);
});

router.post("/users", async (req, res) => {
    const newUser = await prisma.users.create({
        data: req.body
    });
    res.json(newUser);
});
 

export default router;