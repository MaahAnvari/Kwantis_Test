import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import ShowData from "./ShowData";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cache = setInterval(() => {
      {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
          console.log(res.data);
          setData(res.data);
          console.log(data);
        });
      }
    }, 36000);
    return () => clearInterval(cache);
  });

  return <ShowData data={data} />;
}

const container = document.getElementById("container");
const root = createRoot(container);
root.render(<App />);
