import React, { useState } from "react";

const Form = () => {
  const [inputText, setInputText] = useState(" ");
  const Alert = () => {
    alert(`Your Input is :${inputText}`);
  };
  const inputchange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <input type="text" id="mytext" onChange={inputchange} />
      <button onClick={Alert}>Button</button>
    </div>
  );
};

export default Form;
