import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  // Placeholder totals for each category
  const totalComputers = 100;
  const totalMonitors = 75;
  const totalServers = 50;
  const totalSwitches = 30;
  const totalIpads = 25;
  const totalGary = 10;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
      <div className="bg-teal-500 p-6 text-white rounded-lg">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {totalComputers}
        </motion.h2>
        <p className="text-sm uppercase">Total Computers</p>
        <Link to="/computers" className="mt-4 text-sm hover:underline">
          More Info
        </Link>
      </div>
      <div className="bg-red-500 p-6 text-white rounded-lg">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {totalMonitors}
        </motion.h2>
        <p className="text-sm uppercase">Total Monitors</p>
        <Link to="/monitors" className="mt-4 text-sm hover:underline">
          More Info
        </Link>
      </div>
      <div className="bg-blue-500 p-6 text-white rounded-lg">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {totalServers}
        </motion.h2>
        <p className="text-sm uppercase">Total Servers</p>
        <Link to="/servers" className="mt-4 text-sm hover:underline">
          More Info
        </Link>
      </div>
      <div className="bg-orange-500 p-6 text-white rounded-lg">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {totalSwitches}
        </motion.h2>
        <p className="text-sm uppercase">Total Switches</p>
        <Link to="/switches" className="mt-4 text-sm hover:underline">
          More Info
        </Link>
      </div>
      <div className="bg-purple-500 p-6 text-white rounded-lg">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {totalIpads}
        </motion.h2>
        <p className="text-sm uppercase">Total iPads</p>
        <Link to="/ipads" className="mt-4 text-sm hover:underline">
          More Info
        </Link>
      </div>

      <div className="relative bg-green-500 p-6 text-white rounded-lg">
        <motion.h2
          className="text-2xl font-bold relative z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {totalGary}
        </motion.h2>
        <p className="text-sm uppercase relative z-10">Total Gary</p>
        <Link to="/gary" className="mt-4 text-sm hover:underline relative z-10">
          More Info
        </Link>
        {/* <img
          src="/Gary.png"
          alt="Gary"
          className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg"
        /> */}
      </div>
    </div>
  );
};

export default Dashboard;
