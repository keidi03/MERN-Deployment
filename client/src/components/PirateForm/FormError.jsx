import React from "react";

const FormError = ({ errorMessage, name }) => {
  return errorMessage?.[name] ? (
    <span style={{ color: "red", fontSize: "12px" }}>
      {errorMessage?.[name].message}
    </span>
  ) : (
    <></>
  );
};

export default FormError;
