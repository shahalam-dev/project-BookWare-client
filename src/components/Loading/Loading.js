import React from "react";

const Loading = () => {
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
