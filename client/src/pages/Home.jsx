import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen scroll-smooth relative">
      {/* Background Gradient Effect */}
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"></div>
      </div>

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 flex flex-col lg:flex-row items-center">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 text-center lg:text-left">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Energy Consumption Tracker
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Monitor, analyze, and optimize your energy usage efficiently. Get real-time insights and maximize savings.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start gap-x-6">
              <button
                onClick={() => navigate("/dashboard")}
                className="rounded-md bg-green-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-blue-500 transition duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Flash Image */}
          <div className="mt-10 lg:mt-0 flex justify-center lg:ml-10">
            <img
              src="/flash.png"
              alt="Flash Icon"
              className="w-60 sm:w-72 md:w-80 lg:w-96 h-auto animate-pulse hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-20">
        <div id="title" className="text-center my-10">
          <h1 className="font-bold text-4xl text-white">Key Features</h1>
        </div>
        <p className="mt-6 text-center text-lg leading-8 text-gray-300">
          Track your energy consumption with real-time data and insights.
        </p>

        <div className="mx-auto max-w-7xl px-6 pb-24 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
            <div className="rounded-lg text-center overflow-hidden w-full transform shadow-lg transition-all duration-300 ease-out bg-gray-800 p-6 hover:scale-105 hover:shadow-2xl  hover:bg-blue-500">
              <h2 className="font-bold text-3xl text-white">Real-time Monitoring</h2>
              <p className="mt-4 text-gray-300 text-center">
                View real-time energy usage and track consumption patterns.
              </p>
            </div>
            <div className="rounded-lg text-center overflow-hidden w-full transform shadow-lg transition-all duration-300 ease-out bg-gray-800 p-6 hover:scale-105 hover:shadow-2xl  hover:bg-blue-500">
              <h2 className="font-bold text-3xl text-white">Cost & Savings Simulation</h2>
              <p className="mt-4 text-gray-300 text-center">
                Analyze cost savings with optimized energy consumption.
              </p>
            </div>
            <div className="rounded-lg text-center overflow-hidden w-full transform shadow-lg transition-all duration-300 ease-out bg-gray-800 p-6 hover:scale-105 hover:shadow-2xl  hover:bg-blue-500">
              <h2 className="font-bold text-3xl text-white">Recommendations</h2>
              <p className="mt-4 text-gray-300 text-center">
                Optimize Your Energy Consumption with data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-20">
        <h1 className="text-center text-4xl font-extrabold text-white">About Us</h1>
        <p className="mt-6 text-center text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
          Our platform provides deep insights into energy consumption, helping users make informed decisions on optimizing energy usage and reducing costs.
        </p>
      </div>

      {/* Get Started Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-20">
        <h1 className="text-center text-4xl font-extrabold text-white">Get Started</h1>
        <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl mx-auto">
          Register today and take control of your energy consumption with our secure and transparent tracking system.
        </p>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 text-lg font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
