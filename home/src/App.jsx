import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "./CustomButton";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <CustomButton />
    <div>
      Selam Home
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
