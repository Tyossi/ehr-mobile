import { set } from "date-fns";
import React from "react";
import Select from "react-select";

const SearchableSelect = (props) => {
  const {
    options,
    value,
    onChange,
    handleBlur,
    classNamePrefix,
    setAvailabilities = () => {},
    setDepartmentId = () => {},
  } = props;

  console.log("options", options);

  return (
    <Select
      name="staff"
      options={options}
      value={options?.find((opt) => opt.value === value) || null}
      onChange={(selectedOption) => {
        onChange(selectedOption);
        // setAvailabilities(selectedOption?.availabilities);
        // setDepartmentId(selectedOption?.department_id);
      }}
      classNamePrefix={classNamePrefix}
    />
  );
};

export default SearchableSelect;
