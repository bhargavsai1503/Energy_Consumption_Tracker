import { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import io from "socket.io-client";
import apiService from "../services/apiService";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, BarElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const socket = io("http://localhost:5000");

export default function EnergyDashboard() {
  const [energyData, setEnergyData] = useState([]);
  
  useEffect(() => {
    apiService.getEnergyData()
      .then(response => setEnergyData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    socket.on("newEnergyData", (newEntry) => {
      setEnergyData(prevData => [...prevData.slice(-90), newEntry]);
    });
    return () => socket.off("newEnergyData");
  }, []);

  const maxConsumption = Math.max(...energyData.map(data => data.consumption), 0);
  const minConsumption = Math.min(...energyData.map(data => data.consumption), 0);
  const avgConsumption = (energyData.reduce((acc, curr) => acc + curr.consumption, 0) / energyData.length).toFixed(2);
  const totalConsumption = energyData.reduce((acc, curr) => acc + curr.consumption, 0).toFixed(2);
  const ratePerKWh = 0.15;
  const estimatedCost = (totalConsumption * ratePerKWh).toFixed(2);

  const hourlyConsumption = energyData.reduce((acc, data) => {
    const hour = new Date(data.timestamp).getHours();
    acc[hour] = (acc[hour] || 0) + data.consumption;
    return acc;
  }, {});

  const hourlyChartData = {
    labels: Object.keys(hourlyConsumption).map(hour => `${hour}:00`),
    datasets: [{
      label: "Hourly Energy Consumption (kWh)",
      data: Object.values(hourlyConsumption),
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    }],
  };

  const recommendations = [];
  if (maxConsumption > avgConsumption * 1.5) {
    recommendations.push("Consider using energy-intensive appliances during off-peak hours to save costs.");
  }
  if (totalConsumption > 50) {
    recommendations.push("Your total energy consumption is high. Try optimizing usage by turning off unused devices.");
  }
  if (minConsumption < avgConsumption * 0.5) {
    recommendations.push("There are periods of low energy use. Consider shifting more activities to those times.");
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Energy Consumption Tracker (Live)</h2>
      <div className="h-96">
        <Line data={{
          labels: energyData.length > 0 ? energyData.map(data => new Date(data.timestamp).toLocaleTimeString()) : ["No Data"],
          datasets: [{
            label: "Energy Consumption (kWh)",
            data: energyData.length > 0 ? energyData.map(data => data.consumption) : [0],
            borderColor: "#42A5F5",
            borderWidth: 2,
            pointBackgroundColor: "#007bff",
            tension: 0.4,
          }],
        }} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Total Consumption Today</h3>
          <p>{totalConsumption} kWh</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Average Usage</h3>
          <p>{avgConsumption} kWh</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Estimated Cost</h3>
          <p>${estimatedCost}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Usage Variance</h3>
          <p>Min: {minConsumption} kWh | Max: {maxConsumption} kWh</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Hourly Consumption</h3>
        <div className="h-72">
          <Bar data={hourlyChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
      {recommendations.length > 0 && (
        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
          <h3 className="text-lg font-semibold">Recommendations</h3>
          <ul className="list-disc pl-5">
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
