import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [logedin, setLogedIn] = useState(false);

  const [data, setData] = useState();
  useEffect(() => {
    const checkLogin = async () => {
      const response = await axios.get("http://localhost:5000/test", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });

      setData(response.data.msg);

      if (response.data) setLogedIn(true);
    };

    checkLogin();
  }, []);

  return <div>{logedin ? <h1>{data}</h1> : <h1>Please log in</h1>}</div>;
};

export default App;
