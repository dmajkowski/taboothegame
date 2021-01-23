import { useState } from "react";

import "../styles/PopupComponent.css";

const PopupComponent = (props) => {
  return (
    <div className="popup-main">
      <div>Zaczyna druzyna 1</div>
      <button
        onClick={() => {
          props.closePopup();
          props.startTimer();//dorobić start timera
        }}
      >
        OK
      </button>
    </div>
  );
};

export default PopupComponent;
