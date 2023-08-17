import React from "react";

const List = () => {
  const fruitlist = ["apple", "banana", "nashpati", "orange", "2", 2];

  return (
    <div>
      <ul>
        {fruitlist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
