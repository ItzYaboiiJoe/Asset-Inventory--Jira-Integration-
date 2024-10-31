export const checkAssetInAllCollections = async (assetTag) => {
  const collectionsToCheck = [
    "Computer",
    "Monitor",
    "Server",
    "Switches",
    "iPads",
    "Gary",
  ];

  // Placeholder structure for the response
  let assetData = {
    AssetTag: assetTag,
    value: "Sample Value",
    location: "Sample Location",
    collection: "Sample Collection",
  };
  let foundInCollection = "Sample Collection"; // Placeholder collection name

  // Placeholder logic, without Firebase
  for (const collectionName of collectionsToCheck) {
    if (collectionName === "Computer") {
      // Assume a condition is met for the placeholder
      foundInCollection = collectionName;
      break;
    }
  }

  return { assetData, foundInCollection };
};
