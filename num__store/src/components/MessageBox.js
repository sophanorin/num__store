import React from "react";
import "../styles/MessageBox.css";

function MessageBox(props) {
  return (
    <div className="messageBox">
      <p>{props.children}</p>
    </div>
  );
}

export default MessageBox;
