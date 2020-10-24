import React from "react";
import { FlexContainer } from "./Easyflex";

function App() {
  return (
    <>
      <FlexContainer
        className="testContainer"
        xaxis="center"
        yaxis="top"
        column={true}
      >
        <FlexContainer
          className="testItem"
          xaxis="center"
          yaxis="bottom"
          column={false}
        >
          1
        </FlexContainer>

        <FlexContainer className="testItem" xaxis="center" yaxis="center">
          2
        </FlexContainer>
        <FlexContainer className="testItem" xaxis="center" yaxis="center">
          3
        </FlexContainer>
      </FlexContainer>
    </>
  );
}

export default App;
