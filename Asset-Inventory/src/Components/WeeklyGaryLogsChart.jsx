import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WeeklyGaryLogsChart = () => {
  const [weeklyData, setWeeklyData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const maxBarHeight = 200; // Maximum height for the bar

  useEffect(() => {
    // Simulated weekly data for the past 7 days
    const mockWeeklyData = [5, 10, 15, 20, 25, 30, 35];
    setWeeklyData(mockWeeklyData);
  }, []);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const colors = [
    "#F87171",
    "#FBBF24",
    "#34D399",
    "#60A5FA",
    "#A78BFA",
    "#F472B6",
    "#FCD34D",
  ]; // Different colors for each day

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h3 className="text-lg font-semibold mb-4">
        Gary Collection Logs (Last 7 Days)
      </h3>
      <div className="flex space-x-4 items-end">
        {weeklyData.map((count, index) => {
          const barHeight =
            count === 0 ? 10 : (count / Math.max(...weeklyData)) * maxBarHeight; // Scale bar height

          return (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className="rounded-t"
                style={{
                  width: "40px",
                  backgroundColor: colors[index % colors.length],
                }}
                initial={{ height: "0px" }} // Start with a height of 0
                animate={{ height: `${barHeight}px` }} // Animate to the full bar height
                transition={{ duration: 1.5, ease: "easeOut" }} // Control duration and easing
              >
                <p className="text-center text-white">{count}</p>
              </motion.div>
              <p className="text-gray-600 mt-1">{days[index]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyGaryLogsChart;
