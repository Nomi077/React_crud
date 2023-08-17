import React, { useEffect, useState } from "react";
import CardMain from "./CardMain";
const Card = (props) => {
  const [jdata, setJdata] = useState();
  const result = async () => {
    const url = `https://wwws.themealdb.com/api/json/v1/1/search.php?s=${props.text}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // Log the fetched data
      setJdata(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    result();
  }, []);
  console.log(jdata);
  return <>{jdata && <CardMain val={jdata} />} </>;
};

export default Card;
