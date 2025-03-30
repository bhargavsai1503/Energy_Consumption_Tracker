// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Analytics from "./pages/Analytics";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/analytics" element={<Analytics />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnergyDashboard from "./components/EnergyDashboard";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="m-0 p-0">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<EnergyDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

