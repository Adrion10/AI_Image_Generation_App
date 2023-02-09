import React from "react";

const FormField = ({
  labelName,
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
        >
          {labelName}
        </label>
        <button
          type="button"
          onClick={handleSupriseMe}
          className="font-semibold text-xs bg-[#ececf1]"
        ></button>
      </div>
    </div>
  );
};

export default FormField;
