"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  App,
  Form,
  Select,
  InputNumber,
  Input,
  Segmented,
  Typography,
  Flex,
} from "antd";

import axios from "axios";

async function DataView(data: any) {
  // ✅ Good: top-level in a function component
  const [current, setCurrentValue] = useState([]);
  console.log(data);

  setCurrentValue(data);

  // setCount({data});
  // ...
}

const onChange = async (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = async (value: string) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string },
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

async function ChatRoom({ value }: { value: string }) {
  const [data, setData] = useState({});
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    // const connection = createConnection(serverUrl, roomId);
    // connection.connect();
    let data = axios.get(`https://api.github.com/search/users?q=${value}`);
    data.then((res) => {
      console.log(res.data);
      setData(res.data);
      return res.data;
    });
    console.log(data);
    // return () => {

    //   // connection.disconnect();
    // };
  }, [value]);

  return (
    <>
      <Form.Item label="Server Url">
        <Input
          value={value}
          onChange={(e: any) => setCurrentValue(e.target.value)}
        />
      </Form.Item>
    </>
  );
}

const AppC: React.FC = () => (
  <>
    <Form></Form>

    <Input placeholder="УНО" />
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: "jack",
          label: "Jack",
        },
        {
          value: "lucy",
          label: "Lucy",
        },
        {
          value: "tom",
          label: "Tom",
        },
      ]}
    />
  </>
);

// const ItemView = (value: string) => <Typography.Link>Text>{value}</Typography.Link>;

export default AppC;
