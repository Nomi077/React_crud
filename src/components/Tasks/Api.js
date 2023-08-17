import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const fetchedData = await response.json();
    setData(fetchedData);
    console.log(data);
  };

  return (
    data.length > 0 && (
      <div>
        <h4>User Id is ::{data[0].userId}</h4>
        <h4>User Title: {data[0].title}</h4>
      </div>
    )
  );
};

export default Api;
