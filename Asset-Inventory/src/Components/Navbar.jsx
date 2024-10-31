import React, { useState } from "react";
import LogItemModal from "./LogItemModal";
import SearchResultModal from "./SearchResultModal";
import NotFoundModal from "./NotFoundModal";
import { motion } from "framer-motion";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNotFoundOpen, setIsNotFoundOpen] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const collections = [
    "Computer",
    "Monitor",
    "Server",
    "Switches",
    "iPads",
    "Gary",
  ];

  const handleSearchInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setSearchInput(value);
    }
  };

  const handleSearch = async () => {
    if (!searchInput) return;
    setIsLoading(true);

    let foundItem = null;

    // Simulated search logic without Firebase
    for (const collectionName of collections) {
      if (collectionName === "Computer" && searchInput === "12345") {
        foundItem = {
          AssetTag: "12345",
          value: "Sample Owner",
          location: "Sample Location",
          checkDate: new Date().toLocaleString(),
          checkType: "Checked In",
          collection: collectionName,
        };
        break;
      }
    }

    if (foundItem) {
      setSearchResult(foundItem);
      setIsSearchModalOpen(true);
    } else {
      setIsNotFoundOpen(true);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchInput) {
      handleSearch();
    }
  };

  const handleLogItemSubmit = (data) => {
    setIsLogModalOpen(false);
  };

  const handleCloseLogModal = () => {
    setIsLogModalOpen(false);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const handleCloseNotFoundModal = () => {
    setIsNotFoundOpen(false);
  };

  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div>
          <button
            onClick={() => setIsLogModalOpen(true)}
            className="bg-white text-blue-600 mx-2 px-3 py-2 rounded-lg hover:bg-gray-200"
          >
            Log Item
          </button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/ITAM.svg" alt="Logo" className="h-16 w-auto" />
        </div>

        <div className="flex space-x-4 mx-2">
          <input
            type="text"
            placeholder="Lookup by Asset Tag"
            value={searchInput}
            onChange={handleSearchInput}
            onKeyDown={handleKeyPress}
            className="p-2 rounded-lg text-black bg-white placeholder-gray-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSearch}
            className={`bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200 flex justify-center items-center ${
              searchInput ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!searchInput || isLoading}
          >
            Search
          </button>
        </div>
      </nav>

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <motion.div
            className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "linear", repeat: Infinity }}
          />
        </div>
      )}

      <LogItemModal
        isOpen={isLogModalOpen}
        onClose={handleCloseLogModal}
        onSubmit={handleLogItemSubmit}
      />

      <SearchResultModal
        isOpen={isSearchModalOpen}
        onClose={handleCloseSearchModal}
        searchResult={searchResult}
      />

      <NotFoundModal
        isOpen={isNotFoundOpen}
        onClose={handleCloseNotFoundModal}
      />
    </>
  );
};

export default Navbar;
