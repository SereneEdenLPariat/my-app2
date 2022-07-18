import React from "react";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

const defaultState = {
  name: "",
  buttonName: "Add",
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INPUT_NAME":
      // action.payload --> When you are handling a request, say onclick of an element we need to update the state
      return { ...state, name: action.name };
    case "ADD":
      return { ...state, buttonName: "Add" };
    case "SAVE":
      return { ...state, buttonName: "Save" };
    default:
      return "";
  }
};

const SecondPage = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, defaultState);

  const onClickHandler = (e) => {
    if (state.buttonName === "Add") {
      dispatch({ type: "SAVE" });
    } else if (state.buttonName === "Save") {
      dispatch({ type: "ADD" });
    }
  };

  const redirect = () => {
    navigate("/");
  };

  return (
    <div>
      <h1> Second Page</h1>
      <button onClick={redirect}>Previous</button>
      <p></p>
      <div>
        <label htmlFor="inputName">Name:</label>
        <input
          id="inputName"
          name="Name"
          type="text"
          placeholder="Enter your Name"
          onChange={(e) =>
            dispatch({ type: "INPUT_NAME", name: e.target.value })
          }
        />
      </div>
      <p></p>
      <textarea col={100} row={50} disabled={true} value={state.name} />
      <p></p>
      <button onClick={onClickHandler}>{state.buttonName}</button>
    </div>
  );
};
export default SecondPage;
