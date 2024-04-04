"useClient";
import React from "react";
import "./index.css";
import { Select } from "antd";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string },
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const SelectOS: React.FC = () => (
  <Select
    showSearch
    placeholder="Select a OS version"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: "win10",
        label: "Windows 10",
      },
      {
        value: "Windows 8.1",
        label: "Windows 8.1",
      },
      {
        value: "Windows 7",
        label: "Windows 7",
      },
    ]}
  />
);

export default App;
