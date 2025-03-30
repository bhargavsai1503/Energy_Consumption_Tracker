

// import axios from "axios";

// const API_URL = "http://localhost:5000/api/energy"; // Backend API

// const apiService = {
//   getEnergyData: () => axios.get(API_URL, { withCredentials: true }), 
//   postEnergyData: (consumption) => axios.post(API_URL, { consumption }, { withCredentials: true }),
// };

// export default apiService;

import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/energy"; // Backend URL

const apiService = {
  getEnergyData: () => axios.get(API_BASE_URL),
};

export default apiService;
