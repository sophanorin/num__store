import React from "react";
import { VscLoading } from "react-icons/vsc";
import "../styles/LoadingBox.css";
function LoadingBox() {
  return (
    <div className="loadingBox">
      <i>
        <VscLoading />
      </i>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingBox;
