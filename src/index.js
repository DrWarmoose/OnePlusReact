import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import DispatchCanvas from "./components/DispatchCanvas";

function App() {
  return (
      <div className="App">
        <DispatchCanvas  />
      </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement);
