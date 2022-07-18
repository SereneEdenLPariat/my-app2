import React from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/SecondPage");
  };

  return (
    <div>
      <h1>First Page</h1>
      <button onClick={redirect}>Next</button>
    </div>
  );
};
export default FirstPage;
