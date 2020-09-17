import React from "react";
import { useData } from "../../Context/DataContext";
import BundleItems from "../BundleItems";
import Message from "../Commons/Message";

const BundleList = (props) => {
  const { bundles, deleteBundle } = useData();

  const handleDeleteBundle = (idx) => (event) => {
    event.preventDefault();
    deleteBundle(idx);
  };

  return (
    <div>
      {bundles.length === 0 && (
        <div>
          <Message
            message={
              "First, try creating a new bundle :). Then, We'll show them here"
            }
          />
        </div>
      )}

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
