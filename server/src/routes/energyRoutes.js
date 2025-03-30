import express from "express";
import { fetchEnergyData,storeEnergyData } from "../controllers/energyController.js";

const router = express.Router();

// Route to GET energy data
router.get("/", fetchEnergyData);

// Route to POST new energy data
router.post("/",  storeEnergyData);

export default router;
