import React from "react";

const ShimmerUi = () => {
  return (
    <div className="restaurent-list">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerUi;
