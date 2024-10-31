export const listenToCollectionCounts = (callback) => {
  const collections = ["Computer", "Monitor", "Server", "Switches", "iPads"];
  const assetCounts = new Array(collections.length).fill(10); // Placeholder counts for each collection

  // Simulate a total asset count calculation without Firebase
  const totalAssets = assetCounts.reduce((acc, count) => acc + count, 0);
  callback(assetCounts, totalAssets);

  // Return a no-op function for unsubscribing
  return () => {};
};
