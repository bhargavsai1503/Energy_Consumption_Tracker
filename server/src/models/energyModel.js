import pool from "../config/db.js";

export const getEnergyData = async () => {
 try {
 const result = await pool.query("SELECT * FROM energy_data ORDER BY timestamp DESC");
  return result.rows;
}catch (error) {
    console.error("Error fetching energy data:", error);
    throw error;}
};

export const addEnergyData = async () => {
 try{
   
  let consumption = (Math.random() * (50 - 30) + 30).toFixed(2); 
  const result = await pool.query(
    "INSERT INTO energy_data (consumption, timestamp) VALUES ($1, NOW()) RETURNING *",
    [consumption]
  );
  return result.rows[0];
}catch (error) {
    console.error("Error adding energy data:", error);
    throw error;
  }

};
setInterval(addEnergyData, 10000);


