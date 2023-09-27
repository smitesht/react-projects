import React from "react";
import "./FieldTitleValue.css";

const FieldTitleValue = ({ title, value, className }) => {
  return (
    <div className={"field-title-wrapper " + className}>
      <p className="field-title">
        {title}: <span className="field-value">{value}</span>
      </p>
    </div>
  );
};

export default FieldTitleValue;
