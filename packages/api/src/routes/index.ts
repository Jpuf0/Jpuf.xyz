import { Router } from "express";
import { HOSTNAME } from "../config";
import { router as v2 } from "./v2";

export const router = Router();

router.use("/v2", v2);

router.get("/", (_, res) => {
  res.api(200, {
    message: "Whalecum to the api"
  });
})

router.use((_, res) => {
  res.api(404, {
    message: "Not Found"
  })
})