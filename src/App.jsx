import React from "react";
import { Easyflex } from "./Easyflex";

const style = {
  background: "grey",
  border: "1px solid black",
  width: "120px",
  hight: "120px",
};

function App() {
  return (
    <>
      <Easyflex
        id="testFlex"
        className="testContainer"
        xaxis="center"
        yaxis="top"
      >
        <Easyflex
          className="testItem"
          xaxis="center"
          yaxis="bottom"
          style={style}
        >
          1
        </Easyflex>

        <Easyflex
          className="testItem"
          xaxis="center"
          yaxis="center"
          style={style}
        >
          2
        </Easyflex>
        <Easyflex
          className="testItem"
          xaxis="center"
          yaxis="center"
          style={style}
        >
          3
        </Easyflex>
      </Easyflex>
    </>
  );
}

export default App;
