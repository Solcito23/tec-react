import React from "react";
import { useData } from "../../Context/DataContext";
import BundleItems from "../BundleItems";

const BundleList = (props) => {
  const { bundles, deleteBundle } = useData();

  const handleDeleteBundle = (idx) => (event) => {
    event.preventDefault();
    deleteBundle(idx);
  };

  return (
    <div>
      {bundles.map((bundle, idx) => (
        <BundleItems
          key={idx}
          bundle={bundle}
          handleDeleteBundle={handleDeleteBundle}
        />
      ))}
    </div>
  );
};
export default BundleList;
