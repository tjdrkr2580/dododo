import React, { useState } from "react";
import { useDispatch } from "react-redux";

const InputForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return <div>InputForm</div>;
};

export default InputForm;
