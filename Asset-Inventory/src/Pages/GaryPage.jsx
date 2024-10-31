import React from "react";
import { useNavigate } from "react-router-dom";

const GaryPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gary</h2>

      <div className="flex justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Back
        </button>

        {/* Export to CSV button (non-functional) */}
        <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition-colors">
          Export to CSV
        </button>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-3">Asset Tag</th>
            <th className="px-4 py-3">Serial Number</th>
            <th className="px-4 py-3">Model</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Check Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="text-center py-4">
              No assets available.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GaryPage;
