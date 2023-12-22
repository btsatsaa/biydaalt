// pages/index.js

import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/lessonData");

        const result = await response.json();
        setData(result.data);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>MySQL Data in Next.js</h1>
      <ul>
        {data.map((item) => (
          <li key={item.lesson_id}>
            <div className="gap-2">
              <div className="gap-2px">{item.lesson_name}</div>
              <div className="gap-2px">{item.lesson_course}</div>
              <div className="gap-2px">{item.lesson_price}</div>
              <div className="gap-2px">{item.lesson_address}</div>
              <div className="gap-2px">{item.lesson_info}</div>
              <div className="gap-2px">{item.category}</div>
            </div>
          </li>
        ))}
      </ul>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.users_id}>
            <div className="gap-2">
              <div className="gap-2px">{item.users_name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
