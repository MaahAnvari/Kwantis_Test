import React, { useState, useEffect } from "react";

import axios from "axios";
import { Col, Row } from "react-flexbox-grid";

function RenderUser({ data }) {
  const users = data.map((user) => {
    return (
      <Row>
        <Col xs={1} sm={2} md={2} lg={1}>
          {user.userId}
        </Col>
        <Col xs={12} sm={3} md={2} lg={1}>
          {user.title}
        </Col>
        <Col xs={12} sm={5} md={9} lg={1}>
          {user.body}
        </Col>
      </Row>

      // <tr
      //   key={user.id}
      //   style={{ padding: 2, backgroundColor: "skyblue", borderRadius: 20 }}
      // >
      //   <td style={{ padding: 10 }}>{user.userId}</td>
      //   <td>{user.title}</td>
      //   <td>{user.body}</td>
      // </tr>
    );
  });
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <h1
        style={{
          backgroundColor: "blue",
          borderRadius: 10,
          color: "white",
          height: 50,
          alignSelf: "center"
        }}
      >
        {" "}
        Users{" "}
      </h1>
      <Row>
        <Col xs={1} sm={2} md={2} lg={1} style={{ fontWeight: "bold" }}>
          User Id
        </Col>
        <Col xs={12} sm={3} md={2} lg={1} style={{ fontWeight: "bold" }}>
          Title
        </Col>
        <Col xs={20} sm={5} md={2} lg={1} style={{ fontWeight: "bold" }}>
          Body
        </Col>
      </Row>
      {users}
      {/* <table style={{ borderRadius: 10 }}>
        <tr rowspan="5">
          <th>User Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {users}
      </table> */}
    </div>
  );
}

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
    }, 1000);
    return () => clearInterval(cache);
  });

  return (
    <div className="App">
      <RenderUser data={data} />
    </div>
  );
}

export default App;
