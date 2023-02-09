import React from "react";

const FormField = ({
  labelNeme,
  type,
  name,
  palceholder,
  value,
  handleChange,
  isSupriseMe,
  handleSupriseMe,
}) => {
  return (
    <div>
      <div className="flex item-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        ></label>
      </div>
    </div>
  );
};

export default FormField;
