import React from "react";

const Mesage = (props) => {
  return (
    <div className="message" style={{ background: props.color }}>
      <p>{props.message}</p>
    </div>
  );
};

export default Mesage;
