import React from "react";
import "../styles/MessageBox.css";

function MessageBox({ error }) {
  return (
    <div className="messageBox">
      <p>{error}</p>
    </div>
  );
}

export default MessageBox;
