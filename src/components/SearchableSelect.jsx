import React from "react";
import Select from "react-select";

const SearchableSelect = (props) => {
  const { options, value, onChange, handleBlur, classNamePrefix } = props;

  return (
    <Select
      name="reasonForAppointment"
      options={options}
      value={options?.find((opt) => opt.value === value) || null}
      onChange={(selectedOption) => onChange(selectedOption.value)}
      classNamePrefix={classNamePrefix}
    />
  );
};

export default SearchableSelect;
