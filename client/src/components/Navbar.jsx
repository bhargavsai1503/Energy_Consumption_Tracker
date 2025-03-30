import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className=" absolute-top-0 p-4 bg-gray-950 text-white text-center text-lg font-bold">

      <div className="container mx-auto flex justify-between">
        <img src="/flash.png" alt="energy" className="h-8 w-auto" />
        <h1 className="text-xl font-bold">Energy Tracker</h1>
        <ul className="flex gap-4">
          <li><Link to="/" 
          className="bg-gray-900 text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-semibold border border-gray-600 transition duration-300">
          Home</Link></li>
          <li><Link to="/dashboard"
           className="bg-gray-900 text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-semibold border border-gray-600 transition duration-300">
            Dashboard</Link></li>
        </ul>

        {/* <div className="italic font-mono font-stretch-50%">Energy Tracker */}

      </div>

    </nav>
  );
}

