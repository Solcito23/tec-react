import React from "react";
import BundleItems from "../BundleItems";
import Message from "../Commons/Message";
import { useSelector } from "react-redux";

const BundleList = () => {
  const bundles = useSelector((state) => state.bundles);

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
        <BundleItems key={idx} bundle={bundle} />
      ))}
    </div>
  );
};
export default BundleList;
