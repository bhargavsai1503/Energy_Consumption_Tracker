# Energy Consumption Tracker

## Overview
The **Energy Consumption Tracker** is a full-stack web application that monitors and analyzes energy usage over time. Users can view energy consumption data and gain insights into their usage patterns.

## Features
- 📊 **Energy Data Analysis** with interactive charts
- 📂 **Data Storage** using PostgreSQL
- ⚡ **RESTful API** for fetching and storing energy consumption data
- 🎨 **Modern UI** built with React and Chart.js
- 🔄 **Real-Time Updates** for instant energy consumption insights

---

## Tech Stack
### **Frontend**
- **React.js** – UI development
- **Chart.js** – Visualizing energy data

### **Backend**
- **Node.js** & **Express.js** – API and server logic
- **PostgreSQL** – Database for storing energy data
- **pg (node-postgres)** – PostgreSQL integration

### **Libraries & APIs Used**
This project utilizes several open-source libraries and APIs:

#### **Frontend Libraries**
- **React.js** – For building the UI
- **Chart.js** – For data visualization
- **Axios** – For making HTTP requests

#### **Backend Libraries**
- **Express.js** – For handling API routes
- **pg (node-postgres)** – For PostgreSQL database integration
- **dotenv** – For managing environment variables
- **cors** – For enabling cross-origin requests
- **body-parser** – For handling JSON request bodies

#### **Real-Time Functionality**
- **WebSockets (socket.io)** – For real-time updates (without page refresh)

#### **Development & Utilities**
- **Nodemon** – For live server reloading during development

---

## Project Setup
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-repo/energy-tracker.git
cd energy-tracker
```

### 2️⃣ **Backend Setup**
```bash
cd server
npm install
```

#### **Configure Environment Variables**
Create a `.env` file in the `server` directory and set up the database configuration:
```env
PORT=5000
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=energy_tracker
DB_PASSWORD=your_db_password
DB_PORT=5432
```

#### **Start the Backend Server**
```bash
npm start
```

### 3️⃣ **Database Setup**
Ensure PostgreSQL is running, then create the database and tables:
```bash
psql -U your_db_user -d energy_tracker -f database/schema.sql
```

### 4️⃣ **Frontend Setup**
```bash
cd ../client
npm install
npm run dev
```

---

## API Endpoints
### **Base URL**: `http://localhost:5000/api/energy`

### **1️⃣ Get Energy Data**
- **Endpoint**: `GET /`
- **Response**:
```json
[
  {
    "id": 1,
    "consumption": 42,
    "timestamp": "2024-03-30T12:00:00Z"
  }
]
```

### **2️⃣ Add Energy Data**
- **Endpoint**: `POST /`
- **Body (JSON)**:
```json
{
  "consumption": 45
}
```
- **Response**:
```json
{
  "id": 2,
  "consumption": 45,
  "timestamp": "2024-03-30T12:05:00Z"
}
```

---

## Future Improvements 🚀
✅ Implement **user authentication**
✅ Add **data filtering and historical analysis**
✅ Improve **UI/UX with better visualizations**
✅ Integrate **blockchain** for secure and immutable energy transaction records
✅ Implement **smart contracts** to reward users for energy efficiency
✅ Develop **decentralized energy trading** using blockchain to enable peer-to-peer energy sharing
✅ Utilize **blockchain-based carbon credits** to incentivize renewable energy adoption
✅ Enhance **energy audit verification** with tamper-proof blockchain records

---

## Real-Time Data Updates
The application utilizes **WebSockets** to provide real-time updates without requiring page refreshes. This ensures users receive the latest energy consumption data instantly.

---

## Contributors ✨
- Bhargav Sai(https://github.com/bhargavsai1503)
- Sathish Addala(https://github.com/sathishh7)

---

## License
This project is licensed under the MIT License.
