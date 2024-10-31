import React, { useState, useEffect } from "react";

const RecentActivity = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    // Placeholder recent activities
    const mockActivityData = [
      {
        AssetTag: "12345",
        value: "Owner 1",
        location: "Location 1",
        checkDate: new Date().toLocaleString(),
        checkType: "Checked In",
        collection: "Computer",
      },
      {
        AssetTag: "67890",
        value: "Model XYZ",
        location: "Location 2",
        checkDate: new Date().toLocaleString(),
        checkType: "Checked Out",
        collection: "Monitor",
      },
      // Add additional mock entries as needed
    ];

    // Simulate fetching recent activity and sorting
    setActivityData(mockActivityData.slice(0, 5));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Asset Tag</th>
            <th className="px-4 py-2">Value</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Check Date</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Collection</th>
          </tr>
        </thead>
        <tbody>
          {activityData.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No recent activity available.
              </td>
            </tr>
          ) : (
            activityData.map((activity, index) => (
              <tr key={index} className="text-center border-t">
                <td className="px-4 py-2">{activity.AssetTag}</td>
                <td className="px-4 py-2">{activity.value}</td>
                <td className="px-4 py-2">{activity.location}</td>
                <td className="px-4 py-2">{activity.checkDate}</td>
                <td className="px-4 py-2">{activity.checkType}</td>
                <td className="px-4 py-2">{activity.collection}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;
