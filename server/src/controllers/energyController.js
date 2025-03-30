import { getEnergyData, addEnergyData } from "../models/energyModel.js";

export const fetchEnergyData = async (req, res) => {
  try {
    const data = await getEnergyData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: "Error fetching data" });
  }
};

export const storeEnergyData = async (req, res) => {
  try {
    const { consumption } = req.body;
    if (!consumption) {
      return res.status(400).json({ error: "Consumption required" });
    }

    const newData = await addEnergyData(consumption);
    res.status(201).json(newData);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: "Error saving data" });
  }
};