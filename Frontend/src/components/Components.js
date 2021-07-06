import React, { useState } from "react";
import axios from "axios";

const Components = () => {
  const [data, setData] = useState(() => {
    const response = axios.get("http://localhost:5000/test");
    return response.data;
  });
  return <h1>{data}</h1>;
};

export default Components;
