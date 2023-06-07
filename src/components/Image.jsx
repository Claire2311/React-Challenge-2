import React from "react";
import "./Image.css";

const Image = ({ id, name, category, picture, onClick }) => {
  return (
    <div>
      <img
        src={`http://localhost:5173/images/${picture}`}
        alt={name}
        onClick={onClick}
      />
    </div>
  );
};

export default Image;
