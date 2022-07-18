import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./FirstPage.js";
import SecondPage from "./SecondPage.js";

class App extends React.Component {
  render() {
    return (
      // <div>
      //   <FirstPage />
      //   <SecondPage />
      // </div>

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<FirstPage />} />
            <Route exact path="/SecondPage" element={<SecondPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
